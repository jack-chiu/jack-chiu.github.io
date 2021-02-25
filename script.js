function printWorkout()
{
  document.getElementById("customWorkout").style.display = 'table'
  var pu = document.getElementById("pu").value;
  var pureps = document.getElementById("pureps").value;
  var p = document.getElementById("p").value;
  var preps = document.getElementById("preps").value;
  var s = document.getElementById("s").value;
  var sreps = document.getElementById("sreps").value;

  if (pu == "NOT SELECTED" || pureps == "NOT SELECTED") {
    var pureps = "NOT SELECTED"
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

  if (p == "NOT SELECTED" || preps == "NOT SELECTED") {
    var prepsadj = "NOT SELECTED"
    var psets = "NOT SELECTED"
    var prest = "NOT SELECTED" }
  else if ((p == "Knee Plank" || p == "Elbow Plank" || p == "LLPT Plank") && (preps == "20 (Marching,Tuck) / 90s Hold (Knee,Elbow,LLPT)")) {
    var prepsadj = "90s Hold"
    var psets = "3"
    var prest = "30 Seconds" }
  else if ((p == "Knee Plank" || p == "Elbow Plank" || p == "LLPT Plank") && (preps == "10 (Marching,Tuck) / 45s Hold (Knee,Elbow,LLPT)")) {
    var prepsadj = "45s Hold"
    var psets = "4"
    var prest = "45 Seconds" }
  else if ((p == "Knee Plank" || p == "Elbow Plank" || p == "LLPT Plank") && (preps == "6 (Marching,Tuck) / 20s Hold (Knee,Elbow,LLPT)")) {
    var prepsadj = "20s Hold"
    var psets = "5"
    var prest = "60 Seconds" }
  else if ((p == "Tuck Plank" || p == "Marching Plank") && (preps == "20 (Marching,Tuck) / 90s Hold (Knee,Elbow,LLPT)")) {
    var prepsadj = "20"
    var psets = "3"
    var prest = "30 Seconds"}
  else if ((p == "Tuck Plank" || p == "Marching Plank") && (preps == "10 (Marching,Tuck) / 45s Hold (Knee,Elbow,LLPT)")) {
    var prepsadj = "15"
    var psets = "4"
    var prest = "45 Seconds" }
  else if ((p == "Tuck Plank" || p == "Marching Plank") && (preps == "6 (Marching,Tuck) / 20s Hold (Knee,Elbow,LLPT)")) {
    var prepsadj = "6"
    var psets = "5"
    var prest = "60 Seconds"}

  if (s == "NOT SELECTED" || sreps == "NOT SELECTED") {
    var srepsadj = "NOT SELECTED"
    var ssets = "NOT SELECTED"
    var srest = "NOT SELECTED" }
  else if ((s == "Chair Squat" || s == "Squat to Calf Raise" || s == "Plyometric Tuck Squat") && (sreps == "20")) {
    var srepsadj = "20"
    var ssets = "3"
    var srest = "30 Seconds" }
  else if ((s == "Chair Squat" || s == "Squat to Calf Raise" || s == "Plyometric Tuck Squat") && (sreps == "15")) {
    var srepsadj = "15"
    var ssets = "4"
    var srest = "45 Seconds" }
  else if ((s == "Chair Squat" || s == "Squat to Calf Raise" || s == "Plyometric Tuck Squat") && (sreps == "8")) {
    var srepsadj = "8"
    var ssets = "5"
    var srest = "60 Seconds" }
  else if ((s == "Split Squat" || s == "Cossack Squat") && (sreps == "20")) {
    var srepsadj = "10 (each side)"
    var ssets = "3"
    var srest = "30 Seconds" }
  else if ((s == "Split Squat" || s == "Cossack Squat") && (sreps == "15")) {
    var srepsadj = "8 (each side)"
    var ssets = "4"
    var srest = "45 Seconds" }
  else if ((s == "Split Squat" || s == "Cossack Squat") && (sreps == "8")) {
    var srepsadj = "4 (each side)"
    var ssets = "5"
    var srest = "60 Seconds" }

  var customWorkout = document.getElementById("customWorkout");
  customWorkout.rows[1].cells[0].textContent = pu;
  customWorkout.rows[1].cells[1].textContent = pusets;
  customWorkout.rows[1].cells[2].textContent = pureps;
  customWorkout.rows[1].cells[3].textContent = purest;
  customWorkout.rows[2].cells[0].textContent = p;
  customWorkout.rows[2].cells[1].textContent = psets;
  customWorkout.rows[2].cells[2].textContent = prepsadj;
  customWorkout.rows[2].cells[3].textContent = prest;
  customWorkout.rows[3].cells[0].textContent = s;
  customWorkout.rows[3].cells[1].textContent = ssets;
  customWorkout.rows[3].cells[2].textContent = srepsadj;
  customWorkout.rows[3].cells[3].textContent = srest;
}
