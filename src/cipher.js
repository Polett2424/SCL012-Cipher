window.cipher = {

  encode (offset,string)  {
    /* Acá va tu código */
    let newMssag="";
    let newMssag1 ="";
    let result ="";

    let mssag = string;

    for (let i=0; i<string.length; i++){

      newMssag= mssag.charCodeAt(i);
         
    if (newMssag===32){
          
      result+=String.fromCharCode(newMssag);
    }
         
    else if( newMssag>=32 && newMssag<=64){

      newMssag1=(newMssag -32 +parseInt(offset))%33 + 32;

      result += String.fromCharCode(newMssag1);


    }
    
    else if( newMssag>=97 && newMssag<=122) {
      newMssag1=(newMssag -97 +parseInt(offset))%26 + 97;
      result += String.fromCharCode(newMssag1);

    }

    else if( newMssag>=65 && newMssag<=90) {
      newMssag1=(newMssag -65 +parseInt(offset))%26 + 65;
      result += String.fromCharCode(newMssag1);
 
    }

    else if( newMssag>=192 && newMssag<=255) {
      newMssag1=(newMssag -192 +parseInt(offset))%64 + 192;
      result += String.fromCharCode(newMssag1);
  
    }
             

  }

          
     return result;
  
},



    decode(offset,string){
      let newMssag=0;
      let newMssag1 =0;
      let result ="";

      let mssag = string;

          
    for(let i=0; i<string.length; i++) {
        newMssag= mssag.charCodeAt(i);

    if (newMssag===32){
        result+=String.fromCharCode(newMssag);
      }

    else if( newMssag>=32 && newMssag<=64) {
        newMssag1=(newMssag -64 -parseInt(offset))%33 + 64;
        result += String.fromCharCode(newMssag1);

        }

    else if( newMssag>=97 && newMssag<=122) {
        newMssag1=(newMssag -122 -parseInt(offset))%26 + 122;
        result += String.fromCharCode(newMssag1);

    }

    else if( newMssag>=65 && newMssag<=90){
        newMssag1=(newMssag -90 -parseInt(offset))%26 + 90;
        result += String.fromCharCode(newMssag1);

    }

    else if( newMssag>=192 && newMssag<=255) {
        newMssag1=(newMssag -255 -parseInt(offset))%64 + 255;
        result += String.fromCharCode(newMssag1);

    }

    }
        
    return result;
    },
}