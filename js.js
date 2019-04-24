const lista = document.getElementById("lista");
const add = document.getElementById("add");
const text = document.getElementById("addTxt");
const container = document.getElementById("container");
const listItem = document.getElementsByTagName('li');

// for (let i = 0; i < listItem.length; i++) {
//     let sel = listItem[i];
//     sel.addEventListener("click", function () {
//         console.log(this.parentNode);
//     })
// }

add.addEventListener("click", () => {
    if (text.value) {
        const itemNou = document.createElement("li");
        itemNou.textContent = text.value;
        creareButoane(itemNou);
        lista.appendChild(itemNou);
        text.value = null;
    } else {
        const eroare = "<h3 class='err'>Campul nu poate fi gol!</h3>";
        container.insertAdjacentHTML("beforeend", eroare);
        setTimeout(() => {
            const er = document.getElementsByClassName("err")[0];
            er.remove();
        }, 1000);
    }

});




lista.addEventListener("click", (e) => {
    const li = e.target.parentNode;
    const ul = li.parentNode;
    if (e.target.className === "del") {
        ul.removeChild(li);
    } else if (e.target.className === "up") {
        const previous = e.target.parentNode.previousElementSibling;
        ul.insertBefore(li, previous);
    } else if (e.target.className === "down") {
        const next = e.target.parentNode.nextElementSibling;
        ul.insertBefore(next, li);
    }

});

const li = Array.from(lista.children);

li.forEach(item => {
    creareButoane(item);
});

function creareButoane(p) {
    const sus = document.createElement("button");
    sus.className = "up";
    sus.textContent = "UP"
    p.appendChild(sus);

    const down = document.createElement("button");
    down.className = "down";
    down.textContent = "DOWN"
    p.appendChild(down);

    const del = document.createElement("button");
    del.className = "del";
    del.textContent = "DELETE"
    p.appendChild(del);
}

function localS() {
    const storage = localStorage.getItem("date");

    let date;

    if (!storage) {
        date = [];
    } else {
        date = JSON.parse(storage);
    }
    return date;
}



function puneInStorage(dateIntare) {
    const lista = localS();
    lista.push(dateIntare);
    localStorage.setItem("date", JSON.stringify(lista));
}

function stergeDinStorage(sters){
    const lista=localS();
    let index;
    lista.forEach((item)=>{
        if(item.name===sters){
            index=lista.indexOf(item);
        }
    });
    lista.splice(index,1);
    localStorage.setItem("date", JSON.stringify(lista));

}




console.log(localS());
