var allSpan = document.getElementsByClassName("profileCardAvatarThumb");
var count = allSpan.length;

for (var i = 0; i < count; i++) {
        var span = document.getElementsByClassName("profileCardAvatarThumb")[i];
        var img = span.getElementsByTagName("img")[0]
        var src= img.src;
        var src2="img/close.PNG";
        var newHref = document.createElement('a');
        newHref.setAttribute("href", "#goofy"+i);
        newHref.setAttribute("class", "lightbox");
        //newHref.setAttribute("name", "ancla"+i);
  
        var newDiv = document.createElement('div');
        newDiv.setAttribute("class","lightbox-target");
        
        newDiv.setAttribute("name","div1");
        newDiv.setAttribute("id","goofy"+i);
        newHref.setAttribute("onclick","mostrar()");
       
        var newImg= document.createElement('img');
        newImg.setAttribute("src", src);
        img2= document.createElement('img');
        img2.setAttribute("src",src2);
        img2.setAttribute("class","lightbox-close");
        img2.setAttribute("onclick","ocultar()");
        //newHref2.setAttribute("name","btn-close");
        

        span.insertBefore(newHref, img);
        newHref.appendChild(img);
        span.appendChild(newDiv);
        newDiv.appendChild(newImg);
        newDiv.appendChild(img2);
       
}
function ocultar(){
        for (var i = 0; i < count; i++) {
                
        document.getElementsByName("div1")[i].style.display="none";
        }
        
      
}
function mostrar(){
        for (var i = 0; i < count; i++) {
                document.getElementsByName("div1")[i].style.display="block";
                }
}
