document.getElementById("start").onclick = () => {
  Twitch.ext.send("broadcast", "application/json", {
    action: "start"
  });
};
