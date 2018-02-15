'use strict';


function get(obj, path){
    const arr = path.slice(1).split('.');
    
    if (arr[0].length == 0)
        return obj;

    let tempObj = obj;
    
    /*path
    .slice(1)
    .split('.')*/
    arr.forEach( (subpath) => {
        if(tempObj != undefined && tempObj.hasOwnProperty(subpath)){
            tempObj = tempObj[subpath];
        }
        else{
            tempObj = undefined;
        }
    });

    return tempObj;
} 