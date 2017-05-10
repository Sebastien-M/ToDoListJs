function trGen(text) {
    a = a + 1
    let tr = document.createElement("tr");
    tr.id = "tr" + a;
    tr.innerHTML = text;
    select = document.body.querySelector("#tdValeur");
    select.appendChild(tr);
    console.log("Tr " + a + " added")

    let trVal = document.createElement("tr");
    trVal.id = "trVal" + a;
    trVal.innerHTML = a;
    select = document.body.querySelector("#tdIndex");
    select.appendChild(trVal);
}

let arr = ["AAA", "BBB", "CCC", "DDD", "EEE", "FFF"];

let a = 0;
let table = document.createElement("table");
table.id = "table";
before = document.body;
before.appendChild(table);
let tdIndex = document.createElement("td");
tdIndex.id = "tdIndex";
document.body.querySelector("#table").appendChild(tdIndex);

let tdValeur = document.createElement("td");
tdValeur.id = "tdValeur";
document.body.querySelector("#table").appendChild(tdValeur);
for (i = 0; i != arr.length; i = i + 1) {
    trGen(arr[i]);
}