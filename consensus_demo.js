// Just a helper to get a random number between two values
function randomBetween(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ----------------------------------

// Example 1: Proof of Work (PoW)

// ----------------------------------
// Miners use computation power to try and solve a puzzle.

const miningParticipants = [
 { name: 'Alice', power: randomBetween(10, 100) },
 { name: 'Bob', power: randomBetween(10, 100) },
 { name: 'Charlie', power: randomBetween(10, 100) },
];

let strongestMiner = miningParticipants[0];

for (let i = 1; i < miningParticipants.length; i++) {
if (miningParticipants[i].power > strongestMiner.power) {
 strongestMiner = miningParticipants[i];
 }
}

console.log('Consensus: Proof of Work');
console.log('Each miner tries to win based on their computing strength:');
miningParticipants.forEach(miner => {
 console.log(`${miner.name} - Power Score: ${miner.power}`);

});

console.log(`Chosen Miner: ${strongestMiner.name} (Highest power)\n`);
// ----------------------------------
// Example 2: Proof of Stake (PoS)
// ----------------------------------
//he more stake you have, the more likely you are to get chosen to validate the next block.

const validators = [
 { name: 'Daisy', stake: randomBetween(100, 1000) },
 { name: 'Ethan', stake: randomBetween(100, 1000) },
{ name: 'Fiona', stake: randomBetween(100, 1000) },
];



let highestStaker = validators[0];
for (let i = 1; i < validators.length; i++) {
 if (validators[i].stake>highestStaker.stake){
  highestStaker= validators[i];
 }
}
console.log('Consensus: Proof of Stake');
// 
console.log('Validators are selected based on how much they’ve staked:');
validators.forEach(v => {
 console.log(`${v.name} - Stake: ${v.stake}`);
});
console.log(`Chosen Validator: ${highestStaker.name} (Largest Stake)\n`);
// ---------------------------------------------
// Example 3: Delegated Proof of Stake (DPoS)
// ---------------------------------------------

// In this case, people vote for delegates. The delegate with the most votes wins.

const delegateOptions = ['Tom', 'Jerry', 'Max'];

const voterChoices = [
{ voter: 'User1', vote: 'Tom' },
{ voter: 'User2', vote: 'Jerry' },
{ voter: 'User3', vote: 'Tom' },
];
const tally ={};
for (const entry of voterChoices) {
 if (!tally[entry.vote]) {
  tally[entry.vote] =1;
 }else{
  tally[entry.vote]++;
 }
}



// Figure out who got the most support

let topCount = 0;

let potentialWinners = [];
for (const candidate in tally) {
 if (tally[candidate] > topCount) {
  topCount = tally[candidate];
  potentialWinners = [candidate];
 } else if(tally[candidate] === topCount){
  potentialWinners.push(candidate);

 }

}
// If more than one delegate got top votes, randomly pick one
const selectedDelegate = potentialWinners[randomBetween(0, potentialWinners.length - 1)];
console.log('Consensus: Delegated Proof of Stake');
console.log('Each user votes for a delegate they trust:');
voterChoices.forEach(entry => {
 console.log(`${entry.voter} voted for ${entry.vote}`);
});
console.log(`Elected Delegate: ${selectedDelegate} (Most votes received)\n`);

