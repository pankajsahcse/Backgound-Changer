
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];

    }
    return color;
}
let interrvalId;
const startChangingColor = function () {

    // set interval ek function ka reference lega to changBgColor ko function bana ke uska reference le liye
    // ab stopChangingColor ke esse rokne ke liye clearInterval me bhi ek refence chahiye so es wale setInterval ko ek reference de de rhe 
    if (!interrvalId) {
        interrvalId = setInterval(changeBgColor, 1000);
    }
    // essse if me esliye lagaya gya q ki humne esse null kr diya tha stop click krke 
    // then ye check kre ki null ho tb chale , to ab ye sahi chalega

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stoptChangingColor = function () {
    clearInterval(interrvalId);
    interrvalId = null; // keval null krne pe kaam nhi karega q ki ye flushout ho gya hai
};


document.querySelector('#start').addEventListener
    ('click', startChangingColor);

document.querySelector('#stop').addEventListener
    ('click', stoptChangingColor);