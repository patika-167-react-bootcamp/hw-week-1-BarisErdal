
// number, string veya boolean içeren arrayler için geliştirilmiş includes fonk.

Array.prototype.includesCI= function(val) {

    if (!isNaN(val)) {
        return this.includes(val);
    }
    

let sonuc = false;
   this.forEach(kelime=>{
        if (!isNaN(kelime)) { return this.includes(val);} //arraydeki numbers ve boolean için

        if(kelime.toLocaleLowerCase() === val.toLocaleLowerCase()) //arraydeki stringler için
        { sonuc = true; }; 
    
   });

   return sonuc;
       
    
}

console.log(["elmA","aRmut","PoRTaKaL","uzum",2,5,6,true].includesCI("ELMA"));