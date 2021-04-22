export const Timer = (function () {
  let time = 0;
  let timer;

  function startTimer() {
    timer = setInterval(() => {
      time += 1;
      document.getElementById("time").innerText = time;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  function resetTimer() {
    time = 0;
    document.getElementById("time").innerText = time;
  }

  return {
    startTimer,
    stopTimer,
    resetTimer
  };
})();
