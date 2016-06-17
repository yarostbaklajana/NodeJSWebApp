(function (commentModal) {
    var container = document.getElementById('main');

    function addClickHandlerToContainer() {
        container.addEventListener('click', function(e) {
            if(e.target.hasAttribute('data-path') == true) {
                getList(e.target);
            } else if (e.target.hasAttribute('data-commented')){
                commentModal.showModal(e.target);
            } else {
                return;
            }
        });
    }

    function getList(target) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                container.innerHTML = xhttp.responseText;
            }
        };
        xhttp.open("GET", "/getList?path=" + target.dataset.path, true );
        xhttp.send();
    }

    addClickHandlerToContainer();
})(window.commentModal);

