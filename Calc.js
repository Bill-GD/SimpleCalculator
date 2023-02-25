const numDisplay = document.getElementById('num-display');
let maxDisplayLength = Math.floor(parseInt(getComputedStyle(document.querySelector('body')).getPropertyValue('--calc-width')) / 22);

const numButton = {};
for (let e of document.getElementsByClassName('numbtn')) numButton[e.id] = e;
console.log(numButton);
for (let x of Object.getOwnPropertyNames(numButton))
    numButton[x].addEventListener("click", () => {
        if (numDisplay.innerHTML.length < maxDisplayLength) numDisplay.innerHTML += numButton[x].innerHTML;
    });

const opButton = {};
for (let e of document.getElementsByClassName('opbtn')) opButton[e.id] = e;
console.log(opButton)
for (let x of Object.getOwnPropertyNames(opButton))
    opButton[x].addEventListener("click", () => {
        if (numDisplay.innerHTML.length < maxDisplayLength - 2) {
            switch (x) {
                case 'mul':
                    numDisplay.innerHTML += " * ";
                    break;
                case 'sqr':
                    numDisplay.innerHTML += ' ** 2';
                    break;
                case 'pow':
                    numDisplay.innerHTML += ' ** ';
                    break;
                case 'sqrt':
                    numDisplay.innerHTML = `\u221A` + numDisplay.innerHTML;
                    break;
                case 'mod':
                    numDisplay.innerHTML += ' % ';
                    break;
                case 'backspace':
                    numDisplay.innerHTML = numDisplay.innerHTML.substring(0, numDisplay.innerHTML.length - 1);
                    break;
                default:
                    numDisplay.innerHTML += ' ' + opButton[x].innerHTML + ' ';
                    break;
            }
        }
    });

const clearButton = document.getElementById('clear');
clearButton.addEventListener("click", () => {
    numDisplay.innerHTML = '';
});

const resultButton = document.getElementById('equal');
resultButton.addEventListener('click', () => {
    numDisplay.innerHTML = eval((numDisplay.innerHTML.includes(`\u221A`) ? 'Math.sqrt(' + numDisplay.innerHTML.replace(`\u221A`, '') + ')' : numDisplay.innerHTML));
});

// document.querySelector('.title').innerHTML += '<button> Added p element </button>';