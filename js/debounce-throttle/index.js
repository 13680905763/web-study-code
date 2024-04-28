function debounce(fn, delay) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
      timer = null
    }, delay)
  }
}
function throttle(fn, interval) {
  let startTime = 0
  return function () {
    const waitTime = interval - (nowTime - startTime)
    if (waitTime <= 0) {
      fn()
      startTime = nowTime
    }
  }
}
