var robot = require("robotjs");

function makeRune(){
	robot.keyTap("f1");
	console.log("Make a Rune");
};
function eatFood(){
	robot.keyTap("f2");
	robot.setKeyboardDelay(250);
	robot.keyTap("f2");
	robot.setKeyboardDelay(250);
	robot.keyTap("f2");
	robot.setKeyboardDelay(250);
	robot.keyTap("f2");
	robot.setKeyboardDelay(250);
	robot.keyTap("f2");
	console.log("Eat Food");
};
function moveAfk(){
	robot.keyTap("up","control");
	robot.keyTap("left","control");
	robot.keyTap("down","control");
	robot.keyTap("right","control");
	console.log("Move AFK");
};
exports.altTab = function(){
    robot.keyTap("tab", "alt");
}

exports.allActions = function (){
	eatFood();
	makeRune();
	moveAfk();	
}
