# Bridge to Turbin3 Program by RiseIn: All 3 Homeworks

## Disclaimer

This project is a final assignment and includes three homeworks. 

## Overview

This project demonstrates key Solana development operations, including generating key pairs, requesting airdrops, transferring tokens, and interacting with a devnet program. 

## Features

- **Keypair Generation**: Create a new Solana keypair.
- **Airdrop Request**: Claim SOL from the devnet for testing.
- **Token Transfer**: Transfer SOL to another wallet.
- **Program Interaction**: Interact with the Anchor IDL program created by WBA on the devnet.

## Airdrop of Dev SOL
View the airdrop transaction [here](https://explorer.solana.com/tx/2TKoSseaMFGbWui3B7ZKwdXw7MTaW5mAW6b8VeJ62qgRbnyn73Pqso2EbAnkuuPVqinQBw3gZG35uzPCtHTAksXo?cluster=devnet).

## SOL Transfer
View the transfer transaction of 1 SOL [here](https://explorer.solana.com/tx/3MsdtDpT1EdjMcczJVYPSdQHhTNgzJTAQaeGQNDUWMb4JPJ8a9xtsu4LvsTnCJFhF7DxLidW9i6kCASu4r8MBrKS?cluster=devnet).

## Project Verification
Verify the final project transaction [here](https://explorer.solana.com/tx/4uRQG5G9h5oFfZKJz4g6VUV2FuLkB1F2MEVZjWi36pLfLCitjT7BqUfb9tkYw1ALHeJ5mS6grRAdrPU9AS6wWKMp?cluster=devnet).

## Acknowledgements

- [Risein](https://risein.com) - For their support and platform.
- [Turbin3](https://turbin3.com) - For providing the development resources.
- [WBA](https://solana.web3builders.dev/) - For the Anchor IDL program.


## Project Files

The following TypeScript files are included in this project:

- **`keygen.ts`**: Generates a new Solana keypair.
- **`airdrop.ts`**: Requests an airdrop of SOL from the devnet.
- **`transfer.ts`**: Initiates a SOL transfer to another wallet.
- **`enroll.ts`**: Interacts with the Anchor IDL program on the devnet.

## Installation and Setup

1. **Install Rust**:
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

2. **Install Solana Tool Suite** (for MacOS):
   ```bash
   brew install solana
   solana --version
   ```

3. **Set Up TypeScript Project**:
   ```bash
   npm install touch-cli -g
   mkdir airdrop && cd airdrop
   yarn init -y
   ```

4. **Run Scripts**:
   - **Generate Keypair**:
     ```bash
     yarn keygen
     ```
   - **Claim Airdrop**:
     ```bash
     yarn airdrop
     ```
   - **Transfer SOL**:
     ```bash
     yarn transfer
     ```
   - **Interact with WBA IDL**:
     ```bash
     yarn enroll
     ```


