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
            // code for mailing list integration below
            // addToMailingList(email)
            // .then(res => successCb(interval), err => {
            //     const reason = err.responseJSON.title
            //     if (reason === "Member Exists") {
            //         console.log(err.responseJSON);
            //         successCb(interval);
            //     } else {
            //         failCb(err, interval);
            //     }});
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
    const addToMailingList = async (email) => {
        const { key } = await $.ajax({
            method: "GET",
            url: "/key",
        })
        const data = {
            "email_address": email,
            "status": "subscribed",
            "merge_fields": {}
        };
        return $.ajax({
            method: "POST",
            url: "https://cors-anywhere.herokuapp.com/https://us20.api.mailchimp.com/3.0/lists/7d94a1db70/members/",
            data: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                "Authorization": `Basic ${key}`
            }
        })

    }

    const sendEmail = () => {
        emailjs.init("user_UxeLdiW1OeBWci89CbGWV");
        var service_id = "default_service";
        var template_id = "moonstruck_map_pending";
        return emailjs.send(service_id, template_id, {"email": email})
    }

    const watch = document.getElementById("click-watch")
    const video = document.getElementById("video")
    const about = document.getElementById("click-about")
    const aboutSection = document.getElementById("about")
    const team = document.getElementById("click-team")
    const teamSection = document.getElementById("team")

    watch.addEventListener("click", (e) => {
        if (!aboutSection.classList.contains("hide")) {
            aboutSection.classList.add("hide")
        }
        if (!teamSection.classList.contains("hide")) {
            teamSection.classList.add("hide")
        }
        if (!video.classList.contains("hide")) {
            return;
        } else {
            video.classList.toggle("hide");
        }
    })
    about.addEventListener("click", (e) => {
        if (!video.classList.contains("hide")) {
            video.classList.toggle("hide")
        }
        if (!teamSection.classList.contains("hide")) {
            teamSection.classList.add("hide")
        }
        if (!aboutSection.classList.contains("hide")) {
            return;
        } else {
            aboutSection.classList.toggle("hide");
        }
    })
    team.addEventListener("click", (e) => {
        if (!video.classList.contains("hide")) {
            video.classList.toggle("hide")
        }
        if (!aboutSection.classList.contains("hide")) {
            aboutSection.classList.add("hide")
        }
        if (!teamSection.classList.contains("hide")) {
            return;
        } else {
            teamSection.classList.toggle("hide");
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


