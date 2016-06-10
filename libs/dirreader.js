var fs = require('fs');
var path = require('path');
var root = require('../appConstants/rootConstant').ROOT;

module.exports = function getDataList(forwardPath, callback, upPath) {
    var fileArr =[];
    var counter = 0;
    var absolutePath = '';
    if(forwardPath == root) {
        upPath = null;
        absolutePath = forwardPath;
    } else {
        upPath = path.relative(path.join(root, forwardPath), path.relative(path.join('../', forwardPath), root)); //returns '..'
        console.log(upPath)
        absolutePath = path.join(root, forwardPath);
    }

    
    fs.readdir(absolutePath, function(err, files) {
        if(err) {
            callback(err);
        }

        files.forEach(function(entry) {
            var pathToCountDirectory = path.join(absolutePath, entry);
            fs.stat(pathToCountDirectory, function(err, stats) {
                if(err) {
                    callback(err);
                }

                if(stats.isDirectory() == true) {
                    fileArr.push({directoryName: entry, dirPath: path.relative(root, pathToCountDirectory)});
                } else {
                    fileArr.push({fileName: entry, filePath: path.relative(root, pathToCountDirectory)});
                }
                counter++;
                if(counter == files.length) {
                    callback(null, fileArr, upPath);

                }
            });
        });
    });
}






