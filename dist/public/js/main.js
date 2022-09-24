import { nFormatter } from "./numberFormatter.js";

const initApp = () => {
  /*  
        Query select DOM elements

  */
  const container = document.querySelector(".container"),
    currentValueElem = document.querySelector(".currentvalue"),
    previousValueElem = document.querySelector(".previousvalue"),
    inputButtons = document.querySelectorAll(".number"),
    clearButtons = document.querySelectorAll(".clear, .clearEntry"),
    deleteButton = document.querySelector(".delete"),
    signChangeButton = document.querySelector(".signChange"),
    operatorButtons = document.querySelectorAll(".operator"),
    equalsButton = document.querySelector(".equals");

  /*    
        Set variables

  */
  let itemArray = [];
  const equationArray = [];
  let newNumberFlag = false;

  /* 
        Functions
    
  */
  const clearFunction = (event) => {
    currentValueElem.value = 0;
    if (event.target.classList.contains("clear")) {
      previousValueElem.textContent = "";
      itemArray = [];
    }
  };

  const deleteFunction = () => {
    if (currentValueElem.value == 0) return;
    if (currentValueElem.value.length === 1)
      return (currentValueElem.value = 0);
    currentValueElem.value = currentValueElem.value.slice(0, -1);
  };

  const signChangeFunction = () => {
    currentValueElem.value = parseFloat(currentValueElem.value) * -1;
  };

  /*  
        Click Event Listeners: INPUT BUTTONS
  */
  inputButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Get button textContent on click, then save to constant variable:  newInput
      const newInput = event.target.textContent;

      //   If newInput is a number,
      if (newNumberFlag) {
        // Set value displayed on calculator to newInput,
        currentValueElem.value = newInput;
        newNumberFlag = false;

        // else,
      } else {
        // Check if
        currentValueElem.value =
          // value displayed on calulator is 0
          currentValueElem.value == 0
            ? //   if true, set value displayed on calculator to newInput,
              newInput
            : //   else set value displayed on calculator to concat old inputs with newInput.
              `${currentValueElem.value}${newInput}`;
      }
    });
  });

  /*  
        Click Event Listeners: CLEAR BUTTONS 
  */
  clearButtons.forEach((button) => {
    button.addEventListener("click", clearFunction);
  });

  /*  
         Click Event Listeners: DELETE BUTTON 
  */
  deleteButton.addEventListener("click", deleteFunction);

  /*  
         Click Event Listeners: SignChange BUTTON 
  */
  signChangeButton.addEventListener("click", signChangeFunction);

  /*  
         Click Event Listeners: OPERATOR BUTTONS
  */
  operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (event) => {
      // equal sign showing
      if (newNumberFlag) {
        previousValueElem.textContent = "";
        itemArray = [];
      }

      const newOperator = event.target.textContent;
      const currentVal = currentValueElem.value;

      //   need number first
      if (!itemArray.length && currentVal == 0) return;

      //   begin new equation
      if (!itemArray.length) {
        itemArray.push(currentVal, newOperator);
        previousValueElem.textContent = `
        ${currentVal}
        ${newOperator}`;

        return (newNumberFlag = true);
      }

      //   complete an equation
      if (itemArray.length) {
        itemArray.push(currentVal); // 3rd elem

        const equationObj = {
          num1: parseFloat(itemArray[0]),
          num2: parseFloat(currentVal),
          op: itemArray[1],
        };

        equationArray.push(equationObj);
        const equationString = `
         ${equationObj["num1"]}
         ${equationObj["op"]}
         ${equationObj["num2"]}
        `;

        const newValue = calculate(equationString, currentValueElem);

        previousValueElem.textContent = `${newValue} ${newOperator}`;

        // start new equation
        itemArray = [newValue, newOperator];
        newNumberFlag = true;

        console.log(equationArray);
      }
    });
  });

  /*  
         Click Event Listeners: EQUALS BUTTON
  */
  equalsButton.addEventListener("click", () => {
    const currentVal = currentValueElem.value;
    let equationObj;

    // pressing equals repeatedly
    if (!itemArray.length && equationArray.length) {
      const lastEquation = equationArray[equationArray.length - 1];
      equationObj = {
        num1: parseFloat(currentVal),
        num2: lastEquation.num2,
        op: lastEquation.op,
      };
    } else if (!itemArray.length) {
      return currentVal;
    } else {
      itemArray.push(currentVal);
      equationObj = {
        num1: parseFloat(itemArray[0]),
        num2: parseFloat(currentVal),
        op: itemArray[1],
      };
    }

    equationArray.push(equationObj);

    const equationString = `${equationObj["num1"]} ${equationObj["op"]} ${equationObj["num2"]}`;

    calculate(equationString, currentValueElem);

    previousValueElem.textContent = `${equationString} = `;

    newNumberFlag = true;

    itemArray = [];

    console.log(equationArray);

    nFormatter.format(currentValueElem.value);
  });

  setTimeout(() => {
    container.classList.add("on");
  }, 100);

  // SIDEBAR TOGGLE

  const openSideBarBtn = document.querySelector(".open-sidebar"),
    closeSideBarBtn = document.querySelector(".close-sidebar"),
    sideBar = document.querySelector(".sidebar"),
    toggleSideBar = () => {
      sideBar.classList.toggle("active");

      // if (!sideBar.classList.contains("active")) {
      //   document.removeEventListener("click", toggleSideBar);
      // } else {
      //   document.addEventListener("click", toggleSideBar);
      //   console.log(container);
      // }
    };

  openSideBarBtn.addEventListener("click", toggleSideBar);
  closeSideBarBtn.addEventListener("click", toggleSideBar);

  const sideBarButtons = sideBar.querySelectorAll("li");

  for (const button of sideBarButtons) {
    button.onclick = toggleSideBar;
  }

  console.log(sideBar);
};

document.addEventListener("DOMContentLoaded", initApp);

const calculate = (equation, currentValueElem) => {
  const regex = /(^[*/=])|(\s)/g;
  equation.replace(regex, "");

  const divByZero = /(\/0)/.test(equation);

  if (divByZero) return (currentValueElem.value = 0);

  return (currentValueElem.value = eval(equation));
};

// TODO: Convert JS to TS for Typechecking after all funcionalities are successfully implemented
