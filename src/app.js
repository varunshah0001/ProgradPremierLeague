//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var details = [managerName, managerAge, currentTeam, trophiesWon]
  return details;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  var obj =  {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return obj;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var res = [];
  for(let i=0;i<players.length;i++) {
    if(players[i].debut == year)
      res.push(players[i]);
  }
  return res;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(pos){
  var res = [];
  for(let i=0;i<players.length;i++) {
    if(players[i].position == pos)
      res.push(players[i]);
  }
  return res;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  var res = [];
  for(let i=0;i<players.length;i++) {
    for(let j=0;j<players[i].awards.length;j++){
        if(players[i].awards[j].name == awardName)
          res.push(players[i]);
    }
  } 
  return res;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  var res = [];
  var count = 0;
  for(let i=0;i<players.length;i++) {
    for(let j=0;j<players[i].awards.length;j++){
        if(players[i].awards[j].name == awardName)
          count++;
        if(count == noOfTimes)
          res.push(players[i]);  
    }
  } 
  return res;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, nationality){
  var res = [];
  for(let i=0;i<players.length;i++) {
    for(let j=0;j<players[i].awards.length;j++){
        if(players[i].awards[j].name == awardName && players[i].country == nationality)
          res.push(players[i]);
    }
  } 
  return res;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, teams, agegroup){
  var res = [];
  for(let i=0;i<players.length;i++) {
    if(players[i].awards.length>=noOfAwards && players[i].team == teams && players[i].age<agegroup)
      res.push(players[i]);
  }
  return res;
}

//Progression 9 - Sort players in descending order of their age
function sortByAge(){
  var res = [];
  for(let i=0;i<players.length;i++) {
    res.push(players[i]);
  }
  res.sort(function(a,b) {
    return b.age-a.age;
  });
  return res;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(teams){
  var res = [];
  for(let i=0;i<players.length;i++) {
    if(players[i].team == teams)
      res.push(players[i]);
  }
  res.sort((a,b) => b.awards.length-a.awards.length);
  return res;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
   
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(){
  
}
