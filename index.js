// Your code here
let dodger = document.getElementById('dodger');

function moveDodgerLeft(){
  let LeftNumbers = dodger.style.left.replace('px','');
  let left = parseInt(LeftNumbers, 10);
  
  if(left > 0){
    dodger.style.left = `${left-1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if(e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight(){
  let RightNumbers = dodger.style.right.replace("px","");
  let right = parseInt(RightNumbers, 10);
  
  if (right < 0){
    dodger.style.right = `${right+1}px`;
  }
}

document.addEventListener("keydown", function(e){
  if (e.key === "ArrowRight"){
    moveDodgerRight();
  }
});