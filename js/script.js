// ====================================
// STARTPAGE VERIABLE
// ====================================
let startpage = document.querySelector('.startpage')
let startheadtag = document.querySelector('.startheadtag')
let startinput = document.querySelector('.startinput')
let startbtn = document.querySelector('.startbtn')

// ====================================
// STARTPAGE ERROR
// ====================================
let starterror = document.querySelector('.starterror')

// ====================================
// PLAYERONE VERIABLE
// ====================================
let playerone = document.querySelector('.playerone')
let playeroneheadtag = document.querySelector('.playeroneheadtag')
let playeroneinput = document.querySelector('.playeroneinput')
let playeronebtn = document.querySelector('.playeronebtn')

// ====================================
// PLAYERONE ERROR
// ====================================
let playeroneerror = document.querySelector('.playeroneerror')

// ====================================
// PLAYERTWO VERIABLE
// ====================================
let playertwo = document.querySelector('.playertwo')
let playertwoheadtagone = document.querySelector('.playertwoheadtagone')
let playertwoinput = document.querySelector('.playertwoinput')
let playertwobtn = document.querySelector('.playertwobtn')

let chances = document.querySelector('.chances');
let chance = 5;

// ====================================
// GAMEOVER VERIABLE
// ====================================
let gameover = document.querySelector('.gameover')
let win = document.querySelector('.win')
let gameoverheadtag = document.querySelector('.gameoverheadtag')

// ====================================
// STARTPAGE VERIABLE Diye Method
// ====================================
startbtn.addEventListener('click', function(){
    console.log(startinput.value);

    if(startinput.value == ''){
        starterror.innerHTML = 'Please Input Your Name';
        starterror.style.display = 'block';
    }else{
        playerone.style.display = 'block';
        startpage.style.display = 'none';
        playeroneheadtag.innerHTML = startinput.value;
    }
})
playeronebtn.addEventListener('click', function(){
    if(playeroneinput.value<1 || playeroneinput.value>10){
        playeroneerror.innerHTML = 'Please Give a Numeric Number 1 to 10';
        playeroneerror.style.display = 'block';
    }else{
        if(playeroneinput.value - 20){
            playertwo.style.display = 'block';
            playerone.style.display = 'none';
            chances.innerHTML = chance;
        }else{
            playeroneerror.innerHTML = 'Please Give a Numeric Number 1 to 10';
            playeroneerror.style.display = 'block';
        }
    }
})
playertwobtn.addEventListener('click', function(){
    if(playeroneinput.value == playertwoinput.value){
        playertwo.style.display = 'none'
        gameover.style.display = 'block'
        win.innerHTML = 'Player Two Win'
    }else{
        chance--
        chances.innerHTML = chance
        if(chance == 0){
            playertwo.style.display = 'none';
            gameover.style.display = 'block'
            win.innerHTML = 'Player One Win'
        }
    }
})



