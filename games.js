class GameData
{
  constructor(name, description)
  {
    this.name = name;
    this.description = description;
    this.recomended = null;
  }
}

const games = [new GameData('Hearts of Iron IV', 'A ww2 era grand strategy game.'), new GameData('Victoria III', 'A grand strategy game set in the Victorian era'), new GameData('SW Jedi: Fallen Order', 'A souls-like rpg game.'), new GameData('Starfield', 'A massive open-world rpg in space.'), new GameData('SW Empire at War', 'A classical Star Wars strategy game.')];

games.forEach((data) => {
  document.getElementById("games").innerHTML += `<option value="${data.name}"">${data.name}</option>`;
})
Choose(games[0].name);

function Choose(g_name)
{
  current_data = games.find((data) => {if (g_name == data.name) return true;})
  WriteData(current_data);
  
}

function Review(name, val)
{
  review_index = games.findIndex((data) => {if (data.name == name) return true;})

  games[review_index].recomended = val;
  WriteData(games[review_index]);
}

function WriteData(current_data)
{
  let review = '';

  if (current_data.recomended != null)
  {
    switch(current_data.recomended)
    {
      case true:
        review = "<h4>You recommend this game!</h4>"
        break;
      case false:
        review = "<h4>You didn't recommend this game!</h4>"
        break;
    }
  }

  document.getElementById("choosen").innerHTML = `<h2>${current_data.name}</h2>
  <p>${current_data.description}</p>
  ${review}
  <form>
    <input type="button" value="Recommended" onclick="Review('${current_data.name}', true)">
    <input type="button" value="Not recommended" onclick="Review('${current_data.name}', false)">
  </form>`;
}
