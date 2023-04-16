class Restrictions {
  static listName(name) {
    let flag = true;
    let message = "";
    if (name.length < 1) {
      flag = false;
      message += " Please enter list name. ";
    }

    if (flag) {
      return true;
    } else {
      MyNavigation.nav.appendChild(CreateElement.alert(message));
      setTimeout(() => {
        MyNavigation.displayNavigation();
      }, "2000");

      return false;
    }
  }
}
