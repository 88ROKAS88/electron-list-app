class Restrictions {
  static listName(name) {
    let flag = true;
    let message = "";
    // check if field is filled
    if (name.length < 1) {
      flag = false;
      message += " Please enter list name. ";
    }
    // check if list name already exist
    const data = MyNavigation.loadNavigation();
    for (const element of data) {
      if (name.toLowerCase() == element["name"].toLowerCase()) {
        flag = false;
        message += " " + name + " - list name is already taken. ";
      }
    }

    if (flag) {
      return true;
    } else {
      MyNavigation.nav.appendChild(CreateElement.alert(message));
      setTimeout(() => {
        MyNavigation.displayNavigation();
      }, "3000");

      return false;
    }
  }
}
