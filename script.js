function startAttack() {
    let target = document.getElementById("target").value;
    let port = document.getElementById("port").value;
    let duration = document.getElementById("duration").value;
    let method = document.getElementById("method").value;

    if (target && port && duration && method) {
        let attackLog = document.getElementById("attackLog");
        let li = document.createElement("li");
        li.innerHTML = `🔥 Attacking <b>${target}:${port}</b> using <b>${method}</b> for <b>${duration}s</b>...`;
        attackLog.appendChild(li);
    } else {
        alert("❌ Lengkapi semua input!");
    }
}