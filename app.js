var boxs = document.querySelectorAll(".box");
var resets = document.getElementById("reset");
var btn = document.getElementById("new");
var msg2 = document.querySelector(".msg1");

let trun0 = true;
let winpattern = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], 
    [1, 4, 7], [2, 5, 8], [2, 4, 6], 
    [3, 4, 5], [6, 7, 8]
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (trun0) {
            box.innerText = "O";
            trun0 = false;
        } else {
            box.innerText = "X";
            trun0 = true;
        }
        box.disabled = true;

        setTimeout(checkwinner, 100); 
    });
});

const showwinner = (winner) => {
    setTimeout(() => {
        alert(` Congratulations! Winner is ${winner} `);
    }, 200); 
};

let checkwinner = function () {
    for (let pattern of winpattern) {
        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            console.log("Winner:", pos1);
            showwinner(pos1); 
            
        }
    }
};
