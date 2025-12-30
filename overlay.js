let start = null;
let running = false;

Twitch.ext.onAuthorized(() => {
  console.log("Overlay ready");
});

function startTimer() {
  start = performance.now();
  running = true;
  requestAnimationFrame(update);
}

function update(t) {
  if (!running) return;
  const ms = t - start;
  document.getElementById("timer").textContent =
    (ms / 1000).toFixed(3);
  requestAnimationFrame(update);
}

Twitch.ext.listen("broadcast", (t, c, msg) => {
  if (msg.action === "start") startTimer();
});
