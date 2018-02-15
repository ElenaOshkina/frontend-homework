'use strict';


function get (obj, path){
    var arr=path.slice(1).split('.');
    //console.log(arr[0]);
    
    if(arr[0].length==0)
        return obj;


    var  temp;//=obj[arr[0]];

    if(obj.hasOwnProperty(arr[0]))
        temp=obj[arr[0]];
    else
        return undefined;

    
    

    for(var i=1; i<arr.length; i++){
            temp=temp[arr[i]];
    }

    //console.log(temp);
    return temp;
   // var keys = Object.keys(obj);
   // console.log(keys);
}