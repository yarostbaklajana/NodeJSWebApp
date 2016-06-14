(function() {
    var container = document.getElementById('main');
    var commentWindow = document.getElementById('modal-window');
    var fadingLayout = document.getElementById('fading');
    commentWindow.addEventListener('click', function(e) {
        if(e.target.hasAttributes('data-close') == true) {
            commentWindow.style.display = 'none';
            fadingLayout.style.display = 'none';
        } else {
            return;
        }
    });
})();
