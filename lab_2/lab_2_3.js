var x = [1, 2, 3, 4, 5];
var y = [5.3, 6.3, 4.8, 3.8, 3.3];
var sum_x = 0, sum_y = 0, sum_x2 = 0, sum_xy = 0;
for(var i = 0; i < x.length; i++){
    sum_x += x[i];
    sum_x2 += Math.pow(x[i],2);
    sum_y += y[i];
    sum_xy += x[i] * y[i];
} 
console.log('x = {' + x + '} \ny = {' + y + '}');
console.log(sum_x2 + 'a + ' + sum_x + 'b = ' + sum_xy);
console.log(sum_x + 'a + ' + x.length + 'b = ' + sum_y);
var d = 0, da = 0, db = 0;
d = (sum_x2 * x.length) - (sum_x * sum_x);
da = (sum_xy * x.length) - (sum_y * sum_x);
db = (sum_x2 * sum_y) - (sum_xy * sum_x);
var a = 0, b = 0;
a = da/d;
b = db/d;
console.log('f(x) = ' + a + 'x + ' + b);