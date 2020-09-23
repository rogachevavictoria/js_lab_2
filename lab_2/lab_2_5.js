var m = 4, n = 5, c = 1, a = -1, b = 0, i = 0, j = 0;
var arr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
function spiral(m,n,a,b){
   for(; i < m; i++){
    arr[i][j] = c;
    c++;
}
i--;
j++;
for(;j < n; j++){
    arr[i][j] = c;
    c++;
}
i--;
j--;
for(; i > a; i--){
    arr[i][j] = c;
    c++;
}
i++;
j--;
for(; j > b; j--){
    arr[i][j] = c;
    c++;
}
i++;
j++; 
if(arr[1][2] != 0){return 0;}
else{return spiral(m-1,n-1,a+1,b+1);}
}
spiral(m,n,a,b);
 console.table(arr);
