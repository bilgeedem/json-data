function on(text) {
    document.getElementById("text").innerText = text;
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  