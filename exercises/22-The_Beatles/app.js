function sing(){
    let letItBe='';
    for (let i=0; i <= 3; i++){
        letItBe += "let it be, "
    }
   letItBe += "there will be an answer,"
 

    for (let i=0; i <= 4; i++){
        letItBe+=" let it be,"
    }
    letItBe += " whisper words of wisdom, let it be"
     
    return letItBe;
}

//Your code above ^^^

console.log(sing());