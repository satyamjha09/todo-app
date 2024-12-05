let todo = ["todo1" , "todo2" , "todo3" ];
let progress = [];
let done = [];

let todoCol = document.getElementById("todo");
let progressCol = document.getElementById("progress");
let doneCol = document.getElementById("done");


function renderTodo() {
    todoCol.innerHTML = "<h1> TODO </h1>"
    todo.forEach((item, index) => {
        todoCol.innerHTML += `
                <div class="task">
                    <p> ${item} </p>
                    <button onclick="shifToright('todo', ${index})"> &rarr; </button>
                </div>
        `
    })
}

function renderProgress() {

    progressCol.innerHTML = "<h1> Progress </h1>";
    progress.forEach((item, index) => {
        progressCol.innerHTML +=`
                <div class="task">
                    <p> ${item} </p>
                    <button onclick="shifToLeft('progress', ${index})"> &larr; </button>
                    <button onclick="shifToright('progress', ${index})"> &rarr; </button>
                </div>
        `
    })
}

function renderDone() {

    doneCol.innerHTML = "<h1> DONE </h1>"

    done.forEach((item, index) => {
        doneCol.innerHTML += `
                <div class="task">
                    <p> ${item} </p>
                    <button onclick="shifToLeft('done', ${index})"> &larr; </button>
                </div>
        `
    })
}

renderTodo();
renderProgress();
renderDone();


function shifToright(colName, index) {

    if(colName === "todo") {
        let itemToBePushed = todo[index];
        todo = todo.filter((item, i) => i !== index);
        renderTodo();
        console.log("Array after remove item" , todo, itemToBePushed);

        progress.push(itemToBePushed);
        renderProgress();

    }
    else if(colName === "progress") {
        let itemToBePushed = progress[index];
        progress = progress.filter((item , i) => i !== index);
        renderProgress();
        console.log("Array after remove item" , progress, itemToBePushed);
        done.push(itemToBePushed);
        renderDone();
    }

}

function shifToLeft(colName , index) {

    if(colName === "done") {

        let itemToBePushed = done[index];
        done = done.filter((item , i) => i !== index);
        renderDone()
        console.log("Array after remove" , done, itemToBePushed );
        progress.push(itemToBePushed);
        renderProgress()

    } else if (colName === "progress") {

        let itemToBePushed = progress[index];
        progress = progress.filter((item , i) => i !== index);
        renderProgress();
        console.log("Array is removed from progress array" , progress, itemToBePushed );
        todo.push(itemToBePushed);
        renderTodo()
    }




}
