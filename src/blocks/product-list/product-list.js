document.addEventListener('DOMContentLoaded', function(){

  var sidebar = document.querySelector('.product-list__sidebar');
  if (!sidebar) return;
  var sidebarBgr = document.querySelector('.product-list__sidebar-bgr');
  var btn = document.querySelector('.product-list__sidebar-btn');
  sidebarBgr.addEventListener('click', toggleSidebar);
  btn.addEventListener('click', toggleSidebar);

  function toggleSidebar() {
    sidebar.classList.toggle('js-filter-open');
    document.body.classList.toggle('js-filter-open');
    var menuOpen = document.querySelector('.menu .js-open');
    if (menuOpen) menuOpen.classList.remove('js-open');
  }

});