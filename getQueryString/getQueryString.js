//获取url中的参数
	function GetQueryString(name) {//截取字符串？ &
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) {
	        return unescape(r[2]);
	    } else {
	        return null;
	    }
	}
	GetQueryString(name);