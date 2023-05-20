import { game } from './game.js';

function createTictactowGrid(){
  let innerHTML  = '';
  let board = game.board;
  for (let index = 0; index < 9; index++) {
    innerHTML = innerHTML + '<div id= "box-'+index+'" class="box"'+ 'onclick=onPlay('+ index+') ' +'> '+ 
                '<p class="box-contant">'+board[index]+'</p>'+
                '</div>';
  }
  let element = document.getElementById('tic-tac-tow-grid');
  element.innerHTML = innerHTML;
}


createTictactowGrid();


function onPlay(index){
  let currentPlayer = game.player;
  
  if(game.play(index)){
    let element = document.getElementById('box-'+index);
    element.innerHTML = '<p class="box-contant-'+currentPlayer +'">'+ game.getBoardOIndex(index)+'</p>';
  }


  console.log("hello " + game.isFinished()   +" mdr");
}