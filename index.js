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
let mtnValidPattern = /^(\+234|0){1}(803|806|703|706|813|816|810|814|903|906|913|916|7025|7026|704){1}(\d{6}|\d{7})$/;
let airtelValidPattern = /^(\+234|0){1}(802|808|708|812|701|902|901|904|907|912){1}(\d{6}|\d{7})$/;
let nineMobileValidPattern = /^(\+234|0){1}(809|818|817|909|908){1}(\d{6}|\d{7})$/;
let gloValidPattern = /^(\+234|0){1}(805|807|705|815|811|905|915){1}(\d{6}|\d{7})$/;
let ntelValidPattern = /^(\+234|0){1}(804){1}(\d{6}|\d{7})$/;
let smileValidPattern = /^(\+234|0){1}(702){1}(\d{6}|\d{7})$/;
//also make sure that the rest are digits so that it does not
//contain letters.
//I'm looking to group each option of a particular
//network inside brackets[]so that they all can be 
//options
//I also want '+234' or '0' to be options to start with.
revealBtn.addEventListener('click', () => {
    let numberLength = 0;
    phoneNumber = inputNumber.value.trim().replace(/[- ]/g, "");
    if(/^\+/.test(phoneNumber)) {
        numberLength = 14;
    }
    else{
        numberLength = 11;
    }
    if(phoneNumber === "") {
        provider.innerText = 'Please input a number';
        provider.classList.add('black');
        labelInput.innerHTML = 'Phonie<span>Identify your telecoms</span>';
    }
    else if(phoneNumber.length < numberLength) {
        labelInput.innerHTML = 'Phonie<span>Identify your telecoms</span>';
        provider.innerText = 'Number is not long enough';
        provider.classList.remove('green');
    }
    else if(phoneNumber.length > numberLength ) {
        labelInput.innerHTML = 'Phonie<span>Identify your telecoms</span>';
        provider.innerText = 'Number is too long';
        provider.classList.remove('green');

    }
    else {
        if(mtnValidPattern.test(phoneNumber)) {
            labelInput.innerHTML = '<img src="./MTN.PNG">';
            provider.innerText = '';

        }
        else if(airtelValidPattern.test(phoneNumber)) {
            labelInput.innerHTML = '<img src="./airtel.PNG">';
            provider.innerText = '';
        }
        else if(gloValidPattern.test(phoneNumber)) {
            labelInput.innerHTML = '<img src="./glo.PNG">';
            provider.innerText = '';
        }
        else if(nineMobileValidPattern.test(phoneNumber)) {
            labelInput.innerHTML = '<img src="./9mobile.PNG">';
            provider.classList.add('green');
            provider.innerText = '';
        }
        else if(ntelValidPattern.test(phoneNumber)) {
            provider.innerText = 'NTEL';
            provider.classList.add('green');
        }
        else if(smileValidPattern.test(phoneNumber)) {
            provider.innerText = 'Smile';
            provider.classList.add('green');
        }
        else {
            console.log('Number does not match any network provider.Please check the number and try again')
            provider.innerText = 'Number does not match any network provider. Please check the number and try again.';
            provider.classList.remove('green');
            labelInput.innerHTML = 'Phonie<span>Identify your telecoms</span>';
        }
    }
})

let mtnValidPattern0;


let myRegex = /\d/;
let testString = 'hrk2';
let testString2 = '109';
let testString3 = 'help';
console.log(myRegex.test(testString));


let varString = 'baby';
let varTestString = 'baby';
let varTestString2 = 'boys';
let varRegex = new RegExp(varString, 'g');
// console.log(varRegex.test(varTestString2));

let gRegex = /^g+$/
let gTest = "g"
let multipleG = "gggggg"
// console.log(gRegex.test(gTest));




