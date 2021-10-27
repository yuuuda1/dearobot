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
const topAppBarElement = document.querySelector(".mdc-top-app-bar");
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);

/* -- 2. Buttons -- */
const buttonRipple = mdc.ripple.MDCRipple.attachTo(
  document.querySelector(".mdc-button")
);

/* -- 8. Dialogs -- */
const colorDialog = mdc.dialog.MDCDialog.attachTo(
  document.querySelector(".color-dialog")
);
const helpDialog = mdc.dialog.MDCDialog.attachTo(
  document.querySelector(".help-dialog")
);
const usageDialog = mdc.dialog.MDCDialog.attachTo(
  document.querySelector(".usage-dialog")
);
colorDialog.listen("MDCDialog:opened", () => {
  // cmRed.layout();
  // cmGreen.layout();
  // cmBlue.layout();
  // cmAlpha.layout();
});
/* -- 8.1 Action to open the dialog : ダイアログを開くためのアクション -- */
const cldl = document.querySelectorAll("#color-dialog");
for (let i = 0; i < cldl.length; i++) {
  cldl[i].addEventListener("click", () => {
    colorDialog.open();
  });
}
const helpdl = document.querySelectorAll("#help-dialog");
for (let i = 0; i < helpdl.length; i++) {
  helpdl[i].addEventListener("click", () => {
    helpDialog.open();
  });
}
const usagedl = document.querySelectorAll("#usage-dialog");
for (let i = 0; i < usagedl.length; i++) {
  usagedl[i].addEventListener("click", () => {
    usageDialog.open();
    usageDialog.layout();
  });
}

/* -- 15. Selection controls: radio buttons -- */

/* -- 17. Sliders -- */
const slider = document.getElementsByClassName("mdc-slider");
for (var i = 0; i < slider.length; i++) {
  const element = mdc.slider.MDCSlider.attachTo(slider[i]);
  element.listen("MDCSlider:change", () =>
    console.log(`Value changed to ${element.value}`)
  );
}

/* -- 18. Tabs -- */
const tabBar = mdc.tabBar.MDCTabBar.attachTo(
  document.querySelector(".mdc-tab-bar")
);
tabBar.listen("MDCTABBAR:change", () =>
  console.log(`Value changed to ${tabBar.value}`)
);

/* -- 20. Text fields -- */
// const textField = new mdc.textField.MDCTextField(
//   document.querySelector(".mdc-text-field")
// );

const textField = document.getElementsByClassName("mdc-text-field");
for (var i = 0; i < textField.length; i++) {
  const element = mdc.textField.MDCTextField.attachTo(textField[i]);
  element.listen("MDCTextField:change", () => {
    console.log(element.value);
  });
}

/* -- E1. Selects -- */
const select = document.getElementsByClassName("mdc-select");
for (var i = 0; i < select.length; i++) {
  const element = mdc.select.MDCSelect.attachTo(select[i]);
  element.listen("MDCSelect:change", () => {
    // alert(
    //   'Selected option at index ${select.selectedIndex} with value "${select.value}"'
    // );
    sessionStorage.setItem("age",element.value);
  });
}