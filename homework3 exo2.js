function difference(arr1=[],arr2=[]){
    var equal=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
 equal.push(arr1[i]);
            }
        }

    }return equal;
}
var arr1=[1,2,3];
var arr2=[2,5,6];
var equakizer=difference(arr1,arr2);
console.log(equakizer);