class CreateElement {
  // ############################## ATRIBUTES / CLASSES ##############################
  static addAtributes(element, atributes) {
    for (const i of atributes) {
      element.setAttribute(i["name"], i["value"]);
    }
  }
  static addClasses(element, classes) {
    for (const i of classes) {
      element.classList.add(i);
    }
  }

  // ############################## LIST ##############################
  static list(data, listName) {
    const uList = document.createElement("div");
    uList.classList.add("list-group");

    data.forEach((element, index) => {
      const lItem = document.createElement("button");
      lItem.innerText = element;
      const attributes = [
        { name: "type", value: "button" },
        { name: "mla-li-index", value: index },
        { name: "mla-name", value: listName },
      ];
      CreateElement.addAtributes(lItem, attributes);
      CreateElement.addClasses(lItem, [
        "list-group-item",
        "list-group-item-action",
      ]);
      uList.appendChild(lItem);
    });
    return uList;
  }
  // ############################## BUTTON ##############################
  static button(text, attributes, classes) {
    const button = document.createElement("button");
    button.innerText = text;
    button.setAttribute("type", "button");
    CreateElement.addAtributes(button, attributes);
    CreateElement.addClasses(button, classes);
    return button;
  }
}
