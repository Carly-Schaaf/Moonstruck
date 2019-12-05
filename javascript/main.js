$(() => {
    window.location.hash = "";

    const emailInput = document.getElementById("email-input");
    let email = "";
    emailInput.addEventListener("change", (e) => {
        e.preventDefault();
        email += e.target.value
    });

    const mapForm = document.getElementsByClassName("map-form")[0];
    mapForm.addEventListener("submit", (e) => {
        let dots = [".", ".", "."];
        emailInput.value = dots.pop();
        const interval = setInterval(() => {
            if (dots.length === 0) {
                emailInput.value = "";
                dots = [".", ".", "."];
            }
            emailInput.value += dots.pop();
        }, 500)
        e.preventDefault();
        sendEmail(email).then(() => {
            successCb(interval)
        }, (err) => failCb(err, interval));
    });

    const failCb = (err, interval) => {
        console.log(err.responseJSON)
        clearInterval(interval);
        emailInput.value = "hm, that email's not valid";
        email = "";
    };

    const successCb = (interval) => {
        clearInterval(interval);
        emailInput.value = "check your inbox :)";
        email = "";
    };

    const sendEmail = () => {
        emailjs.init("user_UxeLdiW1OeBWci89CbGWV");
        var service_id = "default_service";
        var template_id = "moonstruck_map_pending";
        return emailjs.send(service_id, template_id, {"email": email});
    };

    const watch = document.getElementById("click-watch");
    const videoSection = document.getElementById("video-section");
    const videoNav = document.getElementById("video-nav");
    const videoPlayer = document.getElementById("video");

    const about = document.getElementById("click-about");
    const aboutSection = document.getElementById("about");

    const team = document.getElementById("click-team");
    const teamSection = document.getElementById("team");

    watch.addEventListener("click", (e) => {
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

        window.scrollTo({
            top: videoSection.offsetTop,
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

    window.addEventListener("hashchange", (e) => {
        if (window.location.hash.includes("video")) {
            let src = "";
            let link = ""
            if (window.location.hash === '#video/2019/april') {
                src = `https://player.vimeo.com/video/333164739?app_id=122963`;
                link = "april";
            } else if (window.location.hash === '#video/2019/june') {
                src = `https://player.vimeo.com/video/355640738?app_id=122963`;
                link = "june";
            } else {
                src = `https://player.vimeo.com/video/370476412?app_id=122963`;
                link = "august";
            }
            if (!(videoPlayer.src === src)) {
                videoPlayer.src = src;
            }

            const children = videoNav.children;
            for (let index = 0; index < children.length; index++) {
                const child = children[index];
                child.classList.remove("selected");
            }
            const selectedChild = document.getElementById(link);
            selectedChild.classList.add("selected");

        }
    })

    const moon = document.getElementById("moon");
    window.onload = () => {
        moon.classList.add("moon-hover");
        const isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox) {
            moon.classList.remove("moon-hover");
        }
    }

})


