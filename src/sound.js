
function Sound(src, vol) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);

  this.play = () => {
    this.prom = this.sound.play();
    if (this.prom !== undefined) {
      this.prom
        .then(() => {})
        .catch(err => console.log("Audio failed to load."))
    }
  }

  this.stop = () => {
    this.sound.pause();
  }

  this.sound.volume = parseFloat(vol);
}

export default Sound;
