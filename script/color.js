window.onload=myInit();
function myInit(){
    document.getElementById("imageFile").addEventListener("change", handleFiles);

    myDisplay();
}

function handleFiles(){
    var theGoods=document.getElementById('imageFile').files[0];
    var img=new Image();
    var reader= new FileReader();

    reader.addEventListener("load", function() {img.src = reader.result;});

    img.onload=function() {calcAndGraph(img);}
    if(theGoods) {reader.readAsDataURL(theGoods);}
}

function calcAndGraph(){
    let rD={}, gD={}, bd={};
    let cv= document.getElementById("mycanvas");
    let ctx=cv.getContext("2d");
    cv.width=img.width;
    cv.height=img.height;
    ctx.drawImage(img, 0, 0);
    const iD=ctx.getImageData(0,0,cv.width,cv.height).data;

    for(var i=0; i<iD.length; i+=4){
        rD[iD[i]]++;
        gD[iD[i+1]]++;
        bD[iD[i+2]]++;

    }

    histogram(rD, gD, bD);
}

function myDisplay(){
    console.log('inside MyDisplayFunction');
    alert("inside my Display Function");
    var cvs = document.getElementById("mycanvas");
    var ctx=cvs.getContext('2d');

    var rect={
        x:0,
        y:0,
        width:200,
        height:100
    };
    

function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y;
}

function getMousePos(canvas, event){
    var rect=canvas.getBoundingClientRect();
    return{
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

cvs.addEventListener('click',function(evt){
    var mousePos=getMousePos(cvs, evt);

    if(isInside(mousePos,rect)) {
        alert('clicked inside rect');
    } else{
        alert('clicked outside rect');
    }
},false)

const path=new Path2D;
path.rect(0,0,200,100);
path.rect(25,72,32,32);
path.closePath();

ctx.fillStyle="#FFFFFF";
ctx.fillStyle="rgba(225,225,225,0.5)";
ctx.fill(path);
ctx.lineWidth=2;
ctx.strokeStyle="#000000";
ctx.stroke(path);

}