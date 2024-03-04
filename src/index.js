

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
