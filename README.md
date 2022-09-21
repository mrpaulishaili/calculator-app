# Calculator App

## Screenshots

Desktop Demo
![Desktop Demo]()

Mobile Demo
![Mobile Demo]()

Working Illustration
![Working Illustration]()

## What Learnt

1. Grid Template area
   In coding this lesson, I was able to undrstand the implementation of grid template areas, as this is used in arange the items of the calculator.

2. Regex
   In this lesson, I have discovered a powerful new feature, Regex.

   ```js
   const regex = /(^[*/=])|(\s)/g;
   equation.replace(regex, '');
   ```

3. The eval() method. I never realized that this existed in javascript, until coding this project. This particularly is a big eye-opener.

   ```js
   return (currentValueElem.value = eval(equation));
   ```

## Language stack used for development

- JavaScript
- HTML
- SCSS compiled to CSS

## Tiny adjustments made from original project

- CSS is compiled from SCSS and not written directly as a CSS file. This saved time and increases strength in understanding how SCSS compiling works and setting up the code extension for the output directory.

- Delete button returns 0 to be displayed if it is the last item deleted.

- If initial value is 0 the delete button does not need to run.

```json
{
  "liveSassCompile.settings.formats": [
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "/dist/public/css",
      "savePathReplacementPairs": null
    }
  ]
}
```

> The above code is the workspace setup settings for live sass compiler in scode

## Drawbacks

- It took me a while to really understand the purpose for implementing the newNumberFlag; I finnaly got to fully understanding it. Thanks to DveGray for an impressive follow through.

## Future expectation and functionalities

- To allow the esc key to clear all items

- To recieve inout & command from computer keyboard

- Implement welcome / splash screen and close app feature.

## Links

Codebase: [GitHub](htps://github.com/)
Live: [GitHub Pages](htps://github.com/)
