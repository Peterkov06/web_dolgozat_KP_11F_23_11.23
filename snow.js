function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const values = [];

function GenerateSnow()
{
  values.length = 0;
  for (let index = 0; index < 20; index++) {
    values.push(getRndInteger(40, 120))
  }
  Write();
}

function ModifySnow()
{
  for (let index = 0; index < values.length; index++) {
    values[index] = values[index] + getRndInteger(-10, 10);
  }
  Write();
}

function Write()
{
  document.getElementById("results").innerHTML = ``;

  values.forEach((val) => {
    let color = "black";

    if(val > 100)
    {
      color = "red";
    }

    document.getElementById("results").innerHTML += `<div class="col-sm-6 col-md-3 col-lg-3" style="color:${color};" ><p>${val}</p></div>`;
  })
}