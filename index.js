const inputNumber = document.querySelector('.input-number')
const revealBtn = document.querySelector('.reveal-btn')
const provider = document.querySelector('.provider');
const labelInput = document.querySelector('.label-input');
inputNumber.addEventListener('focus', () => {
    inputNumber.classList.add('focus');
})
inputNumber.addEventListener('blur', () => {
    inputNumber.classList.remove('focus');
})
let phoneNumber;
let validNumberPattern = /^(\+234|0){1}\d{10}$/;
let mtnValidPattern = /^(\+234|0){1}(803|806|703|706|813|816|810|814|903|906|913|916|7025|7026|704){1}(\d{6}|\d{7})$/;
let airtelValidPattern = /^(\+234|0){1}(802|808|708|812|701|902|901|904|907|912){1}(\d{6}|\d{7})$/;
let nineMobileValidPattern = /^(\+234|0){1}(809|818|817|909|908){1}(\d{6}|\d{7})$/;
let gloValidPattern = /^(\+234|0){1}(805|807|705|815|811|905|915){1}(\d{6}|\d{7})$/;
let ntelValidPattern = /^(\+234|0){1}(804){1}(\d{6}|\d{7})$/;
let smileValidPattern = /^(\+234|0){1}(702){1}(\d{6}|\d{7})$/;

let isButtonAlive = false;
let checkPhoneNum;
let numberLength = 0;
inputNumber.addEventListener('keyup', (e) => {
    function checkNumberFunc() {
        revealBtn.classList.remove('show');
        phoneNumber = inputNumber.value.trim().replace(/[- ]/g, "");
        if(validNumberPattern.test(phoneNumber)) {
            revealBtn.classList.add('show');
            isButtonAlive = true;
        }
        else {
            labelInput.innerHTML = 'Phonie<span>Identify your telecoms</span>';
            isButtonAlive = false;
        }
    }
    checkNumberFunc();
    if(/^\+/.test(phoneNumber)) {
        numberLength = 14;
    }
    else{
        numberLength = 11;
    }
    if(phoneNumber.length <= numberLength) {
        checkPhoneNum = inputNumber.value;
    }
    if(phoneNumber.length >= numberLength) {
        inputNumber.blur()
        inputNumber.value = checkPhoneNum;
        checkNumberFunc();
    }
    
    
})

revealBtn.addEventListener('click', () => {
    if(isButtonAlive) {
        phoneNumber = inputNumber.value.trim().replace(/[- ]/g, "")
        if(mtnValidPattern.test(phoneNumber)) {
            labelInput.innerHTML = '<img src="./MTN.PNG">';
        }
        else if(airtelValidPattern.test(phoneNumber)) {
            labelInput.innerHTML = '<img src="./airtel.PNG">';
        }
        else if(gloValidPattern.test(phoneNumber)) {
            labelInput.innerHTML = '<img src="./glo.PNG">';
        }
        else if(nineMobileValidPattern.test(phoneNumber)) {
            labelInput.innerHTML = '<img src="./9mobile.PNG">';
            labelInput.classList.add('green');
        }
        else if(ntelValidPattern.test(phoneNumber)) {
            labelInput.innerText = 'NTEL';
            labelInput.classList.add('green');
        }
        else if(smileValidPattern.test(phoneNumber)) {
            labelInput.innerText = 'Smile';
            labelInput.classList.add('green');
        }
        else {
            labelInput.innerText = 'Number does not match any provider. Please check the number and try again';
            labelInput.classList.add('red')
        }
        
    }
})









let myRegex = /\d/;
let testString = 'hrk2';
let testString2 = '109';
let testString3 = 'help';
// console.log(myRegex.test(testString));
// console.log(myRegex === testString);



let varString = 'baby';
let varTestString = 'baby';
let varTestString2 = 'boys';
let varRegex = new RegExp(varString, 'g');
// console.log(varRegex.test(varTestString2));

let gRegex = /^g+$/
let gTest = "g"
let multipleG = "gggggg"
// console.log(gRegex.test(gTest));




