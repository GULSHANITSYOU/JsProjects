const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById('btn') ; 
const color = document.querySelector('.color'); 

const randomNumber = ()=> {
    return Math.floor(Math.random() * hex.length) ; 
}

btn.addEventListener('click' , ()=>{
    let hexCode = "#" ; 

    for(let i = 0 ; i<6 ; i++){
        hexCode += hex[randomNumber()]; 
    }

    document.body.style.backgroundColor = hexCode; 
    color.textContent = hexCode ; 
    console.log(hexCode)


})