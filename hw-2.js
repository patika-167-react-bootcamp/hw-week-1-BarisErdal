
// number, string veya boolean içeren arrayler için geliştirilmiş includes fonk.

Array.prototype.includesCI= function(val) {

let sonuc;
    sonuc = this.every(item=>{
       if (item.toLocaleLowerCase() === val.toLocaleLowerCase()) {
           return false;
       }  else {return true;}

   });

   return sonuc ? false : true;
           
}

//console.log(["elmA","aRmut","PoRTaKaL","uzum"].includesCI("UZUM"));