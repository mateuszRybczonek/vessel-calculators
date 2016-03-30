function doTXT()
	{
		var table = document.getElementById("table").innerHTML;
		
		//create default file name
		var fileName = "RigMove_";
		var uri='data:text/text; charset=utf-8,' + escape(table);
		// generate temp <a /> tag
		var link = document.createElement("a");    
			link.href = uri;
    	//visibility hidden so it will not effect on your web-layout
			link.style = "visibility:hidden";
			link.download = fileName + ".txt";
    	//this part will append the anchor tag and remove it after automatic click
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
	}

var bDoTXT = document.getElementById("doTXT");
bDoTXT.addEventListener('click', doTXT, false);