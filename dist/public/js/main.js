const initApp = () => {
  // Query select DOM elements
  const currentValueElem = document.querySelector('.currentvalue'),
    previousValueElem = document.querySelector('.previousvalue'),
    inputButtons = document.querySelectorAll('.number'),
    clearButtons = document.querySelectorAll('.clear, .clearEntry');

  /*    
        Set variables

  */
  let ItemArray = [];
  const equationArray = [];
  let newNumberFlag = false;

  /* 
        Functions
    
  */
  const clearFunction = (event) => {
    currentValueElem.value = 0;
    if (event.target.classList.contains('clear')) {
      previousValueElem.textContent = '';
      ItemArray = [];
    }
  };

  /* 
        Event Listeners
    
  */

  /*  Click Event Listeners: VALUE INPUT BUTTONS*/

  inputButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // Get button textContent on click, then save to constant variable:  newInput
      const newInput = event.target.textContent;

      //   If newInput is a number,
      if (newNumberFlag) {
        // Set value displayed on calculator to newInput,
        currentValueElem.value = newInput;

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

  /*  Click Event Listeners: VALUES CLEAR BUTTONS */

  clearButtons.forEach((button) => {
    button.addEventListener('click', clearFunction);
  });
};

document.addEventListener('DOMContentLoaded', initApp);

// TODO: Convert JS to TS for Typechecking after all funcionalities are successfully implemented
