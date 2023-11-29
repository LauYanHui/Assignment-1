
document.addEventListener('DOMContentLoaded', (event) => {
  var container = document.getElementById('slideshow-container');
  var start;

  container.addEventListener('mousedown', function(e) {
    if (e.target.parentNode.tagName === 'A') {
      return;
    }
    start = e.pageX;
  });

  container.addEventListener('mouseup', function(e) {
    if (e.target.parentNode.tagName === 'A') {
      return;
    }
    var end = e.pageX;
    var distance = end - start;

    if (distance < 0) {
      container.scrollBy({left: 300, behavior: 'smooth'});
    } else {
      container.scrollBy({left: -300, behavior: 'smooth'});
    }
  });

  // Add event listeners for the arrows
  var arrows = document.getElementsByClassName('arrow');
  for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function(e) {
      if (e.target.classList.contains('left')) {
        container.scrollBy({left: -602, behavior: 'smooth'});
      } else {
        container.scrollBy({left: 602, behavior: 'smooth'});
      }
    });
  }
});

