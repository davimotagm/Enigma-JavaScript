/* Qualquer caractere que não seja uma letra minúscula entre a e z será considerado separador de palavra.
Este código deve decifras quantas palavras existem no enigma. */

// Enigma
const input = "sssa1asdss"


function countWord(text) {
    const regex = /[^a-z]/g /* Indicando quais sinais eu quero ignorar */
    const fraseComEspaços = text.replace(regex, " ") /* Adicionando um espaço nos sinais que não são os "permitidos" */
    const words = fraseComEspaços.split(' '); /* Separando as palavras em lista de acordo com os espaços incluídos */
    return words.length; /* Informma o tamanho da lista (quantidade de palavras) */
}
console.log(countWord(input));