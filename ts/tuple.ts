// tuple 元组 ：每个元素都有自己特性的类型，根据索引值获取到的值可以确定对应的类型

const info1: (string | number)[] = ['hello', 18]
const item1 = info1[0] // 不能确定类型

const info2: [string, number] = ['hello', 18]
const item2 = info2[0] // 一定是string

// 应用场景
function useState<T>(state: T): [T, (newState: T) => void] {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }
  return [currentState, changeState]
}
