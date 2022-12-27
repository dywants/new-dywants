import React from "react";

export const SuccessMessage = (message, classes) => {
    const formMess = document.querySelector(classes);

    formMess.innerHTML = message;
    formMess.style.opacity = "1";
    formMess.style.background = "#00c1ec";

    setTimeout(() => {
        formMess.style.opacity = "0";
    }, 5000);
};

export const IsEmail = (email, idEmail) => {
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

export const FailMessage = (message, classes) => {
    const formMess = document.querySelector(classes);
    formMess.innerHTML = message;
    formMess.style.visibility = "none";
    formMess.style.background = "rgb(253,87,87)";
};
