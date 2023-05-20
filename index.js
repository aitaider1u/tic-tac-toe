function createTictactowGrid(){
  let innerHTML  = '';
  for (let index = 0; index < 9; index++) {
    innerHTML = innerHTML + '<div class="box">'+
                  '<p class="box-contant"></p>'+
                '</div>';
  }
  let element = document.getElementById('tic-tac-tow-grid');
  element.innerHTML = innerHTML;
}


createTictactowGrid();
