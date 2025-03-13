console.log("Site Loaded");
alert("Feel free to login!");

document.addEventListener("DOMContentLoaded", (event) => {
    const now = new Date();
    document.cookie = `now = ${now}; SameSite=None: Secure`;
    document.cookie = "course = WebProgramming2025; SameSite=None; Secure";

    document.getElementById("old-cookies").innerText = document.cookie;

    const cookieStore = window.cookieStore;

    cookieStore.set({
        name: "username",
        value: "Eleana Thraseer"
    }).then(() => {
        console.log("Cookie set using cookieStore");
    }, (reason) => {
        console.log("Unable to set cookie: " + reason);
    });
    cookieStore.get("username").then(
        (obj) => {
            const elt = document.getElementById("new-cookies");
            Element.innerText = `${obj.name} = ${obj.value}}`;
        },
        (reason) => {"Unable to read cookie: " + reason}
    );
});
