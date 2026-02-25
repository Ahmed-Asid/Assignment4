// function show(id) {
//     document.getElementById("btn-total").classList.remove("active")
//     document.getElementById("btn-interview").classList.remove("active")
//     document.getElementById("btn-rejected").classList.remove("active")

//     document.getElementById(id).classList.add("active")

//     if (id === 'btn-total'){
//         document.getElementById("job-cards").classList.remove("hidden");
//         document.getElementById("no-job").classList.add("hidden");
//     }
//     else if (id === 'btn-interview' || id === 'btn-rejected'){
//         document.getElementById("job-cards").classList.add("hidden");
//         document.getElementById("no-job").classList.remove("hidden");
//     }
// }

// show("btn-total")
const allCards = document.getElementById("job-cards");
const interviewCard = document.getElementById("interview-card");
const rejectCard = document.getElementById("reject-card");

function action(cardId , btn) {
    const card = document.getElementById(cardId);

    card.classList.remove("green-border");
    card.classList.remove("red-border");

    const status = document.getElementsByClassName("details");
    if (btn === 'int'){
        card.classList.add("green-border");
        for (const stat of status){
        if (stat.parentNode.parentNode === card){
            stat.innerText = "Interviewed";
        }
        }
        interviewCard.appendChild(card);
    }
    else if (btn === 'rej'){
        card.classList.add("red-border");
        for (const stat of status){
        if (stat.parentNode.parentNode === card){
            stat.innerText = "Rejected";
        }
        }
        rejectCard.appendChild(card);
    }
}


function del(id) {
    const child = document.getElementById(id);
    allCards.removeChild(child)
}


    let countTotals = document.getElementById("count-total");
    function count() {
        countTotals.innerText = allCards.children.length;
    }
    count();
console.log("j")

function active(id) {
    document.getElementById("btn-all").classList.remove("text-white","bg-black");
    document.getElementById("btn-interview").classList.remove("text-white","bg-black")
    document.getElementById("btn-reject").classList.remove("text-white","bg-black")

    if (id === "btn-all"){
        allCards.classList.remove("hidden");
        interviewCard.classList.add("hidden");
        rejectCard.classList.add("hidden");
        document.getElementById(id).classList.add("text-white","bg-black")
    }
    else if (id === "btn-interview"){
        interviewCard.classList.remove("hidden");
        allCards.classList.add("hidden");
        rejectCard.classList.add("hidden");
        document.getElementById(id).classList.add("text-white","bg-black")
    }
    if (id === "btn-reject"){
        rejectCard.classList.remove("hidden");
        allCards.classList.add("hidden");
        interviewCard.classList.add("hidden");
        document.getElementById(id).classList.add("text-white","bg-black")
    }
}
active("btn-all")