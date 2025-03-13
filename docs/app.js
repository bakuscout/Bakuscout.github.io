console.log("Site Loaded");
alert("Feel free to login!");

document.addEventListener("DOMContentLoaded", (event) => {

    // old cookies
    const now = new Date();
    document.cookie = `now=${now}; SameSite=None: Secure`;
    document.cookie = "course=WebProgramming2025; SameSite=None; Secure";

    document.getElementById("old-cookies").innerText = document.cookie;

    // new cookies

    const cookieStore = window.cookieStore;

    cookieStore.set({ name: "username", value: "Eleana Thraseer"}).then(
        () => {
        console.log("Cookie set using cookieStore");
        },
        (reason) => {
        console.log("Unable to set cookie: " + reason);
        }
    );
    cookieStore.get("username").then(
        (obj) => {
            const elt = document.getElementById("new-cookies");
            elt.innerText = `${obj.name}=${obj.value}}`;
        },
        (reason) => {
            console.log("Unable to read cookie: " + reason);
        }
    );

    // Geolocation
    let map = null;
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const markerLocation = [position.coords.latitude, position.coords.longitude];
            map = L.map("map").setView(markerLocation, 8)

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            L.marker(markerLocation).addTo(map);
            console.log("Map loaded")
        },
        (error) => {
            map = null;
            document.getElementById("map").innerText = "Unable to load map"
            console.error("Unable to get user position" + error)
        }
    );

    //Popover
    const popoverElement = document.getElementById("pop")
    document.addEventListener("keydown", (event) => {
        if(event.key === "?") {
            popoverElement.showPopover();
            setTimeout(() => { popoverElement.hidePopover() }, 1000)
        }
    });
});