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
    // allow ounly letters and spaces
    var RegExpression = /^[a-zA-Z]*$/;
    if (!RegExpression.test(name)) {
      flag = false;
      message +=
        " " + name + " - list name must contain ounly letters and spaces. ";
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
