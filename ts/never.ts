// never 永远不会发生的值

function loopFn(): never {
  while (true) {
    console.log(123)
  }
}

function loopErr(): never {
  throw new Error()
}

function handleMessage(message: number | string) {
  switch (typeof message) {
    case 'string':
      console.log('string')
      break
    case 'number':
      console.log('number')
      break
    default:
      const check: never = message
  }
}

type neverType = number & string
