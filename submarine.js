function invalidInput(element_id) {
  document.getElementById(element_id).textContent = "INVALID INPUT :(";
}

function setText(element_id, text) {
  document.getElementById(element_id).textContent = text;
}

function setInnerHTML(element_id, text) {
  document.getElementById(element_id).innerHTML = text;
}

function getValue(element_id) {
  return document.getElementById(element_id).value;
}

function getElement(element_id) {
  return document.getElementById(element_id);
}

// # https://boardgamegeek.com/thread/2631311/all-the-mission-cards
let data = [[2, 3, 3, 'Win more tricks than everyone else\n'], [3, 4, 5, 'Win more tricks than everyone else together\n'], [2, 2, 3, 'Win fewer tricks than everyone else\n'], [2, 2, 3, 'Win more tricks than the captain (the captain can’t take this mission)\n'], [2, 2, 2, 'Win fewer tricks than the captain (the captain can’t take this mission)\n'], [4, 3, 3, 'Win the same number of tricks as the captain (the captain can’t take this mission)\n'], [2, 3, 3, 'Win a trick where all cards are of lower value than 7 without submarines\n'], [2, 3, 4, 'Win a trick where all cards are of greater value than 5\n'], [2, 3, 3, 'Win a trick with a 6.\n'], [2, 3, 4, 'Win a trick with a 5.\n'], [3, 4, 5, 'Win a trick with a 3.\n'], [1, 2, 2, 'Win a 5 with a 7.\n'], [3, 4, 5, 'Win an 8 with a 4.\n'], [2, 3, 4, 'Win any 6 with a another 6.\n'], [3, 4, 5, 'Win a trick with a 2.\n'], [1, 1, 1, 'Win the pink 3\n'], [1, 1, 1, 'Win the yellow 1\n'], [1, 1, 1, 'Win the blue 4\n'], [1, 1, 1, 'Win the green 6\n'], [3, 4, 5, 'Win all four 3s.\n'], [3, 4, 5, 'Win at least three 5s.\n'], [3, 4, 5, 'Win at least three 9s.\n'], [2, 2, 2, 'Win at least two 7s.\n'], [4, 5, 6, 'Win all four 9s.\n'], [3, 4, 4, 'Win exactly three 6s\n'], [2, 3, 3, 'Win exactly two 9s\n'], [2, 3, 3, 'Win the blue 1,2 and 3\n'], [2, 2, 3, 'Win the blue 6 and the yellow 7\n'], [2, 2, 3, 'Win the pink 5 and yellow 6\n'], [2, 2, 3, 'Win the green 5 and blue 8\n'], [2, 2, 3, 'Win the blue 5 and pink 8\n'], [2, 2, 3, 'Win the pink 9 and yellow 8\n'], [2, 2, 2, 'Win the pink 1 and green 7\n'], [2, 3, 3, 'Win the yellow 9 and blue 7\n'], [3, 4, 4, 'Win the green 3 and the yellow 4 and 5\n'], [3, 4, 5, 'Win the green 2 in the last trick\n'], [4, 4, 4, 'Win exactly one pink and one green card\n'], [3, 3, 3, 'Win at least seven yellow cards\n'], [2, 3, 3, 'Win at least five pink cards\n'], [3, 4, 4, 'Win exactly two green cards.\n'], [3, 4, 4, 'Win exactly two blue cards.\n'], [3, 3, 4, 'Win exactly one pink card.\n'], [2, 2, 2, 'Win no pink cards.\n'], [2, 3, 4, 'Win at least one card of each colour (excluding submarines)\n'], [3, 4, 5, 'Win all cards of at least one colour (excluding submarines)\n'], [2, 5, 6, 'Win a trick that has only even numbers (2,4,6,8)\n'], [2, 4, 5, 'Win a trick that has only numbers (1,3,5,7,9)\n'], [3, 3, 4, 'Win a trick with a total value higher than 23/28/31 (3/4/5 players) without submarines\n'], [3, 3, 4, 'Win a trick with a total value lower than 8/12/16 (3/4/5 players) without submarines\n'], [3, 3, 4, 'Win a trick with a total value of 22 or 23\n'], [3, 3, 3, 'Win exactly one submarine (deal new cards if someone has all submarines in hand)\n'], [3, 3, 3, 'Win the 1 submarine and no other (deal new cards if someone has submarines no. 1 and 4 or 1,2,3 in hand)\n'], [3, 3, 3, 'Win the 2 submarine and no other (deal new cards if someone has submarines no. 2 and 4 or 1,2,3 in hand)\n'], [1, 1, 1, 'Win the 3 submarine\n'], [3, 3, 4, 'Win exactly two submarines (deal new cards if someone has submarines no. 2,3,4 in hand)\n'], [3, 4, 4, 'Win exactly three submarines (deal new cards if someone has all submarines in hand)\n'], [1, 1, 1, 'Win no submarines\n'], [3, 3, 3, 'Win the pink 7 with a submarine\n'], [3, 3, 3, 'Win the green 9 with a submarine\n'], [4, 3, 3, 'Don’t open a trick with a pink, yellow or blue card\n'], [2, 1, 1, 'Don’t open a trick with a pink or green card\n'], [2, 2, 2, 'Don’t win any green cards\n'], [2, 2, 2, 'Don’t win any yellow cards\n'], [3, 3, 3, 'Don’t win any pink or blue cards\n'], [3, 3, 3, 'Don’t win any yellow or green cards\n'], [3, 3, 2, 'Don’t win any 8s or 9s\n'], [1, 1, 1, 'Don’t win any 9s\n'], [1, 2, 2, 'Don’t win any 5s\n'], [2, 2, 2, 'Don’t win any 1s\n'], [3, 3, 3, 'Don’t win any 1s, 2s or 3s\n'], [1, 2, 3, 'Don’t win any of the first four tricks\n'], [1, 2, 2, 'Don’t win any of the first three tricks\n'], [2, 3, 3, 'Don’t win any of the first five tricks\n'], [4, 3, 3, 'Don’t win any tricks\n'], [3, 2, 2, 'Do not win two consecutive tricks.\n'], [2, 3, 3, 'Win the last trick\n'], [2, 3, 4, 'Win the first three tricks\n'], [1, 1, 2, 'Win the first two tricks\n'], [1, 1, 1, 'Win the first trick\n'], [3, 4, 4, 'Win the first and the last trick\n'], [4, 4, 4, 'I win only the last trick\n'], [4, 3, 3, 'I win only the first trick\n'], [3, 2, 2, 'Win exactly one trick\n'], [2, 2, 2, 'Win exactly two tricks\n'], [1, 1, 1, 'Win two consecutive tricks\n'], [2, 3, 4, 'Win three consecutive tricks\n'], [2, 3, 5, 'Win exactly four tricks\n'], [3, 3, 4, 'Win exactly three consecutive tricks.\n'], [3, 3, 3, 'Win exactly two consecutive tricks.\n'], [3, 2, 2, 'Win X tricks (predict the exact number and show)\n'], [4, 3, 3, 'Win X tricks (predict the exact number but keep hidden)\n'], [4, 4, 4, 'Win the same amount of pink and yellow cards (more than 0)\n'], [2, 3, 3, 'Win the same amount of green and yellow cards in a trick (more than 0)\n'], [2, 3, 3, 'Win the same amount of pink and blue cards in a trick (more than 0)\n'], [1, 1, 1, 'Win more yellow cards than blue cards (0 blue cards are allowed)\n'], [1, 1, 1, 'Win more pink cards than green cards (0 green cards are allowed)']];
data = shuffle(data);

function encode(task) {
    let encoding = [
        ["red", "hearts"], 
        ["pink", "Hearts"], 
        ["yellow", "Spades"], 
        ["green", "Clubs"], 
        ["blue", "Diamonds"], 
        ["submarines", "Faces/Jokers"], 
        ["submarine", "Face/Joker"]
    ]
    
    for (const [k, v] of encoding) task = task.replace(k, v);
    return task;
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // random index
    const x = Math.floor(Math.random() * (i + 1));
    // schwap
    let temp = array[i];
    array[i] = array[x];
    array[x] = temp;
  }
  return array;
}

function button1() {
  // BEGIN INPUT  
  const input1 = getValue("input1");
  const input2 = getValue("input2");
  const input3 = getValue("input3");
  const checkbox1 = getElement("checkbox1");
  
  // PROCESSING
  const a = parseInt(input1) || 8;
  const b = parseInt(input2) || 5;
  const c = parseInt(input3) || 3;
  
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    invalidInput("result1");
    return;
  }

  let sum = (a > 0) ? a : 1;
  let count = (b > 0) ? b : 1;
  let players = (c >= 3) ? (c <= 5 ? c : 5) : 3;
  if (count > sum) count = sum;

  let toEncode = checkbox1.checked;

  console.log(sum + " " + count + " " + players);
  
  // COMPUTE

  players -= 3;

  // Simulate a deal

  data = shuffle(data);
  quests = [];  // Format: [diff, quest data]
  let runnin = 0;
  for (let i = 0; i < data.length; i++) {
    
    let diff = data[i][players];
    let quest = data[i][3];
    if (diff > sum - runnin) continue;
    runnin += diff;
    quests.push([diff, toEncode ? encode(quest) : quest]);

    if (runnin >= sum) break;
  }
  console.log(quests);
  // RETURN

  result1 = "[SUM " + (runnin) + "]<br>";
  for (let i = 0; i < quests.length; i++) result1 = result1 + "" + quests[i][0] + ": " + quests[i][1] + "<br>";
  setInnerHTML("result1", "RESULT = " + result1);
}