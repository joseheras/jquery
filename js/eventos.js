var iniciaAPP = function()
{
	var Inicio = function()
	{
		alert("Click en el botón inicio"); // se ve en pantalla
		console.log("Click en inicio"); // no se ve en pantalla es un mensaje propio
	}
	$("#btnInicio").on("click",Inicio)
}
$(document).on("ready",iniciaAPP);
//inicializar JQuery
// $(document).on("ready",function(){
// 	alert("Página LISTA");
// });