import { Token } from '@raydium-io/raydium-sdk';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';

export function getToken(tokenAddress: string) {
  return new Token(
    TOKEN_PROGRAM_ID,
    new PublicKey(tokenAddress), // Wprowadź tutaj adres tokena
    6, // Liczba miejsc dziesiętnych tokena
    'CUSTOM_TOKEN', // Nazwa tokena
    'CTK', // Symbol tokena
  );
}