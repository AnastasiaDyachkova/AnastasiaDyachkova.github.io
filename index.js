function main () {
    const panelsElements = document.querySelector('.wrapper');
    

    const redCounter = document.querySelector('.red');
    const greenCounter = document.querySelector('.green');
    const blueCounter = document.querySelector('.blue');

  let redCount = 0;
  let greenCount = 0;
  let blueCount = 0;

    redCounter.addEventListener('click', (e)=>{
      redCount++;
      document.querySelector('.red').innerHTML = redCount;
      document.querySelector('.red-counter').innerHTML = redCount;
    });

    greenCounter.addEventListener('click', (e)=>{
      greenCount++;
      document.querySelector('.green').innerHTML = greenCount;
      document.querySelector('.green-counter').innerHTML = greenCount;
    });

    blueCounter.addEventListener('click', (e)=>{
      blueCount++;
      document.querySelector('.blue').innerHTML = blueCount;
      document.querySelector('.blue-counter').innerHTML = blueCount;
    });
    
}

window.onload = main;
