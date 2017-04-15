//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var successes=0; successesMax=1; attempts=1; attemptsMax=1;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var startTime; tiSuccesses=false; tiAttempts=false; tiScore=false;
typeGame=1;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy Bien Actividad Finalizada"; messageTime="Tiempo Agotado"; isShowMessage=false;
var urlOk=""; urlTime="";
var goURLOk="_blank"; goURLTime="_blank"; 
var borderOk="#008000"; borderTime="#FF0000"; borderAttempts="#FF0000";borderError="#FF0000";
var imaSel=0; texSel=0;
var board=[]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=["SFRNTDU","RE9DVFlQRQ","SFRNTA","SEVBRA","Qk9EWQ","TUVUQQ","VElUTEU","TElOSw"];
var c=[5,7,4,4,4,4,5,4];
var defs=["Es una nueva versión de HTML, con nuevos elementos que son de gran interés para las personas que gustan de la programación.","Esta es la primer línea que debe aparecer en nuestro código.","Define la raíz del documento HTML","Define información acerca de un documento.","Aquí se define el cuerpo del documento.  Lo que va a ser visible para el usuario en la página web.","Aquí se define un metadato de un documento HTML, significa como será mostrado el texto en la pantalla de la página web.","Se define un título para el documento que se está creando.","Aquí se define la relación entre un documento y un recurso externo tal es el caso donde se incorporan estilos"];
var wDefs=350; posCheck=[];
var answers=[]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="U29wYV9kZV9sZXRyYXNfSFRNTF95X0V0aXF1ZXRh"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var numCols=11; numRows=11; sizeCell=20;
var direction=["HD","HI","VD","VI","X1D","X1I","X2D","X2I"];
var boardGame=[[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."]];
var solved1X=[];solved1Y=[];solved2X=[];solved2Y=[];paintSolved=["N","N","N","N","N","N","N","N"];x1=[];y1=[];x2=[];y2=[];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";
