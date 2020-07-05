function init(){
    canvas=document.getElementById('mycanvas');
    W=canvas.width=1000;
    H=canvas.height=550;
    pen=canvas.getContext('2d');
    size=85;
    arr=[];
    generate();
    draw2();
    console.log(arr);
}
function generate(){
    while(arr.length>0){
        arr.pop();
    }
    for(let i=0;i<size;i++){
        let x=Math.round(Math.floor((Math.random() * 100) + 1));
        arr.push(x);
    }
}
function draw1(index1=-1,index2=-1){
    pen.clearRect(0,0,W,H);
    pen.font="15px Roboto";
    pen.fillText("element:",0,30);
    pen.fillText(index2,55,30);
    var x=92,y=10,csx=7,csy=5;
    for(let i=0;i<size;i++){
        var fy=y;
        if(i==index1){
            pen.fillStyle="#f28907";
        }
        else{
            pen.fillStyle="#ad096c";
        }
        for(let j=0;j<arr[i];j++){
            pen.fillRect(x,fy,csx,csy);
            fy+=csy;
        }
        fy+=3*csy;
        pen.fillStyle="white";
        pen.font="10px Roboto";
        pen.fillText(arr[i],x-2,fy+1);
        x+=(csx+3);
    }
}
function draw2(index1=-1,index2=-1){
    pen.clearRect(0,0,W,H);
    var x=92,y=10,csx=7,csy=5;
    for(let i=0;i<size;i++){
        var fy=y;
        if(i==index1 || i==index2){
            pen.fillStyle="#FF0000";
        }
        else{
            pen.fillStyle="#FFFFFF";
        }
        for(let j=0;j<arr[i];j++){
            pen.fillRect(x,fy,csx,csy);
            fy+=csy;
        }
        fy+=3*csy;
        pen.fillStyle="white";
        pen.font="14px Roboto";
        //pen.fillText(arr[i],x,fy);
        x+=(csx+3);
    }
}
function draw(index1=-1,index2=-1){
    pen.clearRect(0,0,W,H);
    var x=92,y=10,csx=7,csy=5;
    for(let i=0;i<size;i++){
        var fy=y;
        if(i==index1 || i==index2){
            pen.fillStyle="#f28907";
        }
        else{
            pen.fillStyle="#ad096c";
        }
        for(let j=0;j<arr[i];j++){
            pen.fillRect(x,fy,csx,csy);
            fy+=csy;
        }
        fy+=3*csy;
        pen.fillStyle="white";
        pen.font="14px Roboto";
        //pen.fillText(arr[i],x,fy);
        x+=(csx+3);
    }
}
init();
document.getElementById("gen").addEventListener("click",function(){
    generate();
    draw2();
    console.log("new array generated!!!");
});
document.getElementById("bubble").addEventListener("click",function(){
    //generate();
    var i=0,j=0;
    var t1=setInterval(bout,300);
    function bout(){
        if(i==size){
            clearInterval(t1);
        }
        else{
            var t2=setInterval(bin,50);
            function bin(){
                if(j==(size-1)){
                    clearInterval(t2);
                    j=0;return;
                }
                else{
                    if(arr[j]>arr[j+1]){
                        let temp=arr[j];
                        arr[j]=arr[j+1];
                        arr[j+1]=temp;
                        draw2(j,j+1);
                    }
                    j++;
                }
            }
            //draw();
            i++;
        }
    }
    console.log("bubble sort done!!!");
});
document.getElementById("selection").addEventListener("click",function(){
    //generate();
    i=0;j=0;index=-1;
    var t1=setInterval(sout,300);
    function task(a,b) { 
        setTimeout(function() { 
            draw2(a,b);
            clearTimeout;
        }, 300); 
      } 
    function sout(){
        console.log("i=",i)
        if(i==size-1){
            clearInterval(t1);
            return;
        }
        else{
            index=i;j=i+1;
            sin();
            draw(i,index);
            function sin(){
                while(j<size){
                    if(arr[j]<arr[i]){
                        var tmp=arr[i];
                        arr[i]=arr[j];
                        arr[j]=tmp;
                        task(i,j);
                    }
                    j++;
                }
                return;
            }
         draw2(i);
         i++;   
        }
    }
    console.log("selection sort done!!!");
});
document.getElementById("insertion").addEventListener("click",function(){
    //generate();
    var i=0,j=0;
    var t1=setInterval(iout,200);
    function iout(){
        if(i==size){
            clearInterval(t1);
        }
        else{
            var px=arr[i];j=i;
            var t2=setInterval(iin,200);
            draw2();
           // console.log("i=",i);
            i++;
            function iin(){

                draw2(j-1,j);
                while(j>0 && arr[j]<arr[j-1]){
                    var tmp=arr[j-1];
                    arr[j-1]=arr[j];
                    arr[j]=tmp;
                    draw2(j-1,j);
                    j--;
                }
                clearInterval(t2);
                return;
            }
        }
    }
    console.log("insertion sort done!!!");
});
document.getElementById("merge").addEventListener("click",function(){
    //generate();
    var i=0,j=size-1,k;
    var t1=setInterval(iout,20);
    var t2;
    var p= 0;
    function task()
    {
        //console.log("o");
        if(p==k+1)
        {
            p=0;
            clearInterval(t2);
            return;
        }
        else
        {
            draw2(k);
            p++;
        }

    }
    function merge(a,mid,b)
    {   
        var x,y;
        var n1=mid-a+1;
        var n2=b-mid;

        var left = [];
        var right = [];

        for(var p=0;p<n1;p++)
        {left.push(arr[a+p]);   
        }

        for(var p=0;p<n2;p++)
        {right.push(arr[mid+1+p]);  
        }
        x=0;y=0;
        k=a;
            while (x < n1 && y < n2) { 
                if (left[x] <= right[y]) { 
                    arr[k] = left[x]; 
                    t2 = setInterval(task(),200);
                    x++; 
                } 
                else { 
                    arr[k] = right[y]; 
                    t2 = setInterval(task(),200);
                    y++; 
                    
                } 
                k++; 
            }   

        while (x < n1) { 
            arr[k] = left[x]; 
            x++; 
            t2 = setInterval(task(),200);
            k++; 
        } 

        while (y < n2) { 
            arr[k] = right[y]; 
            y++; 
            t2 = setInterval(task(),200);
            k++; 
        } 
    }
    function mergesort(a, b)
    {
      //console.log("a,b",a,b);
        if (a<b) { 
           var mid = parseInt((a+b)/2);
           mergesort(a,mid); 
           mergesort(mid+1, b); 
           setTimeout(()=> {merge(a,mid,b);},50);
        }
        else
        {
            return;
        }
    }
    function iout(){
     
        mergesort(i,j);
        clearInterval(t1);
    }   
    console.log("merge sort done!!!");
});

document.getElementById("quick").addEventListener("click",function(){
    //generate();
    var i=0,j=size-1,k;
    var t1=setInterval(iout,20);
    var t2;
    var z= 0;
    function task(l,m)
    {
        if(z==10)
        {
            z=0;
            clearInterval(t2);
        }
        else
        {
            draw2(l,m);
        }
    }
    function swap(f,g)
    {
        var temp=arr[f];
        arr[f]=arr[g];
        arr[g]=temp;
    }
    function partition(lo,hi)
    {
        var pivot = arr[hi];

        var x= lo-1;
        for(var y=lo;y<=hi-1;y++)
        {
            if(arr[y]<pivot)
            {
                x++;
                swap(x,y);
            }
            t2 = setInterval(task(x,y),30);
        }
        swap(x+1,hi);
        return x+1;
    }
    function quicksort(a,b)
    {
        if(a<b)
        {
            var part = partition(a,b);
            setTimeout(()=> {quicksort(a,part-1);},500);
            setTimeout(()=> {quicksort(part+1,b);},500);
        }
    }
    function iout(){     
        quicksort(i,j);
        clearInterval(t1);
    }   
    console.log("quick sort done!!!");
});

document.getElementById("linear").addEventListener("click",function(){
    var i=0,j=0;
    var ky = Math.round(Math.floor((Math.random() * 100) + 1));
    var t1=setInterval(bout,100);
    function bout(){
        if(i==size){
            alert("element not found");
            clearInterval(t1);
        }
        else{
            
                draw1(i+1,ky);
                if(arr[i] == ky)
                {
                    alert("element found at positon:"+(i+parseInt(1)));
                    draw1(i,ky);
                    clearInterval(t1);
                }
            }
            i++;
        }
    
    
});