// Display
const numDisplay = document.getElementById('num-display');

// All the number buttons
for (let x of document.getElementsByClassName('numbtn'))
    x.addEventListener("click", () => {
        if (numDisplay.innerHTML.length < Math.floor(parseInt(getComputedStyle(document.querySelector('body')).getPropertyValue('--calc-width')) / 22))
            numDisplay.innerHTML += x.innerHTML;
    });

// All the operation buttons
for (let x of document.getElementsByClassName('opbtn'))
    x.addEventListener("click", () => {
        if (numDisplay.innerHTML.length < Math.floor(parseInt(getComputedStyle(document.querySelector('body')).getPropertyValue('--calc-width')) / 22) - 2) {
            switch (x.id) {
                case 'mul':
                    numDisplay.innerHTML += "*";
                    break;
                case 'sqr':
                    numDisplay.innerHTML += '<sup>2</sup>';
                    break;
                case 'pow':
                    numDisplay.innerHTML += '**';
                    break;
                case 'sqrt':
                    numDisplay.innerHTML += `\u221A`;
                    break;
                case 'mod':
                    numDisplay.innerHTML += '%';
                    break;
                case 'backspace':
                    numDisplay.innerHTML = numDisplay.innerHTML.substring(0, numDisplay.innerHTML.length - 1);
                    break;
                case 'open':
                    numDisplay.innerHTML += '(';
                    break;
                case 'close':
                    numDisplay.innerHTML += ')';
                    break;
                default:
                    numDisplay.innerHTML += x.innerHTML;
                    break;
            }
        }
    });

// Clear button
document.getElementById('clear').addEventListener("click", () => {
    numDisplay.innerHTML = '';
});

// Compute result
document.getElementById('equal').addEventListener('click', () => {
    let outputString = numDisplay.innerHTML;
    outputString = (numDisplay.innerHTML.includes(`\u221A`) ? numDisplay.innerHTML.replace(`\u221A`, 'Math.sqrt') : numDisplay.innerHTML);
    outputString = (numDisplay.innerHTML.includes('<sup>') ? numDisplay.innerHTML.replace(`<sup>`, '**').replace('</sup>', '') : numDisplay.innerHTML);
    numDisplay.innerHTML = eval(outputString);
});