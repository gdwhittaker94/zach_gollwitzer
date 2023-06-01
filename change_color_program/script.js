const body = document.querySelector('body');
const para = document.querySelector('p');

const changeColor = () => {

    const colors = ['red', 'green', 'blue', 'pink', 'yellow', 'black'];

    const randomNum = Math.floor(Math.random() * colors.length);

    const randomColor = colors[randomNum];

    body.style.backgroundColor = randomColor;

    para.innerHTML = `The color is now ${randomColor}`
}

document.querySelector('button').addEventListener('click', changeColor)
