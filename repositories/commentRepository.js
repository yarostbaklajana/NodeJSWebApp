var comments = [];

module.exports = {
    getComments: function(path, callback) {
        var commentsForFile = comments.filter(function(item) { return item.path == path });
        callback(null, comments);
    },
    saveComment: function(comment, callback) {
        comments.push(comment);
        callback(null);
    }
}

