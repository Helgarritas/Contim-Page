const removeXNav = (buttonList,barraNav) => {
    if (buttonList && barraNav) {
      if (buttonList.classList.contains('moveBtnlist') || barraNav.classList.contains('transform__barraNav')) {
        buttonList.classList.remove('moveBtnlist');
        barraNav.classList.remove('transform__barraNav');
      }
    }
};

export default removeXNav;