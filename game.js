
let game = {
    board :['','','','','','','','',''],
    player : 'X',
  
    swapRound(){
      this.player = (this.player == 'X') ? 'O' : 'X';
    },
  
    play(index){
      if(!this.board[index]){
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
      let winner = '';
      //check lines
      for (let i = 0; i<3 ; i ++){
        if ((this.board[0+i*3] == this.board[1+i*3]) && (this.board[1+i*3] == this.board[2+i*3])){
          return this.board[1+i*3];
        }
      }
      //check columns
      for (let j = 0; j<3 ; j ++){
        if ((this.board[j+0*3] == this.board[j+1*3]) && (this.board[j+1*3] == this.board[j+2*3])){
          return this.board[j+0*3];
        }
      }
      //check diagonal 
      if ((this.board[0] == this.board[4]) && (this.board[4] == this.board[8]))
        return this.board[0];
      if ((this.board[2] == this.board[4]) && (this.board[4] == this.board[6]))
        return this.board[0];
      
      //check if it is draw game  
      let cpt = 0;
      for (let index = 0; index < this.board.length; index++) {
        if( !this.board[index]){
          cpt++;
        }
      }
      if (cpt == this.board.length )
        return 'N'; // N for a draw game
      return '';
    }
  }


export { game};
