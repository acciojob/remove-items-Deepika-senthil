//your JS code here. If required.
let selectColor document.getElementById("colorSelect");
function removecolor(){
		if(selectColor.selectedIndex !== -1)
		{
			selectColor.remove(selectColor.selectedIndex);
		}
	}