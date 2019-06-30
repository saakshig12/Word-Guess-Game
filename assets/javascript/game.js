var words = ["lexus", "audi", "mazda", "subaru", "kiamotors", "honda", "mercedesbenz", "volvo"]

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;

function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    lettersOfWord = randomWord.split("");
    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}

var lex = document.getElementById("lexus");
var audi = document.getElementById("audi");
var mazda = document.getElementById("mazda");
var subaru = document.getElementById("subaru");
var kia = document.getElementById("kiamotors");
var honda = document.getElementById("honda");
var benz = document.getElementById("mercedesbenz");
var volvo = document.getElementById("volvo")


function aud() {
    
    if (randomWord === words[0]) {
        lex.pause();
        audi.pause();
        mazda.pause();
        subaru.pause();
        kia.pause();
        honda.pause();
        volvo.pause();
        benz.play();
        document.getElementById("image").src = "assets/images/benz";
    }
    
    else if (randomWord === words[1]) {
        lex.pause();
        audi.pause();
        mazda.pause();
        subaru.pause();
        kia.pause();
        honda.pause();
        benz.pause();
        volvo.play();
        document.getElementById("image").src = "assets/images/volvo";
    }

    else if (randomWord === words[2]) {
        lex.pause();
        audi.pause();
        mazda.pause();
        kia.pause();
        volvo.pause();
        benz.pause();
        subaru.pause();
        honda.play();
        document.getElementById("image").src = "assets/images/honda";
    }
   
    else if (randomWord === words[3]) {
        lex.pause();
        audi.pause();
        mazda.pause();
        kia.pause();
        volvo.pause();
        benz.pause();
        honda.pause();
        subaru.play();
        document.getElementById("image").src = "assets/images/subaru";
    }
   
    else if (randomWord === words[4]) {
        lex.pause();
        audi.pause();
        mazda.pause();
        honda.pause();
        volvo.pause();
        benz.pause();
        subaru.pause();
        kia.play();
        document.getElementById("image").src = "assets/images/kia";
    }
    
    else if (randomWord === words[5]) {
        lex.pause();
        audi.pause();
        honda.pause();
        kia.pause();
        volvo.pause();
        benz.pause();
        subaru.pause();
        mazda.play();
        document.getElementById("image").src = "assets/images/mazda";
    }
 
    else if (randomWord === words[6]) {
        lex.pause();
        honda.pause();
        mazda.pause();
        kia.pause();
        volvo.pause();
        benz.pause();
        subaru.pause();
        audi.play();
        document.getElementById("image").src = "assets/images/audi";
    }

    else if (randomWord === words[7]) {
        audi.pause();
        honda.pause();
        mazda.pause();
        kia.pause();
        volvo.pause();
        benz.pause();
        subaru.pause();
        lex.play();
        document.getElementById("image").src = "assets/images/lex";
    }
};

function reset() {
    guessesRemaining = 8;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

function complete() {
    console.log("wins:" + wins + "losses:" + losses + "guesses left:" + guessesRemaining)

    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").alert("Try again")
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);

    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}