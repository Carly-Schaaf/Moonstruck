$(() => {
    const emailInput = document.getElementById("email-input");
    let email = "";
    emailInput.addEventListener("change", (e) => {
        e.preventDefault();
        email += e.target.value
    })
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
    })
    const failCb = (err, interval) => {
        console.log(err.responseJSON)
        clearInterval(interval);
        emailInput.value = "hm, that email's not valid";
        email = "";
    }
    const successCb = (interval) => {
        clearInterval(interval);
        emailInput.value = "check your inbox :)";
        email = "";
    }

    const sendEmail = () => {
        emailjs.init("user_UxeLdiW1OeBWci89CbGWV");
        var service_id = "default_service";
        var template_id = "moonstruck_map_pending";
        return emailjs.send(service_id, template_id, {"email": email});
    }

    const watch = document.getElementById("click-watch");
    const videoNav = document.getElementById("video-nav");
    const videoContainer = document.getElementById("video-container");

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
        if (!videoNav.classList.contains("hide")) {
            return;
        } else {
            videoNav.classList.toggle("hide");
        }
    })

    about.addEventListener("click", (e) => {
        if (!videoNav.classList.contains("hide")) {
            videoNav.classList.toggle("hide");
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
        if (!videoNav.classList.contains("hide")) {
            videoNav.classList.toggle("hide");
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
    
    if (window.location.hash.includes('video')) {
        // if (window.location.hash === '#video/2019/april') {
            
        //     videoContainer.append("<iframe id='video' class='video hide' src='https://player.vimeo.com/video/333164739?app_id=122963' width='1026' height='700'frameborder='0' title='Moonstruck - April 2019' allow='autoplay; fullscreen' allowfullscreen></iframe>")
        // } else if (window.location.hash === '#video/2019/june') {
        //     videoContainer.innerHTMl = "<iframe id='video' class='video hide' src='https://player.vimeo.com/video/355640738?app_id=122963' width='1026' height='700'frameborder='0' title='Moonstruck - April 2019' allow='autoplay; fullscreen' allowfullscreen/>"
        // } else {
        //     videoContainer.innerHTMl = "<iframe id='video' class='video hide' src='https://player.vimeo.com/video/370476412?app_id=122963' width='1026' height='700'frameborder='0' title='Moonstruck - April 2019' allow='autoplay; fullscreen' allowfullscreen/>"
        // }
    }

    const moon = document.getElementById("moon");
    window.onload = () => {
        moon.classList.add("moon-hover");
        const isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox) {
            moon.classList.remove("moon-hover");
        }
    }

})


