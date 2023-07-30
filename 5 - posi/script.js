window.onload = function () {
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


    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    let timeoutId;

    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId);
        dropdownMenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            dropdownMenu.style.display = 'none';
        }, 250); // Add a 250ms delay
    });

};


