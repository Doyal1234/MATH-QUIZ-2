player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
document.getElementById("player_q").innerHTML="Question Turn:  "+player1_name;
document.getElementById("player_a").innerHTML="Answer Turn:  "+player2_name;