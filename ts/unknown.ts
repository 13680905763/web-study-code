// any: 我不在乎它的类型 ， unknown: 我不知道它的类型

let value: unknown
// unknown只能赋值给any跟unknown
let value3: unknown = value
let value2: any = value
// let value1: number = value

// unknown必须做类型检查或类型断言才能进行操作
function foo(fn: unknown) {
  // fn()
  if (typeof fn === 'function') {
    fn()
  }
}
