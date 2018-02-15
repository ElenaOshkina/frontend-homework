'use strict';


function get(obj, path){
    let arr=path.slice(1).split('.');
    if(arr[0].length==0)
        return obj;

    let tempObj=obj;
    path.slice(1)
    .split('.')
    .forEach(function(subpath) {
        if(tempObj!=undefined && tempObj.hasOwnProperty(subpath))
            tempObj=tempObj[subpath];
        else
            tempObj=undefined;
    });
    return tempObj;
}