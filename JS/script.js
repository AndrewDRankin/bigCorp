((doc) => {
    let login = doc.getElementById("loginButton"),
    form = doc.getElementById("loginForm"),
    toggle = () => {
        form.style.display === "none" ?
            form.style.display = "block" :
            form.style.display = "none";
    };
    login.addEventListener("click", () => toggle())
})(document);