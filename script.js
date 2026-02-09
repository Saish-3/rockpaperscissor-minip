let userscore = 0;
let compscore = 0;
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const resetBtn = document.querySelector("#reset-btn");



const gencompchoice = () => {
    const options =["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() *3);
    return options[randidx];

};
const drawgame =() => {
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "orange";

}
const showwinner = (userwin, userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `Yo Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compscore++;
        compscorepara.innerText = compscore;    
        msg.innerText = `You lose ${compchoice} beats your  ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("User choice is:", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice is:", compchoice);
    if (userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false:true; 
        } else if(userchoice ==="paper"){
            userwin = compchoice ==="scissors"? false : true;
        } else{
            userwin = compchoice === "rock"? false : true;
        }
        showwinner(userwin, userchoice, compchoice);

    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        console.log("choice was clicked");
        playgame(choiceId);


    });
});
const resetGame = () => {
    userscore = 0;
    compscore = 0;
    userscorepara.innerText = 0;
    compscorepara.innerText = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31"; 
};
resetBtn.addEventListener("click", resetGame);