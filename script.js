function printWorkout()
{
  var pu = document.getElementById("pu").value;
  var puez = document.getElementById("puez").value;
  var p = document.getElementById("p").value;
  var pez = document.getElementById("pez").value;
  var s = document.getElementById("s").value;
  var sez = document.getElementById("sez").value;

  var pur = "N/A"
  var pr = "N/A"
  var sr = "N/A"

  var customWorkout = document.getElementById("customWorkout");
  customWorkout.rows[1].cells[0].textContent = pu;
  customWorkout.rows[1].cells[1].textContent = puez;
  customWorkout.rows[1].cells[2].textContent = pur;
  customWorkout.rows[2].cells[0].textContent = p;
  customWorkout.rows[2].cells[1].textContent = pez;
  customWorkout.rows[2].cells[2].textContent = pr;
  customWorkout.rows[3].cells[0].textContent = s;
  customWorkout.rows[3].cells[1].textContent = sez;
  customWorkout.rows[3].cells[2].textContent = sr;
}
