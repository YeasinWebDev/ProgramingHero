

const buttons = document.querySelectorAll('.value'),
    seatCount = document.getElementById("seatNum"),
    eachitem = document.getElementById("eachitem"),
    totalPrice = document.getElementById("totalPrice"),
    GrandTotal = document.getElementById("GrandTotal"),
    input = document.getElementById("input"),
    apply = document.getElementById("apply"),
    bus = document.getElementById("bus"),
    next = document.getElementById("next"),
    succesFull = document.getElementById("succesFull"),
    continuebtn = document.getElementById("continue"),
    inputArea = document.querySelector(".inputArea")

let count = 0;
let busSeat = 8;
let price = 550;
let totalValue = 0;


let new15 = 0.15;
let couple20 = 0.20;


buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        // console.log(e.target.innerHTML);
        count = count + 1;
        busSeat = busSeat - 1
        const name = e.target.innerHTML
        if (count <= 4) {
            e.target.style.backgroundColor = "greenyellow";
            update(count, name, busSeat)
            inputArea.style.display = "block"
        }
    });
});



function update(num, name, busSeat) {
    bus.innerHTML = busSeat
    seatCount.innerHTML = num

    const div = document.createElement("div")
    div.innerHTML =
        `
    <div class="flex justify-between items-center">
        <h1>${name}</h1>
        <h1>Economoy</h1>
        <h1>550</h1>
    </div>
    `
    eachitem.appendChild(div)

    let total = price * num
    totalPrice.innerHTML = total

    grandtotal(total)
    return totalValue = total
}

function grandtotal(price, extra) {
    if (extra) {
        GrandTotal.innerHTML = price - price * extra
    } else {
        GrandTotal.innerHTML = price
    }

}

function cupon() {

    apply.addEventListener("click", () => {
        let copuponValue = input.value; // Remove the extra period here
        if (copuponValue === "NEW15") {
            inputArea.style.display = "none"
            grandtotal(totalValue, new15)

        } else if (copuponValue === "Couple 20") {
            inputArea.style.display = "none"
            grandtotal(totalValue, couple20)

        } else {
            alert("no copupon found")
        }
        input.value = ""
    });

}

cupon()



next.addEventListener("click", () => {
    succesFull.style.display = "flex"
})
continuebtn.addEventListener("click", () => {
    succesFull.style.display = "none"
})
