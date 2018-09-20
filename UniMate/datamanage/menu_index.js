function check(scelta){
var selezionato = document.form1.campo_principale.selectedIndex;
var campo = document.form1.campo_principale.options;
check_scelta(campo[selezionato].value);
}

function check_scelta(scelta) {
if(scelta == 1){
document.getElementById("docente").style.display="none";
document.getElementById("azienda").style.display="none";
document.getElementById("studente").style.display="block";
}
if(scelta == 2){
document.getElementById("studente").style.display="none";
document.getElementById("azienda").style.display="none";
document.getElementById("docente").style.display="block";
}
if(scelta == 3){
document.getElementById("studente").style.display="none";
document.getElementById("docente").style.display="none";
document.getElementById("azienda").style.display="block";
}	
}

var campo_principale_studente = document.form_studente.campo_principale_studente;
var campo_principale_docente = document.form_docente.campo_principale_docente;
var i = 0;
var array = new Array();
var array1 = new Array();

$.get('Universita.txt', function(file) {
var riga = file.split(";");
$.each(riga, function(elem) {
var option = document.createElement("option");
option.text = riga[elem];
option.value = i;
campo_principale_studente.add(option);

var option5 = document.createElement("option");
option5.text = riga[elem];
campo_principale_docente.add(option5);
array[i] = riga[elem];
i++;
});
});

function selezionaOpzioni(scelta) {
var x = 0;
var campo_der_studente = document.form_studente.campo_der_studente;
campo_der_studente.options.length = 0;
var option6 = document.createElement("option");
option6.text = "-- Scegli Facoltà";
campo_der_studente.add(option6);
for(var j = 0; j < campo_principale_studente.length; j++){
if (scelta == j) {
var nome = array[j] + ".txt";	
$.get(nome, function(file) {
var riga1 = file.split(";");
$.each(riga1, function(elem1) {
var option1 = document.createElement("option");
option1.text = riga1[elem1];
option1.value = x;
campo_der_studente.add(option1);
array1[x] = riga1[elem1];
x++;
});
});
}
}
}

function aggiornaOpzioni(scelta){
var selezionato = document.form_studente.campo_principale_studente.selectedIndex;
var campo = document.form_studente.campo_principale_studente.options;
selezionaOpzioni(campo[selezionato].value);
}

function aggiornaOpzioni_1(scelta){
var selezionato = document.form_studente.campo_der_studente.selectedIndex;
var campo = document.form_studente.campo_der_studente.options;
selezionaOpzioni_1(campo[selezionato].value);
}

function selezionaOpzioni_1(scelta) {;
var campo_der_studente = document.form_studente.campo_der_studente;
var campo_der_1_studente = document.form_studente.campo_der_1_studente;
campo_der_1_studente.options.length = 0;
var option7 = document.createElement("option");
option7.text = "-- Scegli Corso di Studi";
campo_der_1_studente.add(option7);
var k = 0;

for(var j = 0; j < campo_der_studente.length; j++){
if (scelta == j) {
var nome = array1[j] + ".txt";	
$.get(nome, function(file) {
var riga2 = file.split(";");
$.each(riga2, function(elem2) {
var option2 = document.createElement("option");
option2.text = riga2[elem2];
option2.value = k;
campo_der_1_studente.add(option2);
k++;
});
});
}
}
}