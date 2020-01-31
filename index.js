// Your code here
let dodger = document.getElementById('dodger');

function moveDodgerLeft(){
  let LeftNumbers = dodger.style.left.replace('px','');
  let left = parseInt(LeftNumbers, 10);
  
  if(left > 0){
    dodger.style.left = `${left-1}px`;
  }
}
