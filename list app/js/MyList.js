class MyList {
  // static currentList;
  static display = document.getElementById("mla-list-display");
  // static data = [{ name: "pagrindinis" }];

  // ############################## LOAD LIST DATA ##############################
  static loadList(listName) {
    const path = `lists/${listName}.json`;
    if (!fs.existsSync(path)) {
      const data = [];
      MyList.saveList(data, listName);
    }
    return MyFiles.loadJson(`lists/${listName}.json`);
  }

  // ############################## SAVE LIST DATA ##############################
  static saveList(data, listName) {
    MyFiles.saveJson(data, `lists/${listName}.json`);
  }

  // ############################## DISPLAY APPEND TO LIST (dispaly list child) ##############################
  static appendToList(listName) {
    // DIV
    const div = document.createElement("div");
    div.classList.add("input-group");
    div.classList.add("mt-1");
    // BUTTON
    const buttonAttributes = [
      { name: "id", value: "mla-add-li" },
      { name: "mla-add-li", value: listName },
    ];
    const button = CreateElement.button("Append", buttonAttributes, [
      "btn",
      "btn-outline-secondary",
    ]);
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

  // ############################## DISPLAY LIST ##############################
  static displayList(listName) {
    // this.currentList = listName;
    const data = MyList.loadList(listName);

    MyList.display.innerHTML = "";

    const uList = CreateElement.list(data, listName);

    MyList.display.appendChild(uList);
    MyList.appendToList(listName);
  }

  // ############################## DISPLAY LIST ITEM ##############################
  static displayListItem(listName, listIndex) {
    MyList.display.innerHTML = "";
    // DIV
    const div = document.createElement("div");
    div.classList.add("input-group");
    div.classList.add("mt-1");
    // BUTTON SAVE
    const saveButtonAttributes = [
      { name: "id", value: "mla-save-li" },
      { name: "mla-add-li", value: listName },
      { name: "mla-li-index", value: listIndex },
    ];
    const button = CreateElement.button("Save", saveButtonAttributes, [
      "btn",
      "btn-outline-success",
    ]);
    div.appendChild(button);

    // INPUT
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add("form-control");
    input.value = MyList.loadList(listName)[listIndex];
    input.setAttribute("id", "mla-l-input");
    div.appendChild(input);
    // BUTTON DELETE
    const deleteButtonAttributes = [
      { name: "id", value: "mla-delete-li" },
      { name: "mla-add-li", value: listName },
      { name: "mla-li-index", value: listIndex },
    ];
    const button2 = CreateElement.button("Delete", deleteButtonAttributes, [
      "btn",
      "btn-outline-danger",
    ]);
    div.appendChild(button2);

    // DIV
    MyList.display.appendChild(div);
  }
}
