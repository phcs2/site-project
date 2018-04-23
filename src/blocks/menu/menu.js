document.addEventListener('DOMContentLoaded', function(){

  var menu = document.querySelector('.menu');
  menu.addEventListener('click', listener);

  function listener(e) {
    var t = e.target;
    var menuIcons = menu.querySelectorAll('.menu__icon');
    if (t === menu.querySelector('button[name="search-close"]')) menuIcons[1].classList.remove('js-open');
    while (t.tagName !== 'DIV') t = t.parentNode;
    if (!t.classList.contains('menu__icon')) return;
    for (var i = 0; i < menuIcons.length; i++) {
      if (menuIcons[i] === t) {
        menuIcons[i].classList.toggle('js-open');
      } else {
        menuIcons[i].classList.remove('js-open');
      } 
    }
  }

});