function feetToMile(feet){
  var mile=feet/5280 ;
   return mile;
  
}

var acountMile=feetToMile(30000);
console.log(acountMile);

var arrayMile=[3400,2300,5800,10560,200000,7800,9000,1200];
var roadMile=feetToMile(arrayMile[4]);
console.log(roadMile);
