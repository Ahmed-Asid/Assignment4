
const allCards = document.getElementById("job-cards");
const cards = document.getElementsByClassName("card");
const available = document.getElementById("available");
// const interviewCard = document.getElementById("interview-card");
// const rejectCard = document.getElementById("reject-card");
// document.getElementById("no-job").classList.add("hidden");
// function noJob() {
    
//     if(document.getElementsByClassName("card").length === 0){
//         document.getElementById("no-job").classList.remove("hidden");
//     }
//     else {
//         document.getElementById("no-job").classList.add("hidden");
//     } 
//     if(document.getElementsByClassName("interview").length === 0){
//         document.getElementById("no-job").classList.remove("hidden");
//     }
//     else {
//         document.getElementById("no-job").classList.add("hidden");
//     }
//     if(document.getElementsByClassName("reject").length === 0){
//         document.getElementById("no-job").classList.remove("hidden");
//     }
//     else {
//         document.getElementById("no-job").classList.add("hidden");
//     }
// }

function noJob() {

    let visible = 0;
    for (let card of cards) {
        if (card.style.display !== "none") {
            visible++;
        }
    }
    
    if (visible === 0) {
        document.getElementById("no-job").classList.remove("hidden");
    } else {
        document.getElementById("no-job").classList.add("hidden");
    }
}
noJob();

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
        card.classList.remove("reject")
        card.classList.add("interview");
        count();
        // interviewCard.appendChild(card);
    }
    else if (btn === 'rej'){
        card.classList.add("red-border");
        for (const stat of status){
        if (stat.parentNode.parentNode === card){
            stat.innerText = "Rejected";
        }
        }
        card.classList.remove("interview")
        card.classList.add("reject");
        count();
        // rejectCard.appendChild(card);
    }
}


function del(id) {
    const child = document.getElementById(id);
    allCards.removeChild(child);
    count();
    noJob();
}


function active(id) {
    document.getElementById("btn-all").classList.remove("text-white","bg-black");
    document.getElementById("btn-interview").classList.remove("text-white","bg-black")
    document.getElementById("btn-reject").classList.remove("text-white","bg-black")

    if (id === "btn-all"){

        for (const card of cards){
            card.style.display = "block";
        }
        document.getElementById(id).classList.add("text-white","bg-black")
        available.innerText = document.getElementById("count-total").innerText;
        noJob();
    }
    else if (id === "btn-interview"){

        for (const card of cards){
            if (card.classList.contains("interview")){
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        }

        document.getElementById(id).classList.add("text-white","bg-black")
        available.innerText = document.getElementById("count-interview").innerText;
        noJob();
    }
    else if (id === "btn-reject"){

        for (const card of cards){
            if (card.classList.contains("reject")){
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        }

        document.getElementById(id).classList.add("text-white","bg-black")
        available.innerText = document.getElementById("count-reject").innerText;
        noJob();
    }
}
active("btn-all")

function count(){
    document.getElementById("count-total").innerText = cards.length;
    document.getElementById("count-interview").innerText = document.getElementsByClassName("interview").length;
    document.getElementById("count-reject").innerText = document.getElementsByClassName("reject").length;
}
count();


