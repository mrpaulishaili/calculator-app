# Calculator App

## Screenshots

### Desktop Demo

![Desktop Demo](https://github.com/mrpaulishaili/calculator-app/blob/main/dist/public/media/desktop-view.jpg)

### Mobile Demo

![Mobile Demo](https://github.com/mrpaulishaili/calculator-app/blob/main/dist/public/media/mobile-view.jpg)

### Working Illustration

![Working Illustration](https://github.com/mrpaulishaili/calculator-app/blob/main/dist/public/media/Illustration-calculator-app.gif)

## What I Learnt?

1. **Grid Template area:**
   In implementing this project, I am able to undrstand the grid template areas in CSS, This is used for the layout arrangement of the items in the calculator.

2. **Regex:**
   In this lesson, I discovered the power of Regex.

   ```js
   const regex = /(^[*/=])|(\s)/g;
   equation.replace(regex, '');
   ```

3. **The eval() method:** I never realized this exists in JavaScript up until when I implemetned this method. This particularly was a big eye-opener for me. Code sample:

   ```js
   return (currentValueElem.value = eval(equation));
   ```

## Language stack used for development

- JavaScript
- HTML
- SCSS compiled to CSS
- Workbox
- Service Workers to function offline.

## Adjustments made from [original project](https://www.youtube.com/watch?v=XyVIi6BipR8)

- CSS is compiled from SCSS and not written directly as a CSS file. This saved time and increased understanding how SCSS compiles. My configuration setup for livesass as seen:

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

- **Delete button** returns **0** to be displayed if it is the last item deleted.

- If initial value is 0 the **delete button** does not need to run.

> The above code is the workspace setup settings for live sass compiler in vscode

## My Drawbacks

- It took me a while to really understand the purpose for implementing the `newNumberFlag`; I got to understand it later on.

## Added Functionalities

- [] Delete button on screen returns 0 as value if last item is deleted
- [] Calculator slowly support for computer keyboard inputs:
  - [x] Esc key clear all calcuations and returns display value to zero
- [] Sidebar Features:
  - [x] Standard
  - [] Measurement
  - [] Currency
  - [] Binary
  - [] Hexadecimal

## Future update on functionalities

- [ ] To allow the esc key to clear all items
- [x] Slow transition effet DOMContentLoaded.
- [ ] To recieve input & command from computer keyboard
- [ ] Implement welcome / splash screen and close app feature.
- [ ] Add comma number formatter to number values on display
- [x] Add box-shadow to give reality feel
- [ ] Microinteraction to indicate button is pressed.
- [x] Make calculator installable as web-app on devices.

## Links

Codebase Repo: [GitHub](https://github.com/mrpaulishaili/calculator-app)

Live URL: [GitHub Pages](https://mrpaulishaili.github.io/calculator-app/dist/)

## Acknowledgement

Thanks to Dave Gray for an impressive follow through.

## Valuable Resources

How to Build a Calculator with Vanilla Javascript | Dave Gray [Link here](https://www.youtube.com/watch?v=XyVIi6BipR8)
