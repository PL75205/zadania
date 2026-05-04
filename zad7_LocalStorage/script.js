const STORAGE_KEY = "zad7_lista";

const input = document.getElementById("itemInput");
const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

function getItems() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function renderList() {
    list.innerHTML = "";
    const items = getItems();

    items.forEach((item, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = item;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Usuń";
        deleteBtn.onclick = () => deleteItem(index);

        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

function addItem() {
    const value = input.value.trim();
    if (!value) return;

    const items = getItems();
    items.push(value);
    saveItems(items);

    input.value = "";
    renderList();
}

function deleteItem(index) {
    const items = getItems();
    items.splice(index, 1);
    saveItems(items);
    renderList();
}

// Eventy
addBtn.addEventListener("click", addItem);
window.addEventListener("load", renderList);