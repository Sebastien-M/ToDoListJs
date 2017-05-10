
let add_p = function (i, title, comment) {
    //DIV
    let newDiv = document.createElement("div");
    newDiv.id = "div" + i;
    before = document.body.querySelector("#to_fill");
    before.appendChild(newDiv);

    //TITLE
    let new_Title = document.createElement("h3");
    new_Title.id = i;
    new_Title.innerHTML = title;
    before = document.body.querySelector("#div" + i);
    before.appendChild(new_Title);

    //COMMENT
    let newComment = document.createElement("p");
    newComment.id = i;
    newComment.innerHTML = comment;
    before = document.body.querySelector("#div" + i);
    before.appendChild(newComment);

    //BUTTON
    let newButton = document.createElement("button")
    newButton.id = "deleteButton_" + i;
    newButton.className = "delete";
    newButton.type = "button";
    newButton.innerHTML = "Delete";
    before.appendChild(newButton);
}

let form = document.body.querySelector("form");
let i = 0;

//CREATES BLOCK ON SUBMIT CLICK
form.addEventListener("submit", function (e) {
    i = i + 1;
    console.log(i);
    let title = document.body.querySelector("#titre").value;
    let comment = document.body.querySelector("#comment").value;
    add_p(i, title, comment);

    //DELETE
    let button = document.body.querySelector("#deleteButton_" + i);

    button.addEventListener("click", function (e) {
        this.parentNode.remove(this);
        console.log("removed");
    });
    
    e.preventDefault();
});