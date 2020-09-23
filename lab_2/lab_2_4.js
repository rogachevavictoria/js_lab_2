var n = 5;
function r(){
    return Math.floor(Math.random() * n);
}
var arr = [];
for(var i = 0; i < n; i++){
    arr.push([1,1,1,1,1]);
}
console.table(arr);
for(var i = 0; i < n; i++){
    arr[i][r()] = 0;
}
console.table(arr);