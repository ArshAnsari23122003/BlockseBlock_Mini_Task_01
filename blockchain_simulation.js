const crypto = require('crypto');

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  // Calculate the hash of this block
  calculateHash() {
    const content = this.index + this.timestamp + this.data + this.previousHash + this.nonce;
    return crypto.createHash('sha256').update(content).digest('hex');
  }

  // Simulate Proof-of-Work
  mineBlock(difficulty) {
    const target = Array(difficulty + 1).join('0'); // e.g., '0000' for difficulty 4
    const startTime = Date.now();

    while (this.hash.substring(0, difficulty) !== target) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    const endTime = Date.now();
    console.log(`⛏️ Block #${this.index} mined`);
    console.log(`Nonce Used   : ${this.nonce}`);
    console.log(`Hash         : ${this.hash}`);
    console.log(`Time Taken   : ${(endTime - startTime) / 1000} seconds\n`);
  }

  // Nicely formatted block output
  printBlock() {
    console.log(`Block #${this.index}
Timestamp     : ${this.timestamp}
Data (Card #) : ${this.data}
Nonce         : ${this.nonce}
Previous Hash : ${this.previousHash}
Hash          : ${this.hash}
------------------------------------------`);
  }
}

// Create blockchain and mine blocks
const difficulty = 4;
let blockchain = [];

console.log('🔗 Starting Blockchain Mining...\n');

// Genesis Block (Card Number: 0000000)
const genesisBlock = new Block(0, new Date().toISOString(), '0000000', '0');
genesisBlock.mineBlock(difficulty);
blockchain.push(genesisBlock);

// Block 1
const block1 = new Block(1, new Date().toISOString(), '1234567', blockchain[0].hash);
block1.mineBlock(difficulty);
blockchain.push(block1);

// Block 2
const block2 = new Block(2, new Date().toISOString(), '2345678', blockchain[1].hash);
block2.mineBlock(difficulty);
blockchain.push(block2);

// Final Blockchain Output
console.log('\n🧾 Final Blockchain:\n');
blockchain.forEach(block => block.printBlock());
