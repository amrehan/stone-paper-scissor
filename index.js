var randomnumber = Math.floor(Math.random() * 3 + 1);

if (randomnumber == 1) {
    document.querySelector(".img2").setAttribute("src", "images/stone.png");
    document.querySelector("#computer").innerHTML = "Stone";
}

else if (randomnumber == 2) {
    document.querySelector(".img2").setAttribute("src", "images/paper.png");
    document.querySelector("#computer").innerHTML = "Paper";
}

else if (randomnumber == 3) {
    document.querySelector(".img2").setAttribute("src", "images/scissors.png");
    document.querySelector("#computer").innerHTML = "Scissor";
}

// playing game now, checking conditions

// if player chose stone

if (document.querySelector("title").innerText == 'Stone' && randomnumber == 1 ){
    document.querySelector("h2").innerText = "DRAW";
}

else if (document.querySelector("title").innerText == 'Stone' && randomnumber == 2 ){
    document.querySelector("h2").innerText = "You LOSE";
}

else if (document.querySelector("title").innerText == 'Stone' && randomnumber == 3 ){
    document.querySelector("h2").innerText = "You Win";
}

// if player chose paper

else if (document.querySelector("title").innerText == 'Paper' && randomnumber == 1 ){
    document.querySelector("h2").innerText = "You Win";
}

else if (document.querySelector("title").innerText == 'Paper' && randomnumber == 2 ){
    document.querySelector("h2").innerText = "DRAW";
}

else if (document.querySelector("title").innerText == 'Paper' && randomnumber == 3 ){
    document.querySelector("h2").innerText = "You LOSE";
}


// if player chose scissors

else if (document.querySelector("title").innerText == 'Scissor' && randomnumber == 1 ){
    document.querySelector("h2").innerText = "You LOSE";
}

else if (document.querySelector("title").innerText == 'Scissor' && randomnumber == 2 ){
    document.querySelector("h2").innerText = "You Win";
}

else if (document.querySelector("title").innerText == 'Scissor' && randomnumber == 3 ){
    document.querySelector("h2").innerText = "DRAW";
}
