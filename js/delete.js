function del(id) {
    document.getElementById(id).classList.add("hidden");

    const countTotals = document.getElementsByClassName("count-total");

    for (let i = 0; i < countTotals.length; i++) {
        countTotals[i].innerText = Number(countTotals[i].innerText) - 1;
    }
}