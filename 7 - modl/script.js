window.onload = function () {
    var toggle = document.querySelector('.dropdown__toggle');

    function onClick(event) {        
        event.preventDefault();
        var dropdown = event.target.parentNode;
        dropdown.classList.toggle('is-open');
    }

    toggle.addEventListener('click', onClick);

};


