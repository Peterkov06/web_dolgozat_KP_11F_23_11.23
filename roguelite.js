class Player
{
  constructor(hp, power)
  {
    this.hp = hp;
    this.power = power;
  }

  TakeDamage (damage) {
    this.hp -= damage;
  }
}

class Enemy
{
  constructor(hp, power)
  {
    this.hp = hp;
    this.power = power;
  }

  TakeDamage (damage) {
    this.hp -= damage;
  }
}

let player, enemy;
let round = 0;

document.getElementById("atck_btn").disabled = true;

function StartGame()
{
  player = new Player(200, 20);
  enemy = new Enemy(200, 40);
  round = 1;
  Write(`<h4>New game! Click 'Attack'!</h4>`)
  document.getElementById("atck_btn").disabled = false;
}

function Attack()
{
  enemy_damage = getRndInteger(enemy.power, enemy.power * 2);
  player_damage = getRndInteger(player.power, player.power * 2);
  if (enemy.hp - player_damage > 0)
  {
    if (player.hp - enemy_damage > 0)
    {
      player.TakeDamage(enemy_damage);
      enemy.TakeDamage(player_damage);
      Write(`<p>Player hp: ${player.hp}</p> <p>Player power: ${player.power}</p> <p>Enemy hp: ${enemy.hp}</p>`)
    }
    else
    {
      round += 1;
      player.hp = 200;
      player.power += 10;
      enemy.hp = 200;
      Write(`You died! Next round starts!</h5>`)
    }
  }
  else
  {
    Write(`<h4>End of game! Rounds taken to defeat the enemy: ${round}</h4>`)
    document.getElementById("atck_btn").disabled = true;
  }

}

function Write(to_write)
{
  document.getElementById("writable").innerHTML = '';
  document.getElementById("writable").innerHTML = `${to_write}`;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}