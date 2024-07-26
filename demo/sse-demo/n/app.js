const express = require('express')
const app = express()
const port = 8002

let strArr = [
    'a',
    'b',
    'c',
    'd'
]
let setTask = null

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/event-stream;charset-utf-8')
    res.setHeader('Cache-Control','no-cache')
    res.setHeader('Connection','keep-alive')
    let num = 0
    setTask = setInterval(()=>{
        res.write(`data:${strArr[num]}\n\n`)
        num++
        if(num>3){
            res.write('data:end\n\n')
            res.end()
            clearInterval(setTask)
            setTask=null
        }
    },1000)
})
app.listen(port,()=>{
    console.log('端口启动');
})