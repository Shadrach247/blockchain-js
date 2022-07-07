const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OIUOEREDHKHKD', '78s97d4x6dsf');
bitcoin.createNewBlock(2391, 'DFGVMOIUACBRG', '80s97d7x3dsf');
bitcoin.createNewBlock(2393, 'NVBCMKFJGSDCX', '98s82d9x6dsf');
bitcoin.createNewBlock(2395, 'KLJGHAQWEXZVB', '45s51d4x9dsf');
bitcoin.createNewBlock(2401, 'POIUYERSCVBMZ', '91s99d4x8dsf');

console.log(bitcoin);
