// type 类型别名，取名字方便复用，不能重复声明
// interface 接口 ，可以重复的对某个接口来定义属性和方法
// 定义非对象类型，通常推荐使用type

interface person {
  name: string
}
interface person {
  age: string
}
let bar: person = {
  name: '123'
}

// 联合类型 | 
// 交叉类型 &