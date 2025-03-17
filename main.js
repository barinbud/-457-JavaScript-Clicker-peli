let cookieCount = 0;
let clickValue = 1;
let clickUpgradeCost = 600;
let clickUpgradeLevel = 1;
let globalMultiplier = 1;
let resetThreshold = 1000000000;
let eventInterval = 300000; 


let pointsPerSec = 0;


let gadgetPower = 1;
let gadgetCost = 30;
let gadgetUpgradeCost = 1200;

let fieldPower = 5;
let fieldCost = 150;
let fieldUpgradeCost = 3000;

let operatorPower = 25;
let operatorCost = 800;
let operatorUpgradeCost = 6000;

let devicePower = 100;
let deviceCost = 6000;
let deviceUpgradeCost = 12000;

let labPower = 250;
let labCost = 60000;
let labUpgradeCost = 90000;

let darkPower = 10000;
let darkCost = 2000000;
let darkUpgradeCost = 15000000;

console.log(eventInterval);
setInterval(triggerRandomEvent, eventInterval);


function cookieClick() {
  clickValue = Math.round(clickUpgradeLevel * 2 - 1 + (globalMultiplier * 0.2));
  cookieCount += clickValue;
  document.getElementById("cookieCountDisplay").innerText = cookieCount;
}


function upgradeGenerator(type) {
  if (type === 1 && cookieCount >= gadgetUpgradeCost) {
    gadgetPower += 2;
    cookieCount -= gadgetUpgradeCost;
    gadgetUpgradeCost = Math.round(gadgetUpgradeCost * (1.5 / globalMultiplier) + 1);
    document.getElementById("gadgetUpgradeCostDisplay").innerText = gadgetUpgradeCost;
  }
  if (type === 2 && cookieCount >= fieldUpgradeCost) {
    fieldPower += 5;
    cookieCount -= fieldUpgradeCost;
    fieldUpgradeCost = Math.round(fieldUpgradeCost * (1.5 / globalMultiplier) + 1);
    document.getElementById("fieldUpgradeCostDisplay").innerText = fieldUpgradeCost;
  }
  if (type === 3 && cookieCount >= operatorUpgradeCost) {
    operatorPower += 25;
    cookieCount -= operatorUpgradeCost;
    operatorUpgradeCost = Math.round(operatorUpgradeCost * (1.5 / globalMultiplier) + 1);
    document.getElementById("operatorUpgradeCostDisplay").innerText = operatorUpgradeCost;
  }
  if (type === 4 && cookieCount >= deviceUpgradeCost) {
    devicePower += 100;
    cookieCount -= deviceUpgradeCost;
    deviceUpgradeCost = Math.round(deviceUpgradeCost * (1.5 / globalMultiplier) + 1);
    document.getElementById("deviceUpgradeCostDisplay").innerText = deviceUpgradeCost;
  }
  if (type === 5 && cookieCount >= labUpgradeCost) {
    labPower += 250;
    cookieCount -= labUpgradeCost;
    labUpgradeCost = Math.round(labUpgradeCost * (1.5 / globalMultiplier) + 1);
    document.getElementById("labUpgradeCostDisplay").innerText = labUpgradeCost;
  }
  if (type === 6 && cookieCount >= darkUpgradeCost) {
    darkPower += 10000;
    cookieCount -= darkUpgradeCost;
    darkUpgradeCost = Math.round(darkUpgradeCost * (1.5 / globalMultiplier) + 1);
    document.getElementById("darkUpgradeCostDisplay").innerText = darkUpgradeCost;
  }
}


function upgradeClickPower() {
  if (cookieCount >= clickUpgradeCost) {
    cookieCount -= clickUpgradeCost;
    clickUpgradeLevel++;
    clickUpgradeCost = Math.round(40 * (1 + 0.2 * clickUpgradeLevel) * (1.3 ** clickUpgradeLevel) * (2 ** Math.max(0, clickUpgradeLevel - 3) / globalMultiplier) + 600);
    document.getElementById("clickUpgradeCostDisplay").innerText = clickUpgradeCost;
  }
}


function purchaseGenerator(item) {
  if (item === 1) {
    if (cookieCount >= gadgetCost) {
      cookieCount -= gadgetCost;
      gadgetCost = Math.round(30 + gadgetCost * 1.001 ** Math.log(gadgetCost * 1.1 / globalMultiplier));
      setInterval(gadgetUse, 1000);
      document.getElementById("gadgetCostDisplay").innerHTML = `Cost: ${gadgetCost}`;
    }
  }
  if (item === 2) {
    if (cookieCount >= fieldCost) {
      cookieCount -= fieldCost;
      fieldCost = Math.round(150 + fieldCost * 1.003 ** Math.log(fieldCost * 1.01 / globalMultiplier));
      setInterval(fieldUse, 1000);
      document.getElementById("fieldCostDisplay").innerHTML = `Cost: ${fieldCost}`;
    }
  }
  if (item === 3) {
    if (cookieCount >= operatorCost) {
      cookieCount -= operatorCost;
      operatorCost = Math.round(250 + operatorCost * 1.004 ** Math.log(operatorCost * 1.1 / globalMultiplier));
      setInterval(operatorUse, 1000);
      document.getElementById("operatorCostDisplay").innerHTML = `Cost: ${operatorCost}`;
    }
  }
  if (item === 4) {
    if (cookieCount >= deviceCost) {
      cookieCount -= deviceCost;
      deviceCost = Math.round(6000 + deviceCost * 1.003 ** Math.log(deviceCost * 1.1 / globalMultiplier));
      setInterval(deviceUse, 1000);
      document.getElementById("deviceCostDisplay").innerHTML = `Cost: ${deviceCost}`;
    }
  }
  if (item === 5) {
    if (cookieCount >= labCost) {
      cookieCount -= labCost;
      labCost = Math.round(60000 + labCost * 1.002 ** Math.log(labCost * 1.1 / globalMultiplier));
      setInterval(labUse, 1000);
      document.getElementById("labCostDisplay").innerHTML = `Cost: ${labCost}`;
    }
  }
  if (item === 6) {
    if (cookieCount >= darkCost) {
      cookieCount -= darkCost;
      darkCost = Math.round(60000 + darkCost * 1.001 ** Math.log(darkCost * 1.1 / globalMultiplier));
      setInterval(darkUse, 1000);
      document.getElementById("darkCostDisplay").innerHTML = `Cost: ${darkCost}`;
    }
  }
}



function gadgetUse() {
  cookieCount += gadgetPower;
  document.getElementById("cookieCountDisplay").innerText = cookieCount;
}

function fieldUse() {
  cookieCount += fieldPower;
  document.getElementById("cookieCountDisplay").innerText = cookieCount;
}

function operatorUse() {
  cookieCount += operatorPower;
  document.getElementById("cookieCountDisplay").innerText = cookieCount;
}

function deviceUse() {
  cookieCount += devicePower;
  document.getElementById("cookieCountDisplay").innerText = cookieCount;
}

function labUse() {
  cookieCount += labPower;
  document.getElementById("cookieCountDisplay").innerText = cookieCount;
}

function darkUse() {
  cookieCount += darkPower;
  document.getElementById("cookieCountDisplay").innerText = cookieCount;
}


function resetGame() {
  if (cookieCount >= 1000000000) {
    cookieCount = 0;
    clickValue = 1;
    clickUpgradeLevel = 1;
    pointsPerSec = 0;
    gadgetPower = 1;
    gadgetCost = 30;
    gadgetUpgradeCost = 1200;
    fieldPower = 5;
    fieldCost = 150;
    fieldUpgradeCost = 3000;
    operatorPower = 25;
    operatorCost = 800;
    operatorUpgradeCost = 6000;
    devicePower = 100;
    deviceCost = 6000;
    deviceUpgradeCost = 12000;
    labPower = 250;
    labCost = 60000;
    labUpgradeCost = 90000;
    darkPower = 10000;
    darkCost = 2000000;
    darkUpgradeCost = 15000000;
    document.getElementById("cookieCountDisplay").innerText = cookieCount;
    document.getElementById("gadgetCostDisplay").innerHTML = `Cost: ${gadgetCost}`;
    document.getElementById("fieldCostDisplay").innerHTML = `Cost: ${fieldCost}`;
    document.getElementById("operatorCostDisplay").innerHTML = `Cost: ${operatorCost}`;
    document.getElementById("deviceCostDisplay").innerHTML = `Cost: ${deviceCost}`;
    document.getElementById("labCostDisplay").innerHTML = `Cost: ${labCost}`;
    document.getElementById("darkCostDisplay").innerHTML = `Cost: ${darkCost}`;
    document.getElementById("gadgetUpgradeCostDisplay").innerText = gadgetUpgradeCost;
    document.getElementById("fieldUpgradeCostDisplay").innerText = fieldUpgradeCost;
    document.getElementById("operatorUpgradeCostDisplay").innerText = operatorUpgradeCost;
    document.getElementById("deviceUpgradeCostDisplay").innerText = deviceUpgradeCost;
    document.getElementById("labUpgradeCostDisplay").innerText = labUpgradeCost;
    document.getElementById("darkUpgradeCostDisplay").innerText = darkUpgradeCost;
    
    globalMultiplier++;
    resetThreshold = Math.round(resetThreshold * (globalMultiplier * 1.5));
  }
}


setInterval(updateDisplay, 100);

function updateDisplay() {
  cookieCount = Math.round(cookieCount);
  document.getElementById("cookieCountDisplay").innerText = cookieCount;
  document.getElementById("gadgetPowerDisplay").innerHTML = `+${gadgetPower} P/s`;
  document.getElementById("fieldPowerDisplay").innerHTML = `+${fieldPower} P/s`;
  document.getElementById("operatorPowerDisplay").innerHTML = `+${operatorPower} P/s`;
  document.getElementById("devicePowerDisplay").innerHTML = `+${devicePower} P/s`;
  document.getElementById("labPowerDisplay").innerHTML = `+${labPower} P/s`;
  document.getElementById("darkPowerDisplay").innerHTML = `+${darkPower} P/s`;
  if (cookieCount >= 1000000000) {
    document.getElementById("resetButton").innerText = "Reset Now?";
  }
}



