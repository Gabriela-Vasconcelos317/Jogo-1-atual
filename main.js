alert("Bem-vindo ao jogo do número secreto!");
let limite = 100;
let secret_number = 5; //Math.floor(Math.random() * limite) + 1; // Número aleatório entre 1 e limite
let guess; // chute
let guess_count = 1;

while (guess !== secret_number) {
    guess = prompt(`Digite um número entre 1 e ${limite}`);

    if ( guess < 1 || guess > limite) {
        // ve se o input é um número válido dentro do limite
        alert(`Por favor, insira um número válido entre 1 e ${limite}.`);
        } 

    else {
        if (parseInt(guess) < secret_number) {
            alert(`O número secreto é maior que o seu palpite ${guess}.`);
        } 
        else if (parseInt(guess) > secret_number) {
            alert(`O número secreto é menor que o seu palpite ${guess}.`);
        } 
        else {
            // caso o palpite esteja correto
            let word_attempts = guess_count > 1 ? `tentativas` : `tentativa`;
            alert(`Parabéns, você acertou o número secreto em ${guess_count} ${word_attempts}!`);
            imagem.style.display = 'block'; // aparece a imagem
            texto.style.display = 'block'; // aparece o texto na imagem
            break; // encerra o loop após acertar o número
        }
        guess_count++;
    }
}
