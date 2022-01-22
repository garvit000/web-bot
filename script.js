function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("bodeonn");
  var z = document.getElementById("home");
  var g = document.getElementById("gsrinvite");
  var h = document.getElementById("header");
  if (x.className === "top_nav") {
    x.className += " responsive";
  } else {
    x.className = "top_nav";
  }

  if (y.className === "bodeon") {
    y.className += " responsive";
  } else {
    y.className = "bodeon";
  }
  
  if (z.className === "home") {
    z.className += " responsive";
  } else {
    z.className = "home";
  }
  
  if (g.className === "gsrinvite") {
    g.className += " responsive";
  } else {
    g.className = "gsrinvite";
  }
  
  if (h.className === "header") {
    h.className += " responsive";
  } else {
    h.className = "header";
  }
}

const iconic = document.getElementById("iconic");
  iconic.onclick = function() {
  document.body.classList.toggle("light-theme");
  if(document.body.classList.contains("light-theme")) {
    iconic.src='./Media/moon.png'
  } else {
    iconic.src='./Media/sun.png'
  }
}


const targetDiv = document.getElementById("logo");
const btn = document.getElementById("toogle");
btn.onclick = function() {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
