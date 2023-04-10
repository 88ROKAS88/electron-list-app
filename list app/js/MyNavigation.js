class MyNavigation {
  static nav = document.getElementById("mla-nav-buttons");

  // ############################## LOAD NAVIGATION DATA ##############################
  static loadNavigation() {
    return MyFiles.loadJson("lists/nav/nav.json");
  }

  // ############################## SAVE NAVIGATION DATA ##############################
  static saveNavigation(data) {
    MyFiles.saveJson(data, "lists/nav/nav.json");
  }

  // ############################## DISPLAY NAVIGATION MENU BUTTON ##############################
  static displayNavigationMenuButton() {
    const button = CreateElement.button(
      "MENU",
      [{ name: "mla-name", value: "mla-navigation-menu" }],
      ["btn", "btn-success"]
    );
    MyNavigation.nav.appendChild(button);
  }

  // ############################## DISPLAY NAVIGATION ##############################
  static displayNavigation() {
    const data = MyNavigation.loadNavigation();
    MyNavigation.nav.innerHTML = "";
    for (const element of data) {
      const buttonAttributes = [{ name: "mla-name", value: element["name"] }];
      const buttonClasses = ["btn", "btn-primary", "me-1", "mb-1"];
      const button = CreateElement.button(
        element["name"],
        buttonAttributes,
        buttonClasses
      );
      MyNavigation.nav.appendChild(button);
    }
    MyNavigation.displayNavigationMenuButton();
  }

  // ############################## CREATE NEW LIST ##############################
  static addNewList() {
    // DIV
    const div = document.createElement("div");
    div.classList.add("input-group");
    div.classList.add("mt-1");
    // BUTTON
    const button = CreateElement.button(
      "New list",
      [{ name: "id", value: "mla-add-ul" }],
      ["btn", "btn-outline-secondary"]
    );
    div.appendChild(button);

    // INPUT
    const input = CreateElement.input();
    input.setAttribute("id", "mla-l-input");
    div.appendChild(input);

    // DIV
    MyList.display.appendChild(div);
  }

  // ############################## DELETE LIST ##############################
  static deleteList() {
    const header3 = document.createElement("h3");
    header3.innerText = "Delete list";
    header3.classList.add("my-2");
    MyList.display.appendChild(header3);

    const data = MyNavigation.loadNavigation();
    data.forEach((element, index) => {
      // BUTTON
      const button = CreateElement.button(
        element["name"],
        [{ name: "mla-index", value: index }],
        ["btn", "btn-danger", "me-1", "mb-1"]
      );
      MyList.display.appendChild(button);
    });
  }

  // ############################## DISPLAY NAVIGATION MENU ##############################
  static displayNavigationMenu() {
    MyList.display.innerHTML = "";
    MyNavigation.addNewList();
    MyNavigation.deleteList();
  }
}
