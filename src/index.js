let final = "";


const encode = document.getElementById("clickEncode");

/* funcion boton encode declarade cipher */
encode.addEventListener('click', () => {
  const skipNumber = document.getElementById("skipNumber");
  const texmensaje = document.getElementById("texmensaje");

  let number= skipNumber.value;
  let message = texmensaje.value;
  final= cipher.encode(number,message)
  
  document.getElementById('cipherContent').value=final;
 })


const decode = document.getElementById("clickDecode");
  decode.addEventListener('click', () => {

  const skipNumber = document.getElementById("skipNumber");
  const texmensaje = document.getElementById("texmensaje");

  let number= skipNumber.value;
  let message = texmensaje.value;

  final= cipher.decode(number,message)

  document.getElementById('cipherContent').value=final;
})








const clean = document.getElementById("clear");

clean.addEventListener('click',()=>{
  
  document.getElementById('container').style.display="block";
  document.getElementById('texmensaje').value="";
  document.getElementById('cipherContent').value="";
  document.getElementById('skipNumber').value="";
});

    