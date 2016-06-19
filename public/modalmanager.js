window.commentModal = (function() {
    var commentWindow = document.getElementById('modal-window');
    var fadingLayout = document.getElementById('fading');
    //next are elements of modal window
    var closeModalWindow = document.getElementById('close-comment-modal');
    var cancelComment = document.getElementById('cancel-comment');
    var form = document.getElementById('comment-form');
    var username = document.getElementById('username');
    var comment = document.getElementById('comment-field');

    commentWindow.addEventListener('click', function(e) {
        if(e.target == cancelComment || e.target == closeModalWindow) {
            hideModalWindow();
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                commentField.innerHTML = xhttp.responseText;
            }
        };

        xhttp.open("POST", "/saveUserComment?path=" + commentWindow.dataset.commentedfilepath, true );
        xhttp.setRequestHeader('Content-type", "application/x-www-form-urlencoded');
        xhttp.send('username=' + username.value + '&comment=' + comment.value);
    });

    function hideModalWindow() {
        document.body.classList.toggle('modal-visible');
    }

    function showModalWindow(target) {
        document.body.classList.toggle('modal-visible');
        commentWindow.setAttribute('data-commentedfilepath', target.dataset.commented);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if(xhttp.readyState == 4 && xhttp.status == 200) {
                commentField.innerHTML = xhttp.responseText;
            }
        };
        xhttp.open('GET', '/getComments?file=' + target.dataset.commented, true);
        xhttp.send();
    }

    return {
        showModal: showModalWindow
    }
})();
