var robot = require("robotjs");
var readline = require('readline-sync');

var sd = 985000;
var gfbAndAva = 530000;
var exura = 20;
var exuraGran = 70;
var exuraVita = 160;
var utanaVid = 440;
var usable;
var wantAT;

function makeRune(){
	robot.setKeyboardDelay(985000);
	robot.keyTap("f1");
};
function eatFood(){
	robot.setKeyboardDelay(60000);
	robot.keyTap("f2");
};
function moveAfk(){
	robot.setKeyboardDelay(20000);
	robot.keyTap("up","control");
	robot.keyTap("left","control");
	robot.keyTap("down","control");
	robot.keyTap("right","control");
};
function altTab(){
	robot.keyTap("tab", "alt");
};

var questions = [
	"Which rune/magic do you want? sd, ava, gfb, exura, exuragran, exuravita or exuragran\n",
	"Do you have promotion? y or n\n",
	"Do you have double mana regeneration? y or n\n",
	"Do you want do 'alt + tab' to start? y or n\n"
];

var runeMagic = readline.question(questions[0]);
switch(runeMagic) {
    case 'sd':
		usable = sd;
        break;
    case 'ava':
		usable = ava;
        break;
	case 'gfb':
		usable = gfb;
		break;
	case 'exura':
		usable = exura;
	break;
	case 'exuragran':
		usable = exuraGran;
	break;
	case 'exuravita':
		usable = exuraVita;
	break;
    default:
		usable = exuraVita;
}
console.log(runeMagic + " Mana of Rune: " + usable);

var promotionQuestion = readline.question(questions[1]);
if (promotionQuestion == "n"){
	usable = usable*12;
}
console.log(promotionQuestion + " Total time per milliseconds: " + usable);

var doubleManaQuestion = readline.question(questions[2]);
if (doubleManaQuestion == "y"){
	usable = usable/2;
}
console.log(doubleManaQuestion + " Mana per seconds: " + usable);

var wantAltTabQuestion = readline.question(questions[3]);
if (wantAltTabQuestion == "y"){
	wantAT = true;
	console.log("Alt + Tab Enable");
}else if (wantAltTabQuestion == "n"){
	wantAT = false;
	consolel.log("Alt + Tab Diseble");
}


if (wantAT==true){
	altTab();
}
while(true){
	eatFood();
	makeRune();
	moveAfk();	
}