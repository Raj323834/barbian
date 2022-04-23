

function myfunction(a,b){
    return a*b;
}
document.getElementById("jai").innerHTML=myfunction(7,8);


var good= function (){
    console.log('WELCOME TO ANNOYMOUS FUNCTION');

};
good();

//setTimeout(
  //  function(){
    //    console.log("hello welcom part 2");
    //},4000
//)

(function(){
    console.log("Immediatly Invoked Function ");
})();

//-function(){
//    return 2;
//}();

//+function(){
 //   return 2;
//}();

let vishal = (x,y,z) =>{
    let result = x+y+z
    return result;
}
let result1 = vishal(4,5,8);
console.log(result1);

let result3 = ay(2,3);
console.log(result3);

 function ay(a,b){
     result2 = a+b;
     return result2;
    
 };

 az();
 function az(){
     console.log("hosting function");
 };