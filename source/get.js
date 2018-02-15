'use strict';


function get (obj, path){
    var arr=path.slice(1).split('.');
    if(arr[0].length==0)
        return obj;
    var  temp;

    if(obj.hasOwnProperty(arr[0]))
        temp=obj[arr[0]];
    else
        return undefined;

    for(var i=1; i<arr.length; i++){
            temp=temp[arr[i]];
    }
    return temp;
}