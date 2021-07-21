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
19. Switch
20. Tabs
21. Text fields
E1. Selects
*/

/* -- 1. App Bars: top -- */
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);

/* -- 8. Dialogs -- */
const colorDialog = mdc.dialog.MDCDialog.attachTo(document.querySelector('.color-dialog'));
colorDialog.listen('MDCDialog:opened', () => {
});
/* -- 8.1 Action to open the dialog : ダイアログを開くためのアクション -- */
const elmA = document.querySelectorAll('#color-dialog');
for (let i = 0; i < elmA.length; i++) {
  elmA[i].addEventListener('click', () => {
    // console.log("hoge");
    colorDialog.open();
  });
}

/* -- 17. Sliders -- */
const slider = document.getElementsByClassName('mdc-slider');
for (var i = 0; i < slider.length; i++) {
  const element = mdc.slider.MDCSlider.attachTo(slider[i]);
  element.listen('MDCSlider:change', () => console.log(`Value changed to ${element.value}`));
}

// - Face - 
// const facePos = mdc.slider.MDCSlider.attachTo(document.querySelector('.face-pos'));
// // - Eye - 
// const eyeSize = mdc.slider.MDCSlider.attachTo(document.querySelector('.eye-size'));
// const eyePosition = mdc.slider.MDCSlider.attachTo(document.querySelector('.eye-pos'));
// const eyeDistance = mdc.slider.MDCSlider.attachTo(document.querySelector('.eye-dis'));
// // - Mouse - 
// const mouseSize = mdc.slider.MDCSlider.attachTo(document.querySelector('.mouse-size'));
// const mousePosition = mdc.slider.MDCSlider.attachTo(document.querySelector('.mouse-pos'));
// const mouseHeight = mdc.slider.MDCSlider.attachTo(document.querySelector('.mouse-h'));
// // - Body - 
// const bodyHeihgt = mdc.slider.MDCSlider.attachTo(document.querySelector('.body-height'));
// const bodyWidth = mdc.slider.MDCSlider.attachTo(document.querySelector('.body-width'));

/* -- 18. Tabs -- */
const tabBar = mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));
tabBar.listen('MDCTABBAR:change', () => console.log(`Value changed to ${tabBar.value}`));

/* -- 19. Switch -- */
[].slice.call(document.querySelectorAll('.mdc-switch')).forEach(
  function (ele) {
    mdc.switchControl.MDCSwitch.attachTo(ele);
  }
);
// const switchArray = document.getElementsByClassName('mdc-switch');
// for (var i = 0; i < switchControl.length; i++) {
//   const element = mdc.switchControl.MDCSwitch.attachTo(switchArray[i]);
// }
// const switchControl = mdc.switch.MDCSwitch.attachTo(document.querySelector('.mdc-switch'));