class MyList {
  static currentList;
  static display = document.getElementById("mla-list-display");
  // static data = [{ name: "pagrindinis" }];

  static loadList(listName) {
    const path = `lists/${listName}.json`;
    if (!fs.existsSync(path)) {
      const data = [];
      this.saveList(data, listName);
    }
    return MyFiles.loadJson(`lists/${listName}.json`);
  }

  static saveList(data, listName) {
    MyFiles.saveJson(data, `lists/${listName}.json`);
  }

  static appendToList(listName) {
    // DIV
    const div = document.createElement("div");
    div.classList.add("input-group");
    div.classList.add("mt-1");
    // BUTTON
    const button = document.createElement("button");
    button.innerText = "Append";
    button.setAttribute("type", "button");
    button.setAttribute("id", "mla-add-li");
    button.setAttribute("mla-add-li", listName);
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
    this.display.appendChild(div);
  }

  static displayList(listName) {
    this.currentList = listName;
    const data = this.loadList(listName);

    this.display.innerHTML = "";

    const uList = document.createElement("div");
    uList.classList.add("list-group");

    // for (const element of data) {
    //   console.log(element);
    data.forEach((element, index) => {
      const lItem = document.createElement("button");
      lItem.innerText = element;
      lItem.setAttribute("type", "button");
      lItem.setAttribute("mla-li-index", index);
      lItem.setAttribute("mla-name", listName);
      lItem.classList.add("list-group-item");
      lItem.classList.add("list-group-item-action");
      //   lItem.classList.add("btn-primary");
      uList.appendChild(lItem);
    });

    this.display.appendChild(uList);
    this.appendToList(listName);
  }

  static displayListItem(listName, listIndex) {
    this.display.innerHTML = "";
    // DIV
    const div = document.createElement("div");
    div.classList.add("input-group");
    div.classList.add("mt-1");
    // BUTTON SAVE
    const button = document.createElement("button");
    button.innerText = "Save";
    button.setAttribute("type", "button");
    button.setAttribute("id", "mla-save-li");
    button.setAttribute("mla-add-li", listName);
    button.setAttribute("mla-li-index", listIndex);
    button.classList.add("btn");
    button.classList.add("btn-outline-success");
    div.appendChild(button);

    // INPUT
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add("form-control");
    input.value = this.loadList(listName)[listIndex];
    input.setAttribute("id", "mla-l-input");
    div.appendChild(input);
    // BUTTON DELETE
    const button2 = document.createElement("button");
    button2.innerText = "Delete";
    button2.setAttribute("type", "button");
    button2.setAttribute("id", "mla-delete-li");
    button2.setAttribute("mla-add-li", listName);
    button2.setAttribute("mla-li-index", listIndex);
    button2.classList.add("btn");
    button2.classList.add("btn-outline-danger");
    div.appendChild(button2);

    // DIV
    this.display.appendChild(div);
  }
}
