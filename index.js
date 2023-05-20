
let game = {
  board :['','','','','','','','',''],
  player : 'X',

  swapRound(){
    this.player = (this.player == 'X') ? 'O' : 'X';
  },

  play(index){
    if(!this.board[index] && ! this.isFinished()){
      this.board[index] = this.player;
      this.swapRound();
      return true;
    }
    return false;
  },

  getBoardOIndex(index){
    return this.board[index];
  },

  isFinished(){
    //check lines
    for (let i = 0; i<3 ; i ++){
      if ( this.board[0+i*3] && (this.board[0+i*3] == this.board[1+i*3]) && (this.board[1+i*3] == this.board[2+i*3])){
        return {
                player: this.board[0+i*3],
                combine : [0+i*3,1+i*3,2+i*3]};
      }
    }
    //check columns
    for (let j = 0; j<3 ; j ++){
      if ( this.board[j+0*3] && (this.board[j+0*3] == this.board[j+1*3]) && (this.board[j+1*3] == this.board[j+2*3])){
        return {
          player: this.board[j+0*3],
          combine : [j+0*3,j+1*3,j+2*3]};
      }
    }
    //check diagonal 
    if (this.board[0] &&   (this.board[0] == this.board[4]) && (this.board[4] == this.board[8]))
      return {
        player: this.board[0],
        combine : [0,4,8]};
    if ( this.board[2] && (this.board[2] == this.board[4]) && (this.board[4] == this.board[6]))
      return {
        player: this.board[2],
        combine : [2,4,6]};
    
    //check if it is draw game  
    let cpt = 0;
    for (let index = 0; index < this.board.length; index++) {
      if( this.board[index]){
        cpt++;
      }
    }
    if (cpt == this.board.length )
      return { player: ''};
    return '';
  }
}


function createTictactowGrid(){
  let innerHTML  = '';
  let board = game.board;
  for (let index = 0; index < 9; index++){
    innerHTML = innerHTML + '<div id= "box-'+index+'" class="box box_hover"'+ 'onclick=onPlay('+ index+') ' +'> '+ 
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
    element.classList.remove("box_hover");
    element.innerHTML = '<p class="box-contant-'+currentPlayer +'">'+ game.getBoardOIndex(index)+'</p>';
  }

  let result = game.isFinished();
  console.log(typeof(result))

  if (typeof(result) == 'object'){
   result.combine.forEach(e => {
      let element = document.getElementById('box-'+e);
      element.classList.add("box-"+result.player);
    });
  }

}
