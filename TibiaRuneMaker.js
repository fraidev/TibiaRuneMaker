var robot = require("robotjs");


	function eatFood(){
		robot.setKeyboardDelay(5000);
		robot.keyTap("f7");
	}
	function makeRune(){
		robot.setKeyboardDelay(5000);
		robot.keyTap("f6");
	}
	function moveAfk(){
		robot.setKeyboardDelay(5000);
		robot.keyTap("up","control");
		robot.keyTap("left","control");
		robot.keyTap("down","control");
		robot.keyTap("right","control");
	}
	function altTab(){
		robot.setKeyboardDelay(5000);
		robot.keyTap("tab", "alt");
	}
	
	altTab();
while(true){
	eatFood();
	makeRune();
	moveAfk();
}