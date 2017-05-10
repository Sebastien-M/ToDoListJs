function trGen(text) {
    a = a + 1
    let tr = document.createElement("tr");
    tr.id = "tr" + a;
    tr.innerHTML = text;
    select = document.body.querySelector("#table");
    select.appendChild(tr);
    console.log("Tr " + a + " added")
}

let arr = ["AAA", "BBB", "CCC", "DDD", "EEE", "FFF"];

let a = 0;
let table = document.createElement("table");
table.id = "table";
before = document.body;
before.appendChild(table);

for (i = 0; i != arr.length; i = i + 1) {
    trGen(arr[i]);
}