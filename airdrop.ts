import { Connection, Keypair, LAMPORTS_PER_SOL} from "@solana/web3.js"
import wallet from "./dev-wallet.json"

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    try {
        const balance=await connection.getBalance(keypair.publicKey);
        console.log(balance/LAMPORTS_PER_SOL)
        const txhash = await connection.requestAirdrop(keypair.publicKey, 5 * LAMPORTS_PER_SOL);
        console.log(`Success! Check out your TX here: 
        https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();