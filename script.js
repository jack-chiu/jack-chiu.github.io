function printWorkout()
{
  var pu = document.getElementById("pu").value;
  var pureps = document.getElementById("pureps").value;
  var p = document.getElementById("p").value;
  var preps = document.getElementById("preps").value;
  var s = document.getElementById("s").value;
  var sreps = document.getElementById("sreps").value;

  if (pureps = "N/A")
  {
    var pusets = "N/A"
    var purest = "N/A"
  }
  else if (pureps = "20")
  {
    var pusets = "3"
    var purest = "30 Seconds"
  }

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
