// Your code here:
// Your code here:
function bootlesOfMilk(){
    let bottles=99;
for(let i = bottles; i >= 0; i--){
    if(i > 1){
        console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i-1} ${i-1 === 1 ? 'bottle' : 'bottles'} of milk on the wall.\n`)
    }else if (i === 1 ){
        console.log(`1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.\n`)
    }else {
        console.log(`No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.\n`)
    }
}

}
bootlesOfMilk();