//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=20;
var successes=0; successesMax=4; attempts=0; attemptsMax=2;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Felicidades Actividad Completa"; messageTime="Tiempo Agotado"; messageError="Incorrecto"; messageAttempts="Limite de tintentos 2"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var imaSel=0; texSel=0;
var board=[["COMPONENTES_B__SICOS_DE__HTML5_resources/media/RVNUUlVDVFVSQSBHTE9CQUw.jpg","COMPONENTES_B__SICOS_DE__HTML5_resources/media/RVNUUlVDVFVSQSBERUwgQ1VFUlBP.jpg","0","0"],["COMPONENTES_B__SICOS_DE__HTML5_resources/media/RVNUUlVDVFVSQSBERU5UUk8gREVMIENVRVJQTw.jpg","COMPONENTES_B__SICOS_DE__HTML5_resources/media/RVNUUlVDVFVSQSBERSBOVUVWT1MgWSBWSUVKT1M.jpg","0","0"],["0","0","0","0"],["0","0","0","0"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[]; answers=[["ESTRUCTURA GLOBAL","ESTRUCTURA DEL CUERPO","0","0"],["ESTRUCTURA DENTRO DEL CUERPO","ESTRUCTURA DE NUEVOS Y VIEJOS","0","0"],["0","0","0","0"],["0","0","0","0"]]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="Q09NUE9ORU5URVNfQl9fU0lDT1NfREVfX0hUTUw1"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
