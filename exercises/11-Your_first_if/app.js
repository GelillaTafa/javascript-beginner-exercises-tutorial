let total = prompt('How many km are left to go?');

// Your code below:
const kmRemaning= function(total){
 console.log(total,'.....')
    let response='';
    if(total > 100){
        response="We still have a bit of driving left to go"
    }else if(total > 50 && total <= 100){
        response="We'll be there in 5 minutes"
    }else if(total <= 50){
        response="I'm parking. I'll see you right now"
    }
    return response;
}
console.log(kmRemaning(total))