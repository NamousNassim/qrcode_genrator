let imgBox = document.getElementById("qrimg");
let qrcode = document.getElementById("qrcode");
let url = document.getElementById("url"); 

function qrgenerate()
{   
qrcode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+url.value; 
    console.log(qrcode.src);
}