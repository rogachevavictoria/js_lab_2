var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * 100);
}
console.log(arr);
arr.sort();
console.log(arr);
var n = 5;
console.log(n + '-th biggest element: ' + arr[(arr.length)-n]);