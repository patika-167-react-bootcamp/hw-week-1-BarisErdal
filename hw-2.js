
Array.prototype.includesCI= function(val) {

let sonuc;
    sonuc = this.every(item=>{
       if (item.toLocaleLowerCase() === val.toLocaleLowerCase()) {
           return false;
       }  else {return true;}

   });

   return sonuc ? false : true;
           
}

