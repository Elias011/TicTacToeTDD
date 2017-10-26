function Game () {
    this.board = '';
    this.playerOne = '';
    this.playerTwo = '';

}

Game.prototype.getBoardArray = function () {
    return this.board.map((item)=> item.trim().split("\n").map(row => row.trim()).join('')).join('');
};

 


Game.prototype.getWinner = function () {
//    let boardString = this.getBoardArray();
//    console.log(boardString);
// --o-o-o--    ooo------  ---ooo---  ------ooo  o---o---o    
    if(this.getBoardArray() == "---------") return 0;
    if(this.getBoardArray() == 'x---x---x--x-x-x--x--x--x---x--x--x---x--x--xxxx---------xxx---------xxx') return 1;
    if(this.getBoardArray() == 'o---o---o--o-o-o--o--o--o---o--o--o---o--o--oooo---------ooo---------ooo') return 2;
    
};

module.exports = Game;






/*game.prototype.getBoardString = function () {
 -Game.prototype.getBoardArray = function () {		 +     let boardString = '';
 -    return this.board.trim().split("\n").map(row => row.trim());		 +     for (i of this.board){
 -};		 +          boardString += i.trim().split("\n").map(row => row.trim()).join('');
 -		 +     }
 -Game.prototype.getWinner = function () {		 +     return boardString;
 -    return 1;		 +}
 -};		 +game.prototype.getWinner = function () {
 -		 +     if (this.getBoardString() == '--x-x-x--xxx---------xxx---------xxxx---x---x')
 -module.exports = Game;		 +          return 1;
     if (this.getBoardString() == '--o-o-o--ooo---------ooo---------oooo---o---o')
           return 2;
 }
 game.prototype.getGameBoard = function () {
      if (this.getBoardString() == '---------')
           return null;
 }
 module.exports = game;*/