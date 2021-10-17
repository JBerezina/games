var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    //check that character doesn't have already class animate
    if(character.classList != "animate"){
        character.classList.add("animate");
    }

   //to remove class when character jumped
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);

}

    //to detect if character lost
    var checkDead = setInterval(function(){
        //to check top position of the character (50x20)
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        //when it jumps top is 100px, when don't jump is 150px

        //we check left position of  block, it 20x20, 
        //
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

        if (blockLeft < 20 && blockLeft > 0 && characterTop >=150 ){
            block.style.animation ="none";
            block.style.display = "none"; 
            alert("u lose");
        }

    }, 10);

