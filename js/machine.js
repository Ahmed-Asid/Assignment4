function show(id) {
    document.getElementById("btn-total").classList.remove("active")
    document.getElementById("btn-interview").classList.remove("active")
    document.getElementById("btn-rejected").classList.remove("active")

    document.getElementById(id).classList.add("active")

    if (id === 'btn-total'){
        document.getElementById("job-cards").classList.remove("hidden");
        document.getElementById("no-job").classList.add("hidden");
    }
    else if (id === 'btn-interview' || id === 'btn-rejected'){
        document.getElementById("job-cards").classList.add("hidden");
        document.getElementById("no-job").classList.remove("hidden");
    }
}

show("btn-total")


function action(cardId , btn) {

    document.getElementById(cardId).classList.remove("green-border");
    document.getElementById(cardId).classList.remove("red-border");

    if (btn === 'int'){
        document.getElementById(cardId).classList.add("green-border")
    }
    else if (btn === 'rej'){
        document.getElementById(cardId).classList.add("red-border")
    }
}