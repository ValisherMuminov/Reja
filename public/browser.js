console.log("FrontEnd JS ishga tushiramiz");

function itemTemplate(item) {
  return `<li  font-size: 20px; color: white; font-weight: 500;"
        class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
        <span class="item-text"> ${item.reja}</span>
        <div>
            <button 
              data-id="${item._id}>" 
              class="edit-me btn btn-secondary btn-sm mr-1">
              Ozgartirish
            </button>
            <button data-id="${item._id}" 
              class="delete-me btn btn-danger btn-sm">
              Ochirish
            </button>
        </div>
        </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qaytadan harakat qiling!");
    });
});

document.addEventListener("click", function (e) {
  // delete code lari
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq ochirmoqchimisiz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((respose) => {
          console.log(respose.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qiling!");
        });
    }
  }

  // edit code lari
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "O'zgartirish kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qiling!");
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((respose) => {
    alert(respose.data.state);
    document.location.reload();
  });
});