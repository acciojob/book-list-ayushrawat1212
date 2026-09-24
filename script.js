//your JS code here. If required.
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");

const submit = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submit.addEventListener("click", function (event) {

    event.preventDefault();

	const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = title.value;

    const authorCell = document.createElement("td");
    authorCell.textContent = author.value;

    const isbnCell = document.createElement("td");
    isbnCell.textContent = isbn.value;

    const deleteCell = document.createElement("td");

	const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete", "btn", "btn-danger");

    deleteCell.appendChild(deleteButton);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(isbnCell);
    row.appendChild(deleteCell);

    bookList.appendChild(row);

	title.value = "";
    author.value = "";
    isbn.value = "";
});

bookList.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete")) {
        event.target.parentElement.parentElement.remove();
    }

});



	