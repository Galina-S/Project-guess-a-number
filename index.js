num = Math.floor(Math.random() * 10) + 1;

let attempts = 1;
let flag = false;

function play() {

guess = document.getElementById("guess").value;

console.log(`num ${num}`)
console.log(`guess: ${guess}`);

if (flag) { 
    location.reload();}

if (attempts==3) {
    document.getElementById("message").innerHTML =`Game over. You couldn't guess the number within 3 attempts. The number was ${num}.`; 
    document.getElementById("button").innerHTML = "Play again!"
    flag=true;
    return;
}

if (guess == num) {
    document.getElementById("message").innerHTML =`Success, the number was ${num}! Attempts: ${attempts}`; 
    document.getElementById("button").innerHTML = "Play again!"
    flag=true;
    return;
    }
    else { 

        if(guess<num) {
        document.getElementById("message").innerHTML =`Your guess is too low. You have ${3-attempts} more attempts. Please try again:`;  
        
        }
        else {
            document.getElementById("message").innerHTML =`Your guess is too high. You have ${3-attempts} more attempts. Please try again:`;  
            
            }
        attempts++;
        console.log(attempts)
    }

}
