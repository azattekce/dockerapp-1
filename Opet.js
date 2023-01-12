var opet = opet || {};

(function () {

 opet.rnd1=function(){
 var rnd=Math.random()*6+1;
 alert("Ok");

 document.querySelector("img.img1").setAttribute('src','images/dice'+Math.floor(rnd)+'.png');
}
 opet.rnd2=function(){
 var rnd=Math.random()*6+1;
 document.querySelector("img.img2").setAttribute('src','images/dice'+Math.floor(rnd)+'.png');
}
})();


    
    
