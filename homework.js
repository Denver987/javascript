console.log("deleting duplicate element from array")
function remove(array=[]){
    for(var i=0;i<array.length;i++){
    for(var j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            for(var k=j ;k<array.length;k++){
                array[k]=array[k+1];
            }
            array.length =array.length-1;

        }
    }for(i=0;i<array.length;i++)
    console.log(array[i]);

}return array[i]}
var array=[5,10,25,25,36,56,];
console.log(remove(array));