window.onload = function() {
  var links = document.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      window.location.href = this.href;
    };
  }
};
