var arr=["ROCK","PAPER","SCISSOR"];
let obj={
    cnt:0,cnt1:0,count:0,
}
function check()
{
    obj.count+=1;
    let num=Math.floor(Math.random()*3);
    fun(arr[num],"ROCK");
}
function check1()
{
    obj.count+=1;
    let num=Math.floor(Math.random()*3);
    fun(arr[num],"PAPER");
}
function check2()
{
    obj.count+=1;
    let num=Math.floor(Math.random()*3);
    fun(arr[num],"SCISSOR");
}
function fun(a,b)
{
    if ((a=="ROCK"&&b=="PAPER")||(a=="PAPER"&&b=="SCISSOR")||(a=="SCISSOR"&&b=="ROCK"))
        {
            obj.cnt1+=1;
        }
    if ((a=="ROCK" && b=="SCISSOR")||(a=="SCISSOR"&&b=="PAPER")||(a=="PAPER"&&b=="ROCK"))
        {
            obj.cnt+=1;
        }
    if(obj.count<=5)
        {
            let f=document.getElementById("four").innerHTML="You Chose: "+a +" && Computer Chose: "+b;
            let d=document.getElementById("first").innerHTML="YOUR SCORE:"+obj.cnt;
            let e=document.getElementById("second").innerHTML="COMPUTER'S SCORE:"+obj.cnt1;
        }
    if(obj.count==5)
        {
            fn(obj.cnt,obj.cnt1);
        }
    else if(obj.count>5)
        {
            let g=document.getElementById("four").innerHTML="";
            let d=document.getElementById("first").innerHTML="";
            let e=document.getElementById("second").innerHTML="";
            let f=document.getElementById("third").innerHTML="RESTART THE GAME↻";
        }
}  
function fn(cnt,cnt1)
{
    if(cnt>cnt1)
    {
        let e=document.getElementById("third").innerHTML="YOU WIN &#127881";
    }
    else if(cnt1>cnt)
    {
        let e=document.getElementById("third").innerHTML="COMPUTER WINS &#128187";
    }
    else{
        let e=document.getElementById("third").innerHTML="IT'S TIE";
    }
}
function restart()
{
    obj.count=0,obj.cnt=0,obj.cnt1=0;
    let g=document.getElementById("four").innerHTML="";
    let f=document.getElementById("third").innerHTML="";
    let d=document.getElementById("first").innerHTML="";
    let e=document.getElementById("second").innerHTML="";
}    
