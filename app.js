var drought = document.getElementById("Drought")
var boat = document.getElementById("Boat")
var flood = document.getElementById("Flood")
var id;
var pickingsText = document.getElementById("pickings")
var scoreText = document.getElementById("score")
var tie = 0;
var win = 0;
var lose = 0;

drought.addEventListener("click", droughtReg);
boat.addEventListener("click", boatReg);
flood.addEventListener("click", floodReg);

function dBF(id) {
    var cpuRandomPick = Math.floor((Math.random() * 10));
    var cpuPick = 0;
    if (cpuRandomPick <= 4) {
        cpuPick = 1;
    }
    if (cpuRandomPick >= 4 && cpuRandomPick <= 7) {
        cpuPick = 2;
    }
    if (cpuRandomPick >= 7) {
        cpuPick = 3;
    }
    if (id == 1) {
        switch (cpuPick) {
            case 1:
                pickingsText.innerHTML = "You picked: drought     Mother Nature Picked: drought";
                score("tied");
                break;
            case 2:
                pickingsText.innerHTML = "You picked: drought     Mother Nature Picked: boat";
                score("won");
                break;
            case 3:
                pickingsText.innerHTML = "You picked: drought     Mother Nature Picked: flood";
                score("lost");
                break;
            default:
                alert("An error has occured at cpuPick (drought), trying refreshing the page.");
        }
    }
    if (id == 2) {
        switch (cpuPick) {
            case 1:
                pickingsText.innerHTML = "You picked: boat     Mother Nature Picked: drought";
                score("lost");
                break;
            case 2:
                pickingsText.innerHTML = "You picked: boat     Mother Nature Picked: boat";
                score("tied");
                break;
            case 3:
                pickingsText.innerHTML = "You picked: boat     Mother Nature Picked: flood";
                score("won");
                break;
            default:
                alert("An error has occured at cpuPick (boat), trying refreshing the page.");
        }
    }
    if (id == 3) {
        switch (cpuPick) {
            case 1:
                pickingsText.innerHTML = "You picked: flood     Mother Nature Picked: drought";
                score("won");
                break;
            case 2:
                pickingsText.innerHTML = "You picked: flood     Mother Nature Picked: boat";
                score("lost");
                break;
            case 3:
                pickingsText.innerHTML = "You picked: flood     Mother Nature Picked: flood";
                score("tied");
                break;
            default:
                alert("An error has occured at cpuPick (flood), trying refreshing the page.");
        }
    }
}
// added a regulator because function agruments can not be added to event listeners: function(agrument)
function droughtReg () {
    console.log("drought clicked");
    var react = dBF(1);
}
function boatReg () {
    console.log("boat clicked");
    var react = dBF(2);
}
function floodReg () {
    console.log("flood clicked");
    var react = dBF(3);
}
function score (scoreType) {
    switch (scoreType) {
        case "tied":
            tie += 1;
            break;
        case "lost":
            lose += 1;
            break;
        case "won":
            win += 1;
            break;
        default:
            alert("An error has occured at scoreT, trying refreshing the page.");
    }
    scoreText.innerHTML = "You won: " + win + " You lost: " + lose + " You tied: " + tie;
}