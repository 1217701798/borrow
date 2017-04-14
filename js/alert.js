var timer = null;
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
		    alertFram.style.zIndex = "300";
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
window.confirm = function(name){
var iframe = document.createElement("IFRAME");
iframe.style.display="none";
iframe.setAttribute("src", 'data:text/plain,');
document.documentElement.appendChild(iframe);
var result = window.frames[0].window.confirm(name);
iframe.parentNode.removeChild(iframe);
return result;
}