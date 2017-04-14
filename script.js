
var boxes = document.querySelectorAll(".box");
var a = boxes.length;
var color;

if (201 <= a && a <= 300){
    color = "yellow";
}
else if (301 <= a && a <= 400){
    color = "green";
}
else if (401 <= a && a <= 500){
    color = "purple";
}
else if (501 <= a && a <= 600){
    color = "orange";
}
else if (601 <= a && a <= 700){
    color = "pink";
}
else if (701 <= a && a <= 800){
    color = "black";
}
else if (801 <= a && a <= 900){
    color = "brown";
}
else {
    color = "blue";
}

    
    
for (var i = 0; i < a; i++) {
    (function(i){
            boxes[i].onclick = function(){
                boxes[i].style.backgroundColor = color;
                if(boxes[i].className == "box"){boxes[i].className = "clicked";}
                else{boxes[i].className = "box";}


            }
        })(i)  
}

