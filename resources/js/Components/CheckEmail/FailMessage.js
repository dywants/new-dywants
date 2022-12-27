import React from "react";

/*const FailMessage = ({ message, classes }) => {
    const formMess = document.querySelector(classes);
    formMess.innerHTML = message;
    formMess.style.visibility = "none";
    formMess.style.background = "rgb(253,87,87)";
};*/

function FailMessage(message, classes) {
    const formMess = document.querySelector(classes);
    formMess.innerHTML = message;
    formMess.style.visibility = "hidden";
    formMess.style.background = "rgb(253,87,87)";
}

export default FailMessage;
