var icon  = document.getElementById('toggle-icon');
icon.addEventListener('click', function() {
    if(sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        sidebar.classList.add('hide');
    } else {
        sidebar.classList.add('show');
        sidebar.classList.remove('hide');
    }
});