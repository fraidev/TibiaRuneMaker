var robot = require("robotjs");
var readline = require('readline-sync');
var runeMagic = require('./RunesMagic');
var actions = require('./Actions');
var profit = require('./ProfitCheck');

var sd = runeMagic.createRuneOrMagic("SD", 985, 108, 4);
var gfb = runeMagic.createRuneOrMagic("GFB", 530, 45, 3);
var ava = runeMagic.createRuneOrMagic("AVA", 530, 45, 3);
var exura = runeMagic.createRuneOrMagic("Exura", 20, 0);
var exuraGran = runeMagic.createRuneOrMagic("AVA", 70, 0);
var exuraVita = runeMagic.createRuneOrMagic("Exura Vita", 160, 0);
var utanaVid  = runeMagic.createRuneOrMagic("Utana Vid", 440, 0);

var usable, wantAT;
var questions = [
	"Which rune/magic do you want? [SD, AVA, GFB, EXURA, EXURAGRAN, EXURAVITA, EXURAGRAN ou UTANAVID]\n",
	"Do you have promotion? [Y or N]\n",
	"Do you have double mana regeneration? [Y or N]\n",
	"Do you want do 'alt + tab' to start? [Y or N]\n"
];

var runeMagicQuestion = readline.question(questions[0]);
switch(runeMagicQuestion) {
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
	case 'utanavid':
		usable = utanaVid;
	break;
    default:
		usable = utanaVid;
}
console.log("Mana of Rune: " + usable.name);

var promotionQuestion = readline.question(questions[1]);
if (promotionQuestion == "n"){
	usable.timeSec = usable.mana*(1.5);
}
var doubleManaQuestion = readline.question(questions[2]);
if (doubleManaQuestion == "y"){
	usable.timeSec = usable.mana/2;
}
console.log("Total time per seconds: " + usable.timeSec);

var wantAltTabQuestion = readline.question(questions[3]);
if (wantAltTabQuestion == "y"){
	wantAT = true;
	console.log("Alt + Tab Enable");
}else if (wantAltTabQuestion == "n"){
	wantAT = false;
	console.log("Alt + Tab Diseble");
}
if (wantAT==true){
	actions.altTab();
}

usable.timeMS = usable.timeSec*1000;
console.log("Total time per milliseconds: " + usable.timeSec);

while(true){
	actions.allActions();
	profit.profitEvent(usable.valueQtd);
	robot.setKeyboardDelay(usable.timeMS);
}