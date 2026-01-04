function thoigian(){
    let t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();
    document.getElementById("time").textContent = String(h).padStart(2,"0") + ":" + String(m).padStart(2,"0") + ":" + String(s).padStart(2,"0");
    setTimeout(thoigian,1000);
}
thoigian();

let now = new Date();
let h = now.getHours();
if (h < 12) {
    document.body.style.backgroundColor = "#ffffff";
} else if (h < 18) {
    document.body.style.backgroundColor = "#e1ffa9";
} else {
    document.body.style.backgroundColor = "#dbfbff";
}