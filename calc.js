console.log('The program has been initiated by your browser.')
let display = document.getElementById('display')

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                console.log('Process to remove all characters  has been initiated')
                display.innerText = '';
                console.log('Removed all numbers/numerical characters')
                break;
            case '←':
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                    console.log("Removed last number/numerical characters.")
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText= 'Error!'
                }
                break;
            default:
                display.innerText += e.target.innerText
        }
    });
});
