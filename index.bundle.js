/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


function Player(name, sign){
    return {name,sign};
}

let x=prompt("Enter the name of player 1");
let player1=Player(x,"x");
x=prompt("Enter the name of player 2");
let player2=Player(x,"o");
var currentTurn=0;
var div=document.querySelector("#p1-name");
div.textContent=player1.name;

div=document.querySelector("#p2-name");
div.textContent=player2.name;

div=document.querySelector("#p1-turn");
div.textContent="Your Turn";

// let player1=Player("Saurabh","x");
// let player2=Player("Zeel","o");
const Gameboard=((p1,p2)=>{
    let board=[["","",""],["","",""],["","",""]];
    let gameOver=false;
    const declareResult=(gameEnd,wonBy)=>{
        return {gameEnd,wonBy};
    };
    const checkResult=(ci,cr)=>{
        if(cr===3){
            gameOver=true;
            if("x"===p1.sign)
                return declareResult(true,0);
            if("x"===p2.sign)
                return declareResult(true,1);
        }
        if(ci===3){
            gameOver=true;
            if("o"===p1.sign)
                return declareResult(true,0);
            if("o"===p2.sign)
                return declareResult(true,1);
        }
    };
    const checkIfAnyWinner=()=>{
        let filledUp=0;
        for(let i=0;i<3;i++)
        {
            let cross=0,circle=0,none=0;
            for(let j=0;j<3;j++){
                if(board[i][j]==="")
                    none++;
                if(board[i][j]==="x"){
                    cross++;
                    filledUp++;
                }   
                if(board[i][j]==="o"){
                    circle++;
                    filledUp++;
                }
            }
            if(circle===3 || cross===3){
                return checkResult(circle,cross);
            }
        }
        for(let j=0;j<3;j++){
            let cross=0,circle=0,none=0;
            for(let i=0;i<3;i++){
                if(board[i][j]==="")
                    none++;
                if(board[i][j]==="x"){
                    cross++;
                }   
                if(board[i][j]==="o"){
                    circle++;
                }
            }
            if(circle===3 || cross===3){
                return checkResult(circle,cross);
            }
        }
        let cross=0,circle=0,none=0;
        for(let i=0;i<3;i++){
            if(board[i][i]==="")
                none++;
           if(board[i][i]==="x")
                cross++;
            if(board[i][i]==="o")
                circle++;
        }
        if(circle===3 || cross===3){
            return checkResult(circle,cross);
        }
        cross=0,circle=0,none=0;
        for(let i=0,j=2;i<3;i++,j--)
        {
            if(board[i][j]==="")
                none++;
           if(board[i][j]==="x")
                cross++;
            if(board[i][j]==="o")
                circle++;
        }
        if(circle===3 || cross===3){
            return checkResult(circle,cross);
        }
        if(filledUp===9){
            gameOver=true;
            return declareResult(true,2);
        }
            
        return declareResult(false,"");

    };
    // console.log("Saurabh");
    const addSign=(x,y,p)=>{
        board[x][y]=p.sign;
        let winner=checkIfAnyWinner();
        console.log(board);
        return winner;
    };
    return {gameOver,addSign, board};
})(player1,player2);
// console.log(Gameboard);



let playTurnEvent=(e,x,y)=>{
    let res;
    let btnId=e.target.id;
    let btn=document.querySelector("#"+btnId);
    if(currentTurn===0){
        btn.textContent="X";
        res=Gameboard.addSign(x,y,player1);
        
        div=document.querySelector("#p1-turn");
        div.textContent="";
        div=document.querySelector("#p2-turn");
        div.textContent="Your turn";
    }
    else{
        btn.textContent="O";
        res=Gameboard.addSign(x,y,player2);
        div=document.querySelector("#p2-turn");
        div.textContent="";
        div=document.querySelector("#p1-turn");
        div.textContent="Your turn";
    } 
    currentTurn=currentTurn===0 ? 1:0;
    // console.log(currentTurn);  
    btn.disabled=true;
    // target.disabled=true;
    btn.style.backgroundColor="rgb(82 82 91)";
    if(res.gameEnd===true){
        div=document.querySelector("#p2-turn");
        div.textContent="";
        div=document.querySelector("#p1-turn");
        div.textContent="";
        div=document.querySelector("#winner");
        if(res.wonBy===0)
            div.textContent=player1.name+" Won!!!";
        if(res.wonBy===1)
            div.textContent=player2.name+" Won!!!";
        if(res.wonBy===2)
            div.textContent="Match Draw";
    }
        
    
};

var btn=document.querySelector("#b1");
btn.addEventListener("click",(e)=>playTurnEvent(e,0,0));

btn=document.querySelector("#b2");
btn.addEventListener("click",(e)=>playTurnEvent(e,0,1));

btn=document.querySelector("#b3");
btn.addEventListener("click",(e)=>playTurnEvent(e,0,2));

btn=document.querySelector("#b4");
btn.addEventListener("click",(e)=>playTurnEvent(e,1,0));

btn=document.querySelector("#b5");
btn.addEventListener("click",(e)=>playTurnEvent(e,1,1));

btn=document.querySelector("#b6");
btn.addEventListener("click",(e)=>playTurnEvent(e,1,2));

btn=document.querySelector("#b7");
btn.addEventListener("click",(e)=>playTurnEvent(e,2,0));

btn=document.querySelector("#b8");
btn.addEventListener("click",(e)=>playTurnEvent(e,2,1));

btn=document.querySelector("#b9");
btn.addEventListener("click",(e)=>playTurnEvent(e,2,2));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUk7QUFDeEI7QUFDQTtBQUNBLHdCQUF3QixJQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixJQUFJO0FBQ3hCO0FBQ0Esd0JBQXdCLElBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixJQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsSUFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmZ1bmN0aW9uIFBsYXllcihuYW1lLCBzaWduKXtcbiAgICByZXR1cm4ge25hbWUsc2lnbn07XG59XG5cbmxldCB4PXByb21wdChcIkVudGVyIHRoZSBuYW1lIG9mIHBsYXllciAxXCIpO1xubGV0IHBsYXllcjE9UGxheWVyKHgsXCJ4XCIpO1xueD1wcm9tcHQoXCJFbnRlciB0aGUgbmFtZSBvZiBwbGF5ZXIgMlwiKTtcbmxldCBwbGF5ZXIyPVBsYXllcih4LFwib1wiKTtcbnZhciBjdXJyZW50VHVybj0wO1xudmFyIGRpdj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AxLW5hbWVcIik7XG5kaXYudGV4dENvbnRlbnQ9cGxheWVyMS5uYW1lO1xuXG5kaXY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMi1uYW1lXCIpO1xuZGl2LnRleHRDb250ZW50PXBsYXllcjIubmFtZTtcblxuZGl2PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDEtdHVyblwiKTtcbmRpdi50ZXh0Q29udGVudD1cIllvdXIgVHVyblwiO1xuXG4vLyBsZXQgcGxheWVyMT1QbGF5ZXIoXCJTYXVyYWJoXCIsXCJ4XCIpO1xuLy8gbGV0IHBsYXllcjI9UGxheWVyKFwiWmVlbFwiLFwib1wiKTtcbmNvbnN0IEdhbWVib2FyZD0oKHAxLHAyKT0+e1xuICAgIGxldCBib2FyZD1bW1wiXCIsXCJcIixcIlwiXSxbXCJcIixcIlwiLFwiXCJdLFtcIlwiLFwiXCIsXCJcIl1dO1xuICAgIGxldCBnYW1lT3Zlcj1mYWxzZTtcbiAgICBjb25zdCBkZWNsYXJlUmVzdWx0PShnYW1lRW5kLHdvbkJ5KT0+e1xuICAgICAgICByZXR1cm4ge2dhbWVFbmQsd29uQnl9O1xuICAgIH07XG4gICAgY29uc3QgY2hlY2tSZXN1bHQ9KGNpLGNyKT0+e1xuICAgICAgICBpZihjcj09PTMpe1xuICAgICAgICAgICAgZ2FtZU92ZXI9dHJ1ZTtcbiAgICAgICAgICAgIGlmKFwieFwiPT09cDEuc2lnbilcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyZVJlc3VsdCh0cnVlLDApO1xuICAgICAgICAgICAgaWYoXCJ4XCI9PT1wMi5zaWduKVxuICAgICAgICAgICAgICAgIHJldHVybiBkZWNsYXJlUmVzdWx0KHRydWUsMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY2k9PT0zKXtcbiAgICAgICAgICAgIGdhbWVPdmVyPXRydWU7XG4gICAgICAgICAgICBpZihcIm9cIj09PXAxLnNpZ24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmVSZXN1bHQodHJ1ZSwwKTtcbiAgICAgICAgICAgIGlmKFwib1wiPT09cDIuc2lnbilcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyZVJlc3VsdCh0cnVlLDEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjaGVja0lmQW55V2lubmVyPSgpPT57XG4gICAgICAgIGxldCBmaWxsZWRVcD0wO1xuICAgICAgICBmb3IobGV0IGk9MDtpPDM7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY3Jvc3M9MCxjaXJjbGU9MCxub25lPTA7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPDM7aisrKXtcbiAgICAgICAgICAgICAgICBpZihib2FyZFtpXVtqXT09PVwiXCIpXG4gICAgICAgICAgICAgICAgICAgIG5vbmUrKztcbiAgICAgICAgICAgICAgICBpZihib2FyZFtpXVtqXT09PVwieFwiKXtcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3MrKztcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkVXArKztcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbaV1bal09PT1cIm9cIil7XG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZSsrO1xuICAgICAgICAgICAgICAgICAgICBmaWxsZWRVcCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNpcmNsZT09PTMgfHwgY3Jvc3M9PT0zKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tSZXN1bHQoY2lyY2xlLGNyb3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGo9MDtqPDM7aisrKXtcbiAgICAgICAgICAgIGxldCBjcm9zcz0wLGNpcmNsZT0wLG5vbmU9MDtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8MztpKyspe1xuICAgICAgICAgICAgICAgIGlmKGJvYXJkW2ldW2pdPT09XCJcIilcbiAgICAgICAgICAgICAgICAgICAgbm9uZSsrO1xuICAgICAgICAgICAgICAgIGlmKGJvYXJkW2ldW2pdPT09XCJ4XCIpe1xuICAgICAgICAgICAgICAgICAgICBjcm9zcysrO1xuICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICBpZihib2FyZFtpXVtqXT09PVwib1wiKXtcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY2lyY2xlPT09MyB8fCBjcm9zcz09PTMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja1Jlc3VsdChjaXJjbGUsY3Jvc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBjcm9zcz0wLGNpcmNsZT0wLG5vbmU9MDtcbiAgICAgICAgZm9yKGxldCBpPTA7aTwzO2krKyl7XG4gICAgICAgICAgICBpZihib2FyZFtpXVtpXT09PVwiXCIpXG4gICAgICAgICAgICAgICAgbm9uZSsrO1xuICAgICAgICAgICBpZihib2FyZFtpXVtpXT09PVwieFwiKVxuICAgICAgICAgICAgICAgIGNyb3NzKys7XG4gICAgICAgICAgICBpZihib2FyZFtpXVtpXT09PVwib1wiKVxuICAgICAgICAgICAgICAgIGNpcmNsZSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNpcmNsZT09PTMgfHwgY3Jvc3M9PT0zKXtcbiAgICAgICAgICAgIHJldHVybiBjaGVja1Jlc3VsdChjaXJjbGUsY3Jvc3MpO1xuICAgICAgICB9XG4gICAgICAgIGNyb3NzPTAsY2lyY2xlPTAsbm9uZT0wO1xuICAgICAgICBmb3IobGV0IGk9MCxqPTI7aTwzO2krKyxqLS0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGJvYXJkW2ldW2pdPT09XCJcIilcbiAgICAgICAgICAgICAgICBub25lKys7XG4gICAgICAgICAgIGlmKGJvYXJkW2ldW2pdPT09XCJ4XCIpXG4gICAgICAgICAgICAgICAgY3Jvc3MrKztcbiAgICAgICAgICAgIGlmKGJvYXJkW2ldW2pdPT09XCJvXCIpXG4gICAgICAgICAgICAgICAgY2lyY2xlKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY2lyY2xlPT09MyB8fCBjcm9zcz09PTMpe1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrUmVzdWx0KGNpcmNsZSxjcm9zcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZmlsbGVkVXA9PT05KXtcbiAgICAgICAgICAgIGdhbWVPdmVyPXRydWU7XG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyZVJlc3VsdCh0cnVlLDIpO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRlY2xhcmVSZXN1bHQoZmFsc2UsXCJcIik7XG5cbiAgICB9O1xuICAgIC8vIGNvbnNvbGUubG9nKFwiU2F1cmFiaFwiKTtcbiAgICBjb25zdCBhZGRTaWduPSh4LHkscCk9PntcbiAgICAgICAgYm9hcmRbeF1beV09cC5zaWduO1xuICAgICAgICBsZXQgd2lubmVyPWNoZWNrSWZBbnlXaW5uZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9hcmQpO1xuICAgICAgICByZXR1cm4gd2lubmVyO1xuICAgIH07XG4gICAgcmV0dXJuIHtnYW1lT3ZlcixhZGRTaWduLCBib2FyZH07XG59KShwbGF5ZXIxLHBsYXllcjIpO1xuLy8gY29uc29sZS5sb2coR2FtZWJvYXJkKTtcblxuXG5cbmxldCBwbGF5VHVybkV2ZW50PShlLHgseSk9PntcbiAgICBsZXQgcmVzO1xuICAgIGxldCBidG5JZD1lLnRhcmdldC5pZDtcbiAgICBsZXQgYnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrYnRuSWQpO1xuICAgIGlmKGN1cnJlbnRUdXJuPT09MCl7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudD1cIlhcIjtcbiAgICAgICAgcmVzPUdhbWVib2FyZC5hZGRTaWduKHgseSxwbGF5ZXIxKTtcbiAgICAgICAgXG4gICAgICAgIGRpdj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AxLXR1cm5cIik7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudD1cIlwiO1xuICAgICAgICBkaXY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMi10dXJuXCIpO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQ9XCJZb3VyIHR1cm5cIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYnRuLnRleHRDb250ZW50PVwiT1wiO1xuICAgICAgICByZXM9R2FtZWJvYXJkLmFkZFNpZ24oeCx5LHBsYXllcjIpO1xuICAgICAgICBkaXY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMi10dXJuXCIpO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQ9XCJcIjtcbiAgICAgICAgZGl2PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDEtdHVyblwiKTtcbiAgICAgICAgZGl2LnRleHRDb250ZW50PVwiWW91ciB0dXJuXCI7XG4gICAgfSBcbiAgICBjdXJyZW50VHVybj1jdXJyZW50VHVybj09PTAgPyAxOjA7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFR1cm4pOyAgXG4gICAgYnRuLmRpc2FibGVkPXRydWU7XG4gICAgLy8gdGFyZ2V0LmRpc2FibGVkPXRydWU7XG4gICAgYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInJnYig4MiA4MiA5MSlcIjtcbiAgICBpZihyZXMuZ2FtZUVuZD09PXRydWUpe1xuICAgICAgICBkaXY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMi10dXJuXCIpO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQ9XCJcIjtcbiAgICAgICAgZGl2PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDEtdHVyblwiKTtcbiAgICAgICAgZGl2LnRleHRDb250ZW50PVwiXCI7XG4gICAgICAgIGRpdj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbm5lclwiKTtcbiAgICAgICAgaWYocmVzLndvbkJ5PT09MClcbiAgICAgICAgICAgIGRpdi50ZXh0Q29udGVudD1wbGF5ZXIxLm5hbWUrXCIgV29uISEhXCI7XG4gICAgICAgIGlmKHJlcy53b25CeT09PTEpXG4gICAgICAgICAgICBkaXYudGV4dENvbnRlbnQ9cGxheWVyMi5uYW1lK1wiIFdvbiEhIVwiO1xuICAgICAgICBpZihyZXMud29uQnk9PT0yKVxuICAgICAgICAgICAgZGl2LnRleHRDb250ZW50PVwiTWF0Y2ggRHJhd1wiO1xuICAgIH1cbiAgICAgICAgXG4gICAgXG59O1xuXG52YXIgYnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYjFcIik7XG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT5wbGF5VHVybkV2ZW50KGUsMCwwKSk7XG5cbmJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2IyXCIpO1xuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+cGxheVR1cm5FdmVudChlLDAsMSkpO1xuXG5idG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiM1wiKTtcbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PnBsYXlUdXJuRXZlbnQoZSwwLDIpKTtcblxuYnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYjRcIik7XG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT5wbGF5VHVybkV2ZW50KGUsMSwwKSk7XG5cbmJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2I1XCIpO1xuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+cGxheVR1cm5FdmVudChlLDEsMSkpO1xuXG5idG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiNlwiKTtcbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PnBsYXlUdXJuRXZlbnQoZSwxLDIpKTtcblxuYnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYjdcIik7XG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT5wbGF5VHVybkV2ZW50KGUsMiwwKSk7XG5cbmJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2I4XCIpO1xuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+cGxheVR1cm5FdmVudChlLDIsMSkpO1xuXG5idG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiOVwiKTtcbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PnBsYXlUdXJuRXZlbnQoZSwyLDIpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==