// Substitution Cipher Key
const plainAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
const cipherAlphabet = 'V!HJRWE&OIQU$BC-AZXM%PNKTY482391576';

// Substitution Cipher Algorithm | Time Complexity: O(n)
function substitutionCipher(text) {
    const txt = text.toUpperCase();
    let newText = '';
    for (let letter of txt) {
        const index = plainAlphabet.indexOf(letter);
        if (letter === ' ') newText += '*';
        else if (index == -1) return "Only Letters, Spaces, and Numbers are allowed.";
        else newText += cipherAlphabet[index];
    }
    return newText;
}

const output = substitutionCipher('Hello world my name is Nazir I am 19 years old and love to eat');

console.log(output);