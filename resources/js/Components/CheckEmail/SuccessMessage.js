import React from "react";

const SuccessMessage = ({ classes }) => {
    const formMess = document.querySelector(classes);

    formMess.innerHTML =
        "Message envoyé ! Nous vous recontacterons dès que possible. ";
    formMess.style.visibility = "visible";
    formMess.style.background = "#00c1ec";

    setTimeout(() => {
        formMess.style.opacity = "0";
    }, 5000);
};

export default SuccessMessage;
