// https://juejin.im/post/5d8c2ae1518825091b2c17e6

function errorCatch() {
  window.addEventListener('error', (e) => {
    console.log(e)

    return true
  // 是否先于它下面的 EventTarget 调用该 listener
  }, true)
}

export default errorCatch
