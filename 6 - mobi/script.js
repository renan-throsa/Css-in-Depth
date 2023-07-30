window.onload = function () {

    var toggle = document.getElementById('toggle-menu');    

    toggle.addEventListener('click', function (event) {
        event.preventDefault();
        var menu = document.getElementById('nav-menu');
        menu.classList.toggle('is-open')
    });

    var open = document.getElementById('open');
    var close = document.getElementById('close');
    var modal = document.getElementById('modal');

    open.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    close.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = 'none';
    });

};


