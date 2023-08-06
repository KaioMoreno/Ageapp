const a = document.querySelector('.titlebar')
const b = a.innerHTML;
const interval = 140

a.innerHTML = "";

const showTest = (a, b, interval) => {
    const char = b.split("").reverse();
    
    const typer = setInterval (() => {
        if(!char.length) {
            return clearInterval(typer)
        }

        const next = char.pop();

        a.innerHTML += next

    }, interval);
};

showTest(a, b, interval);