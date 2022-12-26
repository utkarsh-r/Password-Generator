const passwordCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let password1El = document.getElementById("pw-1")
let password2El = document.getElementById("pw-2")
let a = 0
let b = 0
let firstPassword = " "
let secondPassword = " "

for (let i = 0; i < 16; i++) {
    a = Math.floor( Math.random() * passwordCharacters.length )
    b = Math.floor( Math.random() * passwordCharacters.length )
    firstPassword += passwordCharacters[a]
    secondPassword += passwordCharacters[b]
}
console.log(firstPassword)
console.log(secondPassword)
function randomPassword() {
    
    password1El.textContent = firstPassword
    password2El.textContent = secondPassword
}