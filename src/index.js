import "./styles.css";
import { Timer } from "./helpers/timer";

document.getElementById("app").innerHTML = `
<h1>Singleton</h1>
<div>
  <h1 id=time>0</h1>
  <button id='start'>Start</button>
  <button id='stop'>Stop</button>
  <button id='reset'>Reset</button>
</div>
`;

document.getElementById("start").addEventListener("click", () => {
  Timer.startTimer();
});
document.getElementById("stop").addEventListener("click", () => {
  Timer.stopTimer();
});
document.getElementById("reset").addEventListener("click", () => {
  Timer.resetTimer();
});
