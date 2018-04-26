# Ethereum node

Createing a private Ethereum node.

## Getting Started

Install the dependencies.

```
npm install
```

Generate a random private, public key and address.

```
node gen.js
```

Create a private folder. Then generate a private key for the node.

```
bootnode -genkey node.key
```

Start the bootnode from the private key.

```
bootnode -nodekey node.key --verbosity 4
```
