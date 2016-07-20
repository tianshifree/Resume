function  shizhong(){
	    var canvas = document.getElementById('canvas');
	    var ctx = canvas.getContext('2d');
	    var h,m,s;
		function now(){
	    	var d =new Date();
	        h = d.getHours();
	        m = d.getMinutes();
	        s = d.getSeconds();
	        h += m/60;
	        h = h > 12 ? h - 12 : h;
		}
	    // 表盘
	    function drawBase(){
	        ctx.beginPath();
	        ctx.lineWidth = 8;
	        ctx.strokeStyle = '#9cf';
	        ctx.arc(125, 125, 100, 0, 360, false);
	        ctx.closePath();
	        ctx.stroke();
	    }
	    function drawNumbers(){
	        var angle = 0,
	        	nWidth = 0;
	        ctx.save();
	        ctx.translate(125, 125);
			ctx.font="19px Arial";
	        for(var i = 1; i <= 12; i++){
	        	if(!(i % 3)){
	        		angle = Math.PI / 6 * (i - 3);
		        	nWidth = ctx.measureText(i).width;
		        	ctx.fillText(i, Math.cos(angle) * 75 - nWidth/2,  Math.sin(angle) * 75 + nWidth/2);
	        	}
	        }
	        ctx.restore();
	    }
	    // 时针刻度
	    function drawHourDegree(){
	        for(var i = 0; i < 12; i++){
	        	ctx.save();
	        	ctx.lineWidth = 5;
	        	ctx.translate(125, 125);
	        	ctx.rotate(i * 30 * Math.PI / 180);
	        	ctx.beginPath();
	        	ctx.moveTo(0, -95);
	        	ctx.lineTo(0, -85);
	        	ctx.strokeStyle = '#333';
	        	ctx.closePath();
	        	ctx.stroke();
	        	ctx.restore();
	        }
	    }
	    // 分针盘
	    function drawMinDegree(){
	        for(var i = 0; i < 60; i++){
	        	ctx.save();
	        	ctx.translate(125, 125);
	        	ctx.rotate(i * 6 * Math.PI / 180);
	        	ctx.beginPath();
	        	ctx.moveTo(0, -95);
	        	ctx.lineWidth = 5;
	        	ctx.lineTo(0, -90);
	        	ctx.strokeStyle = '#999';
	        	ctx.closePath();
	        	ctx.stroke();
	        	ctx.restore();
	        }
	    }
	    // 时针
	    function drawHour(){
	        ctx.save();
	        ctx.translate(125, 125);
	        ctx.rotate(h * 30 * Math.PI / 180); // 每小时转过12度
	        ctx.beginPath();
	        ctx.moveTo(0, -55);
	        ctx.lineTo(0, 15);
	        ctx.lineWidth = 5;
	        ctx.strokeStyle = '#333';
	        ctx.closePath();
	        ctx.stroke();
	        ctx.restore();
	    }
	    // 分针
	    function drawMin(){
	        ctx.save();
	        ctx.translate(125, 125);
	        ctx.rotate(m * 6 * Math.PI / 180);
	        ctx.beginPath();
	        ctx.moveTo(0, -65);
	        ctx.lineWidth = 4;
	        ctx.lineTo(0, 12);
	        ctx.strokeStyle = 'green';
	        ctx.closePath();
	        ctx.stroke();
	        ctx.restore();
	    }
	    // 中间圆点
	    function drawMiddle(){
	        ctx.beginPath();
	        ctx.arc(125,125,5,0,360,false);
	        ctx.closePath();
	        ctx.fill();
	    }
	    // 秒钟
	    function drawSecond(){
    	    ctx.save();
    	    ctx.translate(125, 125);
		    ctx.rotate(s*6*Math.PI/180); // 6 每秒转过的角度
    	    ctx.beginPath();
    	    ctx.moveTo(0,-75);
        	ctx.lineWidth=3;
        	ctx.strokeStyle='red';
    	    ctx.lineTo(0, 13);
			ctx.closePath();
	    	ctx.stroke();
			ctx.restore();
	    }
		function clock(){
			ctx.clearRect(0,0,250,250);
			now();
		    drawBase();
		    drawNumbers();
		    drawMinDegree();
		    drawHourDegree();
		    drawHour();
		    drawMin();
		    drawSecond();
		    drawMiddle();
		}
		clock();
		setInterval(function(){
		    clock();
		}, 1000);
};

function changes(){
	var wid=document.getElementById("header");
	if(parseInt(wid.style.width<1060)){
		wid.style.width=1060;
	}
	else{}
}
var x=1;/*背景图片部分*/
function abackground()
{
	var bodys=window.body;
	bodys.style.backgroundImage="url(Images/eg_bg_03.gif)";
	setInterval("images()",20000);
}
function images()
{
	var bodys=window.body;
	if(x==1){
		bodys.style.backgroundImage="url(Images/eg_bg_04.gif)";
		x++;
	}
	else{
		bodys.style.backgroundImage="url(Images/eg_bg_03.gif)";
		x=1;
	}
}
var xx=1;/*图片边框闪烁*/
function shanshuo()
{
	var borders=document.getElementById("weixin");
	borders.style.background="blue";
	setInterval("bords()",100);
}
function bords()
{
	var borders=document.getElementById("weixin");
	if(xx==1){
		borders.style.background="green";
		xx++;
	}
	else if(xx==2){
		borders.style.background="red";
		xx++;
	}
	else if(xx==3){
		borders.style.background="pink";
		xx++;
	}
	else{
		borders.style.background="yellow";
		xx=1;
	}
}

/*滚动条测试
if (document.documentElement && document.documentElement.scrollTop) { 
t = document.documentElement.scrollTop; 
document.getElementById("tests").innerHTML=t;}
 else if(document.body) { 
t = document.body.scrollTop; 
document.getElementById("tests").innerHTML=t;}
/*顶部左边时间显示部分*/
function checkTime(i)
{
if (i<10) 
  {i="0" + i}
  return i
}
function showTime()
{
	var now=new Date();
	var year=now.getFullYear();
	var month=now.getMonth()+1;
	var day=now.getDate();
	var h=now.getHours();
	var m=now.getMinutes();
	var s=now.getSeconds();
	m=checkTime(m);
	s=checkTime(s);
	h=checkTime(h);
	var weekday=new Array(7);
	weekday[0]="星期日";
	weekday[1]="星期一";
	weekday[2]="星期二";
	weekday[3]="星期三";
	weekday[4]="星期四";
	weekday[5]="星期五";
	weekday[6]="星期六";
	document.getElementById("time").innerHTML=""+year+"年"+month+"月"+day+"日 "+weekday[now.getDay()]+" "+h+":"+m+":"+s;
	tt=setTimeout('showTime()',500);
}
/*顶部右边*/
function ziliao1(){
		document.getElementById("documents").style.visibility="visible";
}
function ziliao2(){
		document.getElementById("documents").style.visibility="hidden";
}
/*页面改变*/
window.onresize=changes();

/*登陆事件*/
window.onload=function(){
abackground();
shanshuo();
showTime();
shizhong();
}


//滚动条
window.onscroll=function hahaha(){
	gundong=document.getElementById("tests");
//	gundong.innerHTML=getMousePoint();
	x1=getMousePoint();
	if(x1<=109){document.getElementById("dddd").style.visibility="hidden";}	
	else{document.getElementById("dddd").style.visibility="visible";}

	if(x1==0){removes();document.getElementById("its1").style.backgroundColor="#D0C3A8";}//top
	else if(0<x1&&x1<=111){removes();document.getElementById("its2").style.backgroundColor="#D0C3A8";}//个人信息
	else if(0182<x1&&x1<=1100){removes();document.getElementById("its3").style.backgroundColor="#D0C3A8";}//经验
	else if(1100<x1&&x1<=1436){removes();document.getElementById("its4").style.backgroundColor="#D0C3A8";}//能力
	else if(1436<x1&&x1<=1837){removes();document.getElementById("its5").style.backgroundColor="#D0C3A8";}//爱好
	else if(1837<x1&&x1<=4833){removes();document.getElementById("its6").style.backgroundColor="#D0C3A8";}//自荐
	else{removes();document.getElementById("its7").style.backgroundColor="#D0C3A8";}
}
function removes(){
	document.getElementById("its1").style.backgroundColor="white";
	document.getElementById("its2").style.backgroundColor="white";
	document.getElementById("its3").style.backgroundColor="white";
	document.getElementById("its4").style.backgroundColor="white";
	document.getElementById("its5").style.backgroundColor="white";
	document.getElementById("its6").style.backgroundColor="white";
	document.getElementById("its7").style.backgroundColor="white";
}
function getMousePoint()
{
  if(typeof window.pageYOffset!='undefined'){
	  point=window.pageYOffset;
	}
  else if(typeof document.compatMode!='undefined'&&document.compatMode!='BackCompat'){
	  point=document.documentElement.scrollTop;
	}
  else if(typeof document.body!='undefined'){
	  point=document.body.scrollTop;
	}
  return point;
}
