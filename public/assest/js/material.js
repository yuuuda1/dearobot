/* 
*** Material Design Components ***
1. App Bars: top
2. Buttons
3. Buttons: floating action button
4. Buttons: icon button
5. Cards
6. Chips
7. Data tabels
8. Dialogs
9. Image list
10. Lists
11. Menus
12. Navigaton drawer
13. Progress indicators
14. Selection controls: checkboxes
15. Selection controls: radio buttons
16. Selection controls: switches
17. Sliders
18. Snackbars
19. Tabs
20. Text fields
E1. Selects
*/

/* -- 1. App Bars: top -- */
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);

/* -- 17. Sliders -- */
const slider = document.getElementsByClassName('mdc-slider');
for (var i = 0; i < slider.length; i++) {
  const element = mdc.slider.MDCSlider.attachTo(slider[i]);
  element.listen('MDCSlider:change', () => console.log(`Value changed to ${element.value}`));
}

// - Face -
// const facePosition = mdc.slider.MDCSlider.attachTo(document.querySelector('.face-position'));
// // - Eye - 
// const eyeSize = mdc.slider.MDCSlider.attachTo(document.querySelector('.eye-size'));
// // const eyeSize = mdc.slider.MDCSlider.attachTo(document.querySelector('.mdc-slider'));
// const eyePosition = mdc.slider.MDCSlider.attachTo(document.querySelector('.eye-position'));
// const eyeDistance = mdc.slider.MDCSlider.attachTo(document.querySelector('.eye-distance'));
// // - Mouse -
// const mouseSize = mdc.slider.MDCSlider.attachTo(document.querySelector('.mouse-size'));
// const mousePosition = mdc.slider.MDCSlider.attachTo(document.querySelector('.mouse-position'));
// const mouseHeight = mdc.slider.MDCSlider.attachTo(document.querySelector('.mouse-height'));
// // - Body -
// const bodyHeihgt = mdc.slider.MDCSlider.attachTo(document.querySelector('.body-height'));
// const bodyWidth = mdc.slider.MDCSlider.attachTo(document.querySelector('.body-width'));

/* -- 18. Tabs -- */
const tabBar = mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));
tabBar.listen('MDCTABBAR:change', () => console.log(`Value changed to ${tabBar.value}`));