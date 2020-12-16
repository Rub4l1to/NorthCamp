const selectTemplate = document.createElement("select");
let data = ["Select", "Lorem", "Ipsun", "Dolor"];
let option;
for (const item of data) {
  option = document.createElement("option");
  option.value = item;
  option.innerHTML = item;
  if (item === "Select") {
    option.selected = true;
  }
  selectTemplate.appendChild(option);
}

document.body.appendChild(selectTemplate);
