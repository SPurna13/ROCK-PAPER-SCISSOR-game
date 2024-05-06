var arr=["ROCK","PAPER","SCISSOR"];
var cnt=0,cnt1=0,num,count=0;
function check()
{count++;
    var num=Math.floor(Math.random()*3);
    if(arr[num]=="PAPER")
    {
        cnt1+=1;
    }
    if(arr[num]=="SCISSOR"){
        cnt+=1
    }
    fun(cnt,cnt1,count,arr[num],"ROCK");
}
function check1()
{count++;
    var num=Math.floor(Math.random()*3);
    if (arr[num]=="ROCK")
    {
        cnt+=1;
    }
    if (arr[num]=="SCISSOR"){
        cnt1+=1
    }
    fun(cnt,cnt1,count,arr[num],"PAPER");
}
function check2()
{count++;
    var num=Math.floor(Math.random()*3);
    if (arr[num]=="ROCK")
    {
        cnt1+=1
    }
    if(arr[num]=="PAPER")
    {
        cnt1+=1;
    }
    fun(cnt,cnt1,count,arr[num],"SCISSOR");
}
function fun(cnt,cnt1,count,a,b)
{
    if(count<=5)
    {
        var a=document.getElementById("four").innerHTML="You Chose: "+a+" && Computer Chose: "+b;
        var d=document.getElementById("first").innerHTML="YOUR SCORE:"+cnt;
        var e=document.getElementById("second").innerHTML="COMPUTER'S SCORE:"+cnt1;
    }
    if (count==5)
        {
        fn(cnt,cnt1);
        }
    else if(count>5){
        var g=document.getElementById("four").innerHTML="";
        var d=document.getElementById("first").innerHTML="";
        var e=document.getElementById("second").innerHTML="";
        var f=document.getElementById("third").innerHTML="RESTART THE GAME↻";
        }
}
function fn(cnt,cnt1)
{
    if(cnt>cnt1)
    {
        var e=document.getElementById("third").innerHTML="YOU WON &#127881";
    }
    else if(cnt1>cnt)
    {
        var e=document.getElementById("third").innerHTML="COMPUTER WINS &#128187";
    }
    else{
        var e=document.getElementById("third").innerHTML="IT'S TIE";
    }
}
function restart()
{
    count=0,cnt=0,cnt1=0;
    var g=document.getElementById("four").innerHTML="";
    var f=document.getElementById("third").innerHTML="";
    var d=document.getElementById("first").innerHTML="";
    var e=document.getElementById("second").innerHTML="";
}
