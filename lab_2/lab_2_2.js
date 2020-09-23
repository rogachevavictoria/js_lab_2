var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * 100);
}
arr[5] = 0; arr[3] = 0; arr[9] = 0; var temp = 0;
var j = 0;
arr1 = [];
for(var i = 0; i < 10; i++){
    if (arr[i] == 0){
        arr1[j] = 0;
        j++;
    }
}
for(var i = 0; i < 10; i++){
    if (arr[i] != 0){
        arr1[j] = arr[i];
        j++;
    }
}
console.log(arr);
console.log(arr1);