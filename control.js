let X = document.getElementById('firstInput');
let Y = document.getElementById('secondInput');
let result = document.getElementById('result');
let theSign = document.getElementById('the-sign');
let answer = 0;

function plusSign(){
    theSign.innerHTML = '+';
};

function minesSign(){
    theSign.innerHTML = '-';
};

function multiSign(){
    theSign.innerHTML = '*';
};

function divSign(){
    theSign.innerHTML = '/';
};

function resetSign(){
    theSign.innerHTML = ' ';
    X.value = ' ';
    Y.value = ' ';
    result.innerHTML = '0';
}

function equal(){
    switch(theSign.innerHTML){
        case '+':
            answer = +X.value + +Y.value;
            result.innerHTML = answer;
            break;

        case '-':
            answer = X.value - Y.value;
            result.innerHTML = answer;
            break;

        case '*':
            answer = X.value * Y.value;
            result.innerHTML = answer;
            break;

        case '/':
            answer = X.value / Y.value;
            result.innerHTML = answer;
            break;
    }
};