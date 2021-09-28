function roughScale() {
    var ConvertNumber = function (num) {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };
    
   
  resultat.innerHTML =  ConvertNumber(number.value).from(osnova1.value).to(osnova2.value);
}