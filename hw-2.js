


String.prototype.includesCi= function(val) {

    if (!isNaN(val)) {
        val = String(val);
    }

    return this.includes(val.toLocaleLowerCase());
 
}

//console.log("eda eDa baris bariS 7".includesCi("EDA"));