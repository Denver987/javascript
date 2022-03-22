function comparator(obj1,obj2){
    for(var key in obj1){
        if(obj1[key] !== obj2[key])
        return false;
    }return true;

}
var name1={
    surname:"Adnane",
    age:18,
    lastname:"Timount",
};
var name2={
    surname:"Adnane",
    age:18,
};
console.log(comparator(name1,name2));