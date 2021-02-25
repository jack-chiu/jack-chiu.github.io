function printWorkout()
{
  document.getElementById("customWorkout").style.display = 'table'
  var pu = document.getElementById("pu").value;
  var pureps = document.getElementById("pureps").value;
  var p = document.getElementById("p").value;
  var preps = document.getElementById("preps").value;
  var s = document.getElementById("s").value;
  var sreps = document.getElementById("sreps").value;

  if (pureps == "NOT SELECTED") {
    var pusets = "NOT SELECTED"
    var purest = "NOT SELECTED" }
  else if (pureps == "20") {
    var pusets = "3"
    var purest = "30 Seconds" }
  else if (pureps == "10") {
    var pusets = "4"
    var purest = "45 Seconds" }
  else if (pureps == "3") {
    var pusets = "5"
    var purest = "60 Seconds" }

  if (preps == "NOT SELECTED") {
    var psets = "NOT SELECTED"
    var prest = "NOT SELECTED" }
  else if (preps == "20 (Marching,Tuck) / 90s Hold (Knee,Elbow,LLPT)") {
    var psets = "3"
    var prest = "30 Seconds" }
  else if (preps == "10 (Marching,Tuck) / 45s Hold (Knee,Elbow,LLPT)") {
    var psets = "4"
    var prest = "45 Seconds" }
  else if (preps == "6 (Marching,Tuck) / 20s Hold (Knee,Elbow,LLPT)") {
    var psets = "5"
    var prest = "60 Seconds" }

  if (sreps == "NOT SELECTED") {
    var ssets = "NOT SELECTED"
    var srest = "NOT SELECTED" }
  else if (sreps == "20") {
    var ssets = "3"
    var srest = "30 Seconds" }
  else if (sreps == "15") {
    var ssets = "4"
    var srest = "45 Seconds" }
  else if (sreps == "8") {
    var ssets = "5"
    var srest = "60 Seconds" }

  var customWorkout = document.getElementById("customWorkout");
  customWorkout.rows[1].cells[0].textContent = pu;
  customWorkout.rows[1].cells[1].textContent = pusets;
  customWorkout.rows[1].cells[2].textContent = pureps;
  customWorkout.rows[1].cells[3].textContent = purest;
  customWorkout.rows[2].cells[0].textContent = p;
  customWorkout.rows[2].cells[1].textContent = psets;
  customWorkout.rows[2].cells[2].textContent = preps;
  customWorkout.rows[2].cells[3].textContent = prest;
  customWorkout.rows[3].cells[0].textContent = s;
  customWorkout.rows[3].cells[1].textContent = ssets;
  customWorkout.rows[3].cells[2].textContent = sreps;
  customWorkout.rows[3].cells[3].textContent = srest;
}
