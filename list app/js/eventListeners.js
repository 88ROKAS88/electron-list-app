// #### NAVIGATION ####
MyNavigation.nav.addEventListener("click", (e) => {
  // display navigation menu
  if (
    e.target.type == "button" &&
    e.target.getAttribute("mla-name") == "mla-navigation-menu"
  ) {
    MyNavigation.displayNavigationMenu();
    // display list
  } else if (e.target.type == "button") {
    // console.log(e.target.getAttribute("mla-name"));
    MyList.displayList(e.target.getAttribute("mla-name"));
  }
});

MyList.display.addEventListener("click", (e) => {
  // identify - create new list button
  if (
    e.target.getAttribute("id") == "mla-add-ul" &&
    document.getElementById("mla-l-input").value != ""
  ) {
    let inputValue = document.getElementById("mla-l-input").value;

    // load list from file
    const data = MyNavigation.loadNavigation();
    // push variable to data array
    data.push({ name: inputValue });
    // save data to file
    MyNavigation.saveNavigation(data);
    MyNavigation.displayNavigation();
    MyNavigation.displayNavigationMenu();
  }

  // identify - delete list button
  if (e.target.classList.contains("btn-danger")) {
    let listIndex = e.target.getAttribute("mla-index");
    console.log(listIndex);

    // load list from file
    const data = MyNavigation.loadNavigation();
    // push variable to data array
    data.splice(listIndex, 1);
    // save data to file
    MyNavigation.saveNavigation(data);
    MyNavigation.displayNavigation();
    MyNavigation.displayNavigationMenu();
  }

  // #### LISTS ####
  console.log(e.target);
  // identify - append to list button
  if (
    e.target.getAttribute("id") == "mla-add-li" &&
    document.getElementById("mla-l-input").value != ""
  ) {
    let inputValue = document.getElementById("mla-l-input").value;
    const listName = e.target.getAttribute("mla-add-li");

    // load list from file
    let data = MyList.loadList(listName);
    // push variable to data array
    data.push(inputValue);
    // save data to file
    MyList.saveList(data, listName);
    MyList.displayList(listName);
  }
  // identify - list item
  if (e.target.classList.contains("list-group-item-action")) {
    const listIndex = e.target.getAttribute("mla-li-index");
    const listName = e.target.getAttribute("mla-name");
    // console.log(listName, listIndex);
    MyList.displayListItem(listName, listIndex);
  }
  // identify - save changes button
  if (
    e.target.getAttribute("id") == "mla-save-li" &&
    document.getElementById("mla-l-input").value != ""
  ) {
    console.log("save");

    let inputValue = document.getElementById("mla-l-input").value;
    const listIndex = e.target.getAttribute("mla-li-index");
    const listName = e.target.getAttribute("mla-add-li");

    // load list from file
    let data = MyList.loadList(listName);
    // push variable to data array
    data[listIndex] = inputValue;
    // save data to file
    MyList.saveList(data, listName);
    MyList.displayList(listName);
  }
  //identify - delete row button
  if (e.target.getAttribute("id") == "mla-delete-li") {
    console.log("delete");

    const listIndex = e.target.getAttribute("mla-li-index");
    const listName = e.target.getAttribute("mla-add-li");

    // load list from file
    let data = MyList.loadList(listName);
    // push variable to data array
    data.splice(listIndex, 1);
    // save data to file
    MyList.saveList(data, listName);
    MyList.displayList(listName);
  }
});
