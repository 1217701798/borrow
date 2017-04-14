
(function(){
			var timer = null;
			var d=document,
			w=window,
			isIE=w.navigator.appVersion.indexOf("MSIE")>-1,
			now=new Date(),
			nowM=now.getMonth();
			nowY=now.getFullYear();
			date=null,
			ids=null,
			oInput=null;
			document.write('<iframe frameborder=0 style="display:none;position:fixed;left:0;top:0;z-index:1000;background:rgba(90, 90, 90, 0.8);" width="100%" height="100%" scrolling="no" name="sangcalender" id="sangcalender" ></iframe>');
			var f=window.frames['sangcalender'];
			var ff=d.getElementById('sangcalender');
			var fd=f.document;
			fd.open();
			fd.write('<!DOCTYPE html><html><head><style type="text/css">#yearL, #monthL, #monthR, #yearR, #hoursL, #hoursR, #minL, #minR, #y, #m, #h, #i, #s{cursor:pointer;}.calenderClose a{display:block;width:13px;line-height:13px;background-color:#eeeeee;color:#666; text-decoration:none}.calenderClose a:hover{color:red}td{text-align:center}#calenderDay{cursor:pointer}body{font-size:14px;padding:0;margin:0}.col666{color:#999;height:0s}.bg9ebdd6{background-color:#34A9F9;color:white}</style></head><body onselectstart="return false" style="-moz-user-select:none" oncontextmenu="return false">')
			fd.write('<table width="90%" border="0" bgcolor="#CCCCCC" cellspacing="0" cellpadding="0" style="position:absolute;left:0;right:0;top:0;bottom:0;margin:auto">'+
					'<tr><td><table border="0" cellspacing="0" bgcolor="#34A9F9" cellpadding="0" width="100%" style="color:white;font-size:16px">'+
					'<tr><td>&nbsp;&nbsp;</td><td width="20" height="45" align="center" id="yearL" title="上一年" style="background":transparent">◀</td>'+
					'<td><span id="y" title="点击选择年份"></span>年</td>'+
					'<td width="20" align="center" id="yearR" title="下一年" style="background":transparent">▶&nbsp;&nbsp;</td>'+
					'<td width="12" align="center" id="monthL" title="上一月" style="background":transparent">◀</td><td align="center">'+
					'<span id="m" title="点击选择月份"></span>月</td>'+
					'<td width="12" align="center" id="monthR" title="下一月" style="background":transparent">▶</td>'+
					'<td id="close" style="font-size:20px;font-weight:bold">&nbsp;×</td></tr></table></td></tr>'+
					'<tr bgcolor="#FFFFFF"><td><table width="100%" border="0" bgcolor="#ccc" cellspacing="0" cellpadding="0">'+
					'<tr bgcolor="white" height="48"><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr></table></td></tr>'+
					'<tr bgcolor="#FFFFFF"><td><div id="calenderDay"></div></td></tr>'+
					'<tr style="display:none"><td><table border="0" bgcolor="#eeeeee" cellpadding="0" cellspacing="0" width="100%">'+
					'<tr style="display:none"><td align="center" height="30" id="hoursL" title="时减少">&lt;&lt;</td>'+
					'<td align="center" id="minL" title="分减少">&lt;</td>'+
					'<td align="center"><span id="h" title="点击选择小时"></span>:<span id="i" title="点击选择分"></span>:<span id="s" title="点击选择秒"></span></td>'+
					'<td align="center" id="minR" title="分增加">&gt;</td><td align="center" id="hoursR" title="时增加">&gt;&gt;</td></tr>'+
					'</table></td></tr></table>');
			fd.write('</body></html>');
			fd.close();
			//获取框架里的元素  gids.call(obj,id)
			function gids(idArr){
				var oId=[];
				for(var i=0,len=idArr.length;i<len;i++){
					oId[idArr[i]]=this.getElementById(idArr[i]);
				}
				return oId;
			}
			//需要添加事件的元素的集合
			var idsArr=['yearL','yearR','y','m','monthL','monthR','hoursL','hoursR','minL','minR','calenderClose','calenderDay','h','i','s'];
			if(!ids){ids=gids.call(fd,idsArr)};
			//格式化日历控件
			function formatDay(timestr){
				var t=/(\d+)-(\d+)-(\d+)\s*(\d*):?(\d*):?(\d*)/.exec(timestr);
				var da=null;
				var dn=getdate(now);
				if(t){
					da=new Date(t[1],t[2]-1,1,t[4],t[5],t[6]);
				}else{
					da=new Date(dn['y'],dn['m'],1,dn['h'],dn['i'],dn['s']);
				}
				date=getdate(da);
				var mon=[31,date['y']%4==0?29:28,31,30,31,30,31,31,30,31,30,31];
				var str="",day=1;
				str+='<table width="100%" border="0" bgcolor="#cecece" cellspacing="0" cellpadding="0" style="color:#333">';
				for(var md=mon[date['m']-1],wd=md-date['w']+1,n=0;n<6;n++){
					str+='<tr bgcolor="#ffffff" height="43" >';
					for(var nn=0;nn<7;nn++){
						if(wd<=md){
							str+='<td style="color:#bbb;">'+ wd+'</td>';
							wd++;
						}else {
							if(day<=mon[date['m']]){
								if(day==dn['d'] && nowM==now.getMonth()&&nowY==now.getFullYear()){
									str+='<td class="bg9ebdd6">'+(day++)+'</td>';
								}else{
									str+='<td >'+(day++)+'</td>';
								}
								var day2=1;
							}else{
								str+='<td style="color:#bbb;">'+(day2++)+'</td>';
							}
						}
					}
					str+='</tr>';
				}
				str+='</table>';
				ids['calenderDay'].innerHTML=str;

				$("iframe").contents().on("click",function(){
//					hide()
				})
				
				var dates=[date['y'],fillzero(date['m']+1),fillzero(date['h']),fillzero(date['i']),fillzero(date['s'])];
				var dates=[date['y'],fillzero(date['m']+1),fillzero(date['h']),fillzero(date['i']),fillzero(date['s'])];
				each.call([ids['y'],ids['m'],ids['h'],ids['i'],ids['s']],function(o,i){o.innerHTML=dates[i]});
				each.call(ids['calenderDay'].getElementsByTagName("td"),function(o,i){
					addEvent(o,"mouseover",function(e){
						o.style.backgroundColor="#34A9F9";
					})
					addEvent(o,"mouseout",function(e){
						o.style.backgroundColor="";
					})
					addEvent(o,"click",function(e){
						var day = new Date().getDate();
						day = fillzero(o.innerHTML)
//						hide();
						var selectday = $("iframe").contents().find("table tr span")[0].innerText + $("iframe").contents().find("table tr span")[1].innerText +day;	
						oInput.value=$("iframe").contents().find("table tr span")[0].innerText+"年"+$("iframe").contents().find("table tr span")[1].innerText+"月"+ day+"日"						
					var count = 1;
					var num = $(".sang_Calender").attr("maxTime")
					for(var i=0;i<num;i++){
						var limitday = changeDate(i).substring(0,4)+changeDate(i).substring(5,7)+changeDate(i).substring(8,10);						
						if(parseInt(selectday) == parseInt(limitday)){
							count++
						}
					}
						console.log(count)
					
					if(count==1){
						$(this).css({"background":"#ccc"})
						
						oInput.value=new Date().getFullYear()+"年"+(new Date().getMonth()+1)+"月"+new Date().getDate()+"日"												
						window.alert = function(str)

						{
						    var shield = document.createElement("DIV");
						    shield.id = "shield";
						    shield.style.position = "absolute";
						    shield.style.left = "50%";
						    shield.style.top = "50%";
						    shield.style.width = "300px";
						    shield.style.height = "300px";
						    shield.style.marginLeft = "-150px";
						    shield.style.marginTop = "-150px";
						    shield.style.zIndex = "25";
						    var alertFram = document.createElement("DIV");
						    alertFram.id="alertFram";
						    alertFram.style.position = "fixed";
						    alertFram.style.width = "85%";
						    alertFram.style.height = "60px";
						    alertFram.style.left = "0";
						    alertFram.style.right = "0";
						    alertFram.style.bottom = "0";
						    alertFram.style.top = "0";
						    alertFram.style.margin="auto"
						    alertFram.style.textAlign = "center";
						    alertFram.style.lineHeight = "150px";
						    alertFram.style.zIndex = "30000";
						    strHtml = '<ul class="alertul">';
						    strHtml += '<li class="alertcontent">'+str+'</li>';
						    strHtml += '</ul>';
						    alertFram.innerHTML = strHtml;
						    document.body.appendChild(alertFram);
						    document.body.appendChild(shield);
						    this.doOk = function(){
						        alertFram.style.display = "none";
						        shield.style.display = "none";
						    }
						    alertFram.focus();
						    document.body.onselectstart = function(){return false;};
						    timer = setTimeout(function(){
						    	$("#alertFram").remove();
						    	$("#shield").remove();
						    },1000)						   
						}
						alert("请选择"+num+"天内的有效时间")
						//去掉alert框的网址提示
					}else{

						hide()
					}
					})
				})
			}
			//点击×关闭
				var close = $("iframe").contents().find("#close")
				close.on ("click",function(){
				hide()
			})
			//为按钮添加事件
			var handlers=[yL,yR,mL,mR];
			each.call([ids['yearL'],ids['yearR'],ids['monthL'],ids['monthR'],ids['hoursL'],ids['hoursR'],ids['minL'],ids['minR']],function(o,i){
				addEvent(o,"click",handlers[i]);
			})

			var clicks=[yClick,mClick,hClick,iClick,sClick];
			each.call([ids['y'],ids['m'],ids['h'],ids['i'],ids['s']],function(o,i){
				addEvent(o,"click",clicks[i]);
			})

			//上一年
			function yL(e){
				now.setFullYear(date['y']-1);
				formatDay();
				e.cancelBubble = true;
			}
			//下一年
			function yR(e){
				now.setFullYear(date['y']+1);
				formatDay();
				e.cancelBubble = true;
			}
			//上一月
			function mL(e){
				now.setMonth(date['m']-1);
				formatDay();
				e.cancelBubble = true;
			}
			//下一月
			function mR(e){
				now.setMonth(date['m']+1);
				formatDay();
				e.cancelBubble = true;
			}
			//为SELECT添加事件
			function addEventForSelect(type){
				function changeInner(e){
					ids[type].innerHTML=fillzero(oSelect.value);
					now.setFullYear(ids['y'].innerHTML);
					now.setMonth(Number(ids['m'].innerHTML)-1);
					now.setHours(ids['h'].innerHTML);
					now.setMinutes(ids['i'].innerHTML);
					now.setSeconds(ids['s'].innerHTML);
					formatDay();
					e.cancelBubble = true;
				}
				var oSelect=gids.call(fd,['calenderSelect'])['calenderSelect'];
				oSelect.focus();
				addEvent(oSelect,'change',changeInner);
				addEvent(oSelect,"blur",changeInner);
			}
			//生成option选项
			function createOption(type,v){
				var str='',str2='',i=0,i2=0;
				function create(i,i2){
					while(i>=i2){
						if(v==i){
							str2+='<option value="'+i+'" selected>'+i+'</option>';
						}else{
							str2+='<option value="'+i+'">'+i+'</option>';
						}
						i--;
					}
					str+=str2+'</select>';
					ids[type].innerHTML=str;
					addEventForSelect(type);
				}
				str+='<select id="calenderSelect">';
				if(type=="y"){
					i=2011;i2=1990;
					create(i,i2);
					return;
				}
				if(type=="m"){
					i=1;i2=12;
				}
				if(type=="h"){
					i=0;i2=23;
				}
				if(type=="i"){
					i=0;i2=59;
				}
				if(type=="s"){
					i=0;i2=59;
				}
				create(i2,i);
			}
			//年鼠标点击
			function yClick(e){
				e.cancelBubble = true;
				if(getTarget(e).tagName.toLowerCase()=="span"){
					createOption("y",ids['y'].innerHTML);
				}
			}
			//月鼠标点击
			function mClick(e){
				e.cancelBubble = true;
				if(getTarget(e).tagName.toLowerCase()=="span"){
					createOption("m",ids['m'].innerHTML);
				}
			}
			//时鼠标点击
			function hClick(e){
				if(getTarget(e).tagName.toLowerCase()=="span"){
					createOption("h",ids['h'].innerHTML);
				}
			}
			//分鼠标点击
			function iClick(e){
				if(getTarget(e).tagName.toLowerCase()=="span"){
					createOption("i",ids['i'].innerHTML);
				}
			}
			//秒鼠标点击
			function sClick(e){
				if(getTarget(e).tagName.toLowerCase()=="span"){
					createOption("s",ids['s'].innerHTML);
				}
			}
			//each方法
			function each(handler){
				var o=null;
				for(var i=0,len=this.length;i<len;i++){
					o=typeof this[i]=="string"?fd.getElementById(this[i]):this[i];
					handler(o,i);
				}
			}
			//如果日期为一位数，则在前面补零
			function fillzero(str){
				var str=typeof str=="string"?str:str.toString();
				if(str.length==1){
					str="0"+str;
				}
				return str;
			}
			//获取时间
			function getdate(da){
				var date=[];
				date['y']=da.getFullYear();
				date['m']=da.getMonth();
				date['d']=da.getDate();
				date['w']=da.getDay();
				date['h']=da.getHours();
				date['i']=da.getMinutes();
				date['s']=da.getSeconds();
				return date;
			}
			//可选时间
			var begin="";
		var end="";
		var format = function(time, format) {
			var t = new Date(time);
			var tf = function(i) {
				return(i < 10 ? '0' : '') + i
			};
			return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
			switch(a) {
				case 'yyyy':
					return tf(t.getFullYear());
					break;
				case 'MM':
					return tf(t.getMonth() + 1);
					break;
				case 'mm':
					return tf(t.getMinutes());
					break;
				case 'dd':
					return tf(t.getDate());
					break;
				case 'HH':
					return tf(t.getHours());
					break;
				case 'ss':
					return tf(t.getSeconds());
					break;
			};
		});
	};
		Date.prototype.format = function(format) {
			var o = {
				"M+": this.getMonth() + 1, //month
				"d+": this.getDate(), //day
				"h+": this.getHours(), //hour
				"m+": this.getMinutes(), //minute
				"s+": this.getSeconds(), //second
				"q+": Math.floor((this.getMonth() + 3) / 3), //quarter
				"S": this.getMilliseconds() //millisecond
			}
			if(/(y+)/.test(format)) format = format.replace(RegExp.$1,
				(this.getFullYear() + "").substr(4 - RegExp.$1.length));
			for(var k in o)
				if(new RegExp("(" + k + ")").test(format))
					format = format.replace(RegExp.$1,
						RegExp.$1.length == 1 ? o[k] :
						("00" + o[k]).substr(("" + o[k]).length));
			return format;
		};
		
		
		function changeDate(days) {
			var today = new Date(); // 获取今天时间
			today.setTime(today.getTime() + days * 24 * 3600 * 1000);
			var day=today.format('yyyy-MM-dd')
			begin = new Date().format('yyyy-MM-dd');
			end = day;
			return end
		}
			//阻止默认事件
			function preventDefault(e){
				var e=e||window.event;
				if(e.preventDefault){
					e.preventDefault();
				}else{
					e.returnValue=false;
				}
			}
			function getTarget(e){
				var e=e||window.event;
				return e.srcElement||e.target;
			}
			//显示日历控件
			function show(o){
				var s=o.value;
		//		var p=getPos(o);

				if(s){
					formatDay(s);
				}else{
					now=new Date();
					formatDay();
				}

				ff.style.display="block";
			}
			//隐藏日历控件
			function hide(){
				ff.style.display="none";
			}
			
			//添加事件
			function addEvent(element,event,handler){
				var element=typeof element=="string"?d.getElementById(element):element;
				if(element.addEventListener){
					element.addEventListener(event,handler,false)
				}else if(element.attachEvent){
					element.attachEvent("on"+event,handler);
				}else{
					element["on"+event]=handler;
				}
			}
			//获取要实现控件的表单
			function getObj(className){
				var o=d.getElementsByTagName('*'),oArr=[];
				for(var i=0,len=o.length;i<len;i++){
					if(o[i].className==className){
						oArr.push(o[i])
					}
				}
				return oArr;		
			}
			each.call(getObj("sang_Calender"),function(o,i){
				addEvent(o,"click",function(e){preventDefault(e);oInput=o,show(o);ff.focus()})
			})
			addEvent(isIE?ff:f,"blur",function(e){hide()})
		})()
