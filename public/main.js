var listElem = document.getElementById('file_container');

function getList() {
    listElem.addEventListener('click', function(e) {
        if(e.target.hasAttribute('data-path') == false) {
            return;
        }
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.body.innerHTML = xhttp.responseText;
            }
        };
        xhttp.open("GET", "/getList?path=" + e.target.dataset.path, true );
        xhttp.send();
    });
}

getList();
