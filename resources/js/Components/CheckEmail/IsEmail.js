import React from "react";

const IsEmail = ({ email, idEmail }) => {
    const mail = document.getElementById(idEmail);
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
        mail.style.display = "none";
        return true;
    } else {
        mail.style.display = "block";
        mail.style.animation = "dongle 1s";
        setTimeout(() => {
            mail.style.animation = "none";
        }, 3000);
        return false;
    }
};

export default IsEmail;
