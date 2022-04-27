let percentage = document.querySelector("span");

let count = 0;

window.addEventListener("load", ()=> {
    let load = setInterval(run, 100);
    function run() {
        if (count == 100) {
            count = 0;
            clearInterval();
        } else {
            count++;
            percentage.innerText = count + "%"
        }
    }
})