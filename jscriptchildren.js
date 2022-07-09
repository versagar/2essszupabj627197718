countOne= 0;
countTwo= 0;
vcounterOne= String('');
vcounterTwo= String('');

function incrfirst(){
    countOne= countOne+ 1;
    vcounterOne= vcounterOne+ String('🍎');
    document.getElementById('firstNum').innerHTML= countOne;
    document.getElementById('vcountOne').innerHTML= vcounterOne;
}

function decrfirst(){
    countOne= countOne- 1;
    vcounterOne= vcounterOne.replace('🍎','');
    document.getElementById('firstNum').innerHTML= countOne;
    document.getElementById('vcountOne').innerHTML= vcounterOne;
}

function incrsecond(){
    countTwo= countTwo+ 1;
    vcounterTwo= vcounterTwo+ String('🍓');
    document.getElementById('secondNum').innerHTML= countTwo;
    document.getElementById('vcountTwo').innerHTML= vcounterTwo;
}

function decrsecond(){
    countTwo= countTwo- 1;
    vcounterTwo= vcounterTwo.replace('🍓','');
    document.getElementById('secondNum').innerHTML= countTwo;
    document.getElementById('vcountTwo').innerHTML= vcounterTwo;
}

function getsum(){
    sum = countOne+ countTwo;
    vsum= vcounterOne+ vcounterTwo;
    document.getElementById('sumNum').innerHTML= sum;
    document.getElementById('vSum').innerHTML= vsum;
}