//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=260; timeIni=260; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFF80"; colorButton="#8080FF"; colorText="#FF0080"; colorSele="#8000FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage="ERROS"; scoPtos=5;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien! Felicitaciones!"; messageTime="Lo siento se termino el tiempo. Intentalo nuevamente "; messageError="Error"; messageErrorG="Error"; messageAttempts="Se terminaron tus intentos "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y3J1Y2lncmFtYV9lc3RydWN0dXJhX2RlX2h0bWw1"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["RQ","","","","Uw","","","","",""],["TA","","","","RQ","","","","",""],["Qw","","","","Qw","","","","",""],["SQ","","","","VA","","","","",""],["VA","SA","","","SQ","","","","",""],["Ug","RQ","VA","Tw","Tw","Rg","","","",""],["QQ","QQ","","","Tg","","","","",""],["","RA","","","","Tg","","","",""],["","RQ","RA","SQ","Uw","QQ","","","",""],["","Ug","","","","Vg","","","",""]];
var x1=[1,1,2,5,2,6];
var y1=[1,6,9,1,5,8];
var x2=[1,6,6,5,2,6];
var y2=[7,6,9,7,10,10];
var imaCW=["","","","","",""];
var audioCW=["","","","","",""];
var defCW=["Para incluir artículos o subsecciones en otras partes de la página. Como ejemplo en una web de venta de libros, cada uno de los libros que se muestran.","Es el contenido final de la página o el pie de página que llamamos comúnmente.","Es el contenido final de la página o el pie de página que llamamos comúnmente.","En esta sección es donde va el contenido que se va a evidenciar en la página web.","Este es un elemento que permite abrir la web. Habitualmente se suele ubicar el banner de cabecera dentro de él. En ocasiones contiene al menú de navegación.","Es una de las partes más importante, pues debe ser fundamental para que el usuario sea capaz de navegar por las categorías y páginas."];
var colNum=10;
var rowNum=10;
