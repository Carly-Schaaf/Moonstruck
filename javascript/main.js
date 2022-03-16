$(() => {
    window.location.hash = "";

    const ticketButtonContainer = document.getElementById('map-submit');
    ticketButtonContainer.addEventListener('click', () => {
        window.open("https://www.tickettailor.com/events/moonstruck/669840", '_blank').focus();
    });



    const watch = document.getElementById("click-watch");
    const videoSection = document.getElementById("video-section");
    const videoNav = document.getElementById("video-nav");
    let alreadyWatched = false;

    const about = document.getElementById("click-about");
    const aboutSection = document.getElementById("about");

    const team = document.getElementById("click-team");
    const teamSection = document.getElementById("team");

    watch.addEventListener("click", (e) => {
        if (!alreadyWatched) {
            window.location.hash = "#video/2019/july";
            alreadyWatched = true;
        }

        if (!aboutSection.classList.contains("hide")) {
            aboutSection.classList.add("hide");
        }
        if (!teamSection.classList.contains("hide")) {
            teamSection.classList.add("hide");
        }
        if (!videoSection.classList.contains("hide")) {
            return;
        } else {
            videoSection.classList.toggle("hide");
        }

        const topPadding = 30;
        window.scrollTo({
            top: videoNav.offsetTop - topPadding,
            behavior: "smooth"
        });
    })

    about.addEventListener("click", (e) => {
        if (!videoSection.classList.contains("hide")) {
            videoSection.classList.toggle("hide");
        }
        if (!teamSection.classList.contains("hide")) {
            teamSection.classList.add("hide");
        }
        if (!aboutSection.classList.contains("hide")) {
            return;
        } else {
            aboutSection.classList.toggle("hide");
        }
    })

    team.addEventListener("click", (e) => {
        if (!videoSection.classList.contains("hide")) {
            videoSection.classList.toggle("hide");
        }
        if (!aboutSection.classList.contains("hide")) {
            aboutSection.classList.add("hide");
        }
        if (!teamSection.classList.contains("hide")) {
            return;
        } else {
            teamSection.classList.toggle("hide");
        }
    });

    const moon = document.getElementById("moon");
    window.onload = () => {
        moon.classList.add("moon-hover");
        const isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox) {
            moon.classList.remove("moon-hover");
        }
    }

})


