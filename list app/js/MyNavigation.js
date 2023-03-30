class MyNavigation {
  static nav = document.getElementById("mla-nav-buttons");
  static data = [{ name: "pagrindinis" }];

  static loadNavigation() {
    return MyFiles.loadJson("lists/nav/nav.json");
  }

  static displayNavigationMenuButton() {
    const button = document.createElement("button");
    button.innerText = "MENU";
    button.setAttribute("type", "button");
    button.setAttribute("mla-name", "mla-navigation-menu");
    button.classList.add("btn");
    button.classList.add("btn-success");
    this.nav.appendChild(button);
  }

  static displayNavigation() {
    const data = this.loadNavigation();
    this.nav.innerHTML = "";
    for (const element of data) {
      //   console.log(element["name"]);

      const button = document.createElement("button");
      button.innerText = element["name"];
      button.setAttribute("type", "button");
      button.setAttribute("mla-name", element["name"]);
      button.classList.add("btn");
      button.classList.add("btn-primary");
      button.classList.add("me-1");
      button.classList.add("mb-1");
      this.nav.appendChild(button);
    }
    this.displayNavigationMenuButton();
  }

  static saveNavigation(data) {
    MyFiles.saveJson(data, "lists/nav/nav.json");
  }

  static addNewList() {
    // DIV
    const div = document.createElement("div");
    div.classList.add("input-group");
    div.classList.add("mt-1");
    // BUTTON
    const button = document.createElement("button");
    button.innerText = "New list";
    button.setAttribute("type", "button");
    button.setAttribute("id", "mla-add-ul");
    button.classList.add("btn");
    button.classList.add("btn-outline-secondary");
    div.appendChild(button);

    // INPUT
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add("form-control");
    input.setAttribute("id", "mla-l-input");
    div.appendChild(input);

    // DIV
    MyList.display.appendChild(div);
  }

  static deleteList() {
    const header3 = document.createElement("h3");
    header3.innerText = "Delete list";
    header3.classList.add("my-2");
    MyList.display.appendChild(header3);

    const data = this.loadNavigation();
    data.forEach((element, index) => {
      //   console.log(element["name"]);

      const button = document.createElement("button");
      button.innerText = element["name"];
      button.setAttribute("type", "button");
      button.setAttribute("mla-index", index);
      button.classList.add("btn");
      button.classList.add("btn-danger");
      button.classList.add("me-1");
      button.classList.add("mb-1");
      MyList.display.appendChild(button);
    });
  }

  static displayNavigationMenu() {
    MyList.display.innerHTML = "";
    this.addNewList();
    this.deleteList();
  }
}
