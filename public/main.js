(function () {
    var container = document.getElementById('main');
    var modalWindow = document.getElementById('modal-window');
    var fadingLayout = document.getElementById('fading');

    function getList() {
        container.addEventListener('click', function(e) {
            if(e.target.hasAttribute('data-path') == true) {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        container.innerHTML = xhttp.responseText;
                    }
                };
                xhttp.open("GET", "/getList?path=" + e.target.dataset.path, true );
                xhttp.send();
            } else if (e.target.hasAttribute('data-comment')){
                modalWindow.style.display = 'block';
                fadingLayout.style.display = 'block';
                fadingLayout.style.height = container.clientHeight + 'px';
            } else {
                return;
            }
        });
    }

    getList();
})();

