const crypto = require("crypto");
const EC = require('elliptic').ec;
const BN = require('bn.js');
const ec = new EC('secp256k1');
const keccak256 = require('js-sha3').keccak256;

// create private key
var privateKey = crypto.randomBytes(32);
console.log("Private key : 0x" + privateKey.toString('hex'));

// create public key
var G = ec.g;
var pubPoint = G.mul(new BN(privateKey));
var x = pubPoint.getX().toBuffer();
var y = pubPoint.getY().toBuffer();
var publicKey = Buffer.concat([x,y]);
console.log("public key : 0x" + publicKey.toString('hex'))

//create address
const publicKeyHash = Buffer.from(keccak256(publicKey), 'hex');
const address = publicKeyHash.slice(-20);
console.log("Address : 0x" + address.toString('hex'))

