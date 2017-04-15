//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=1;
var successes=0; successesMax=4; attempts=0; attemptsMax=2;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
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
var timeOnMessage=3; messageOk="Felicidades Actividad Finalizada"; messageTime="Tiempo Agotado"; messageError="Incorrecto"; messageErrorG="Incorrecto"; messageAttempts="Numero de intentos 2"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q09NUE9ORU5URVNfQl9fU0lDT1NfREVfX0hUTUw1"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>ESTRUCTURA GLOBAL</p>","<p>ESTRUCTURA DEL CUERPO</p>","<p>ESTRUCTURA DENTRO DEL CUERPO</p>","<p>ESTRUCTURA DE NUEVOS Y VIEJOS ELEMENTOS</p>"];
var iL=["<div  align='center'><img src='COMPONENTES_B__SICOS_DE__HTML5_resources/media/1.jpg'></div>","<div  align='center'><img src='COMPONENTES_B__SICOS_DE__HTML5_resources/media/2.jpg'></div>","<div  align='center'><img src='COMPONENTES_B__SICOS_DE__HTML5_resources/media/3.jpg'></div>","<div  align='center'><img src='COMPONENTES_B__SICOS_DE__HTML5_resources/media/4.jpg'></div>"];
var order=["","","",""]; orderR=["","","",""];indexR=0; indexL=0;
var cR=["<p>Hasta ahora se utilizaba una única etiqueta para incorporar diversos tipos  de contenido enriquecido, como animaciones Flash o vídeo. Ahora se utilizarán etiquetas específicas para cada tipo de contenido en particular, como audio, vídeo, etc.</p>","<p>Funciones de nuevas etiquetas que facilitan las tareas permitiendo tener actualizada la información y con mayor facilidad de uso.</p>","<p>Los documentos HTML se encuentran estrictamente organizados. Cada parte del documento está diferenciada, declarada y determinada por etiquetas específicas.</p>","<p>La mayoría de las webs tienen un formato común, formado por elementos como cabecera, pie, navegadores, etc. HTML 5 permite agrupar todas estas partes de una web en nuevas etiquetas que representarán cada uno de las partes típicas de una página.</p>"]; ansRL=["Mg","Mw","MA","MQ"];
var iR=["","","",""];
