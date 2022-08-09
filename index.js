for(var i =0; i < document.querySelectorAll(".drum").length; i++){

//for button
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
//furtherAnimation(buttonInnerHTML)
});
}

//for key
//'event' tells which key was pressed
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
  //furtherAnimation(event.key)
});

function makeSound(keyless){

  switch (keyless) {
    case "w":
    var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

      case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

        case "s":
        var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;

          case "d":
          var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
              tom2.play();
              break;

              case "k":
              var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

                case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                  tom4.play();
                  break;
    default:console.log(buttonInnerHTML);

  }


}

function buttonAnimation(currentKey){
var activeButton = document.querySelector("." + currentKey).classList.add("pressed");

setTimeout(function(){
  activeButton = document.querySelector("." + currentKey).classList.remove("pressed");
},180);
}



/*function furtherAnimation(myfurther){
  myActiveButton = document.querySelector("." + myfurther).classList.add("active");

  setTimeout(function(){
    myActiveButton = document.querySelector("." + myfurther).classList.remove("active");
  },180);

}*/
