// ---------- Anonymous ID + Access Logging ----------
(function () {
    let uid = localStorage.getItem("anonUserId");
    if (!uid) {
        uid = "UID-" + Math.random().toString(36).substr(2, 8).toUpperCase();
        localStorage.setItem("anonUserId", uid);
    }

    const logs = JSON.parse(localStorage.getItem("accessLogs")) || [];
    logs.push({
        userId: uid,
        module: document.title,
        timestamp: new Date().toLocaleString(),
        status: "Accessed"
    });
    localStorage.setItem("accessLogs", JSON.stringify(logs));
})();

// ---------- Scroll Progress Bar ----------
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById("progress").style.width = progress + "%";
});
