// const number = document.querySelector('.number');
// const btn = document.querySelector('.generate');

// const generateRandomNumber = () =>{
//     const random =Math.floor(Math.random() * 1000 );

//     number.innerHTML = random;

   
// }
// btn.addEventListener('click',generateRandomNumber);
// generateRandomNumber();

const number = document.querySelector('.number');
const btn = document.querySelector('.generate');

btn.addEventListener('click',()=>{
    const random = Math.floor(Math.random()*1000);

    number.innerHTML = random;
})