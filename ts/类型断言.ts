// 类型断言as
// 无法获取具体的类型信息，这个我们需要使用类型断言
// 类型断言转换为 更具体 或者 不太具体 的类型版本，此规则可防止不可能的强制转换

const imgEl = document.querySelector('img') as HTMLImageElement
imgEl.src = '图片地址'

// 非空类型断言!
// 表示可以确定某个标识符是有值的，跳过ts在编译阶段对它的检测

function getMessage(message?: string) {
  console.log(message.toUpperCase())
  console.log(message!.toUpperCase())
}
