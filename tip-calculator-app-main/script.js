let    billNum = document.querySelector('#bill').value;
let    peopleNum= document.querySelector('#inp-people').value;
let    fivePer= document.querySelector('#fiveper');
let    tenPer= document.querySelector('#tenper');
let    fifteenPer= document.querySelector('#fifteenper');
let    twentyfivePer= document.querySelector('#twentyfiveper');
let    fiftyPer= document.querySelector('#fiftyper');
let    custom= document.querySelector('#custom').value;
let    resultTip=  document.querySelector('.resulttip');
let    resultTotal= document.querySelector('.resulttotal');
let    resetBtn = document.querySelector('.reset-btn');

// 5%      
function fivePercen(){
   let   billNum = document.querySelector('#bill').value;
   let   peopleNum = document.querySelector('#inp-people').value;

   resultTip = ((billNum * 5)/100) /peopleNum;
   resultTotal = (billNum/peopleNum)+resultTip;

   document.querySelector('.resulttip').innerHTML = resultTip.toFixed(2);
   document.querySelector('.resulttotal').textContent = resultTotal.toFixed(2);



}

// 10%
function tenPercen(){
   let   billNum = document.querySelector('#bill').value;
   let   peopleNum = document.querySelector('#inp-people').value;

   resultTip = ((billNum * 10)/100) /peopleNum;
   resultTotal = (billNum/peopleNum)+resultTip;

   document.querySelector('.resulttip').innerHTML = resultTip.toFixed(2);
   document.querySelector('.resulttotal').textContent = resultTotal.toFixed(2);

}

// 15%
function fifteenPercen(){
   let   billNum = document.querySelector('#bill').value;
   let   peopleNum = document.querySelector('#inp-people').value;

   resultTip = ((billNum * 15)/100) /peopleNum;
   resultTotal = (billNum/peopleNum)+resultTip;

   document.querySelector('.resulttip').innerHTML = resultTip.toFixed(2);
   document.querySelector('.resulttotal').textContent = resultTotal.toFixed(2);

}

// 25%
function twentyfivePercen(){
   let   billNum = document.querySelector('#bill').value;
   let   peopleNum = document.querySelector('#inp-people').value;

   resultTip = ((billNum * 25)/100) /peopleNum;
   resultTotal = (billNum/peopleNum)+resultTip;

   document.querySelector('.resulttip').innerHTML = resultTip.toFixed(2);
   document.querySelector('.resulttotal').textContent = resultTotal.toFixed(2);

}

// 50%
function fiftyPercen(){
   let   billNum = document.querySelector('#bill').value;
   let   peopleNum = document.querySelector('#inp-people').value;

   resultTip = ((billNum * 50)/100) /peopleNum;
   resultTotal = (billNum/peopleNum)+resultTip;

   document.querySelector('.resulttip').innerHTML = resultTip.toFixed(2);
   document.querySelector('.resulttotal').textContent = resultTotal.toFixed(2);

}

// custom      
function customPercen(){
   let   billNum = document.querySelector('#bill').value;
   let   peopleNum = document.querySelector('#inp-people').value;
   let   custom = document.querySelector('#custom').value;

   resultTip = ((billNum * custom)/100) /peopleNum;
   resultTotal = (billNum/peopleNum)+resultTip;

   document.querySelector('.resulttip').textContent = resultTip.toFixed(2);
   document.querySelector('.resulttotal').textContent = resultTotal.toFixed(2);


}    

//Reset button
function reset(){

   billNum= '';
   peopleNum= '';
   custom= '';
   resultTip= '$0.00';
   resultTotal = '$0.00';

   document.querySelector('#bill').value = billNum;
   document.querySelector('#inp-people').value = peopleNum;
   document.querySelector('#custom').value = custom;
   document.querySelector('.resulttip').innerHTML = resultTip;
   document.querySelector('.resulttotal').innerHTML = resultTotal;

}


