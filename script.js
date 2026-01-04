function thoigian(){
    let t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();
    document.getElementById("time").textContent = String(h).padStart(2,"0") + ":" + String(m).padStart(2,"0") + ":" + String(s).padStart(2,"0");
    setTimeout(thoigian,1000);
}
thoigian();