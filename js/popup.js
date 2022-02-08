// В папке `js` создайте файл `popup.js` и подключите модулем
// Напишите функцию открытия попапа
// Напишите функции закрытия поппа по нажатию на крестик или esc
// При создании кнопки `"Зарегистрироваться"` добавьте слушатель на клик для открытия попапа


// const openPopUp = () => {
//     const popup = document.querySelector(".modal-window-background");
//     const regButtons = document.querySelectorAll(".registration-button");
//     for (let regButton of regButtons) {
//         regButton.onclick = function () {
//             popup.classList.add("show");
//         };
//     }
// };

const popup = document.querySelector(".modal-window-background");

export const openPopup = (evt) => {
    evt.preventDefault();
    popup.classList.add("show");
    console.log('Popup opened');
};

export const closePopup = (evt) => {
    evt.preventDefault();
    popup.classList.remove("show");
    console.log('Popup closed')
};

export const listenButtons = () => {
    const regButtons = document.querySelectorAll(".registration-button");
    regButtons.forEach((regButton) => {
        regButton.addEventListener('click', openPopup);
    });

    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach((closeButton) => {
        closeButton.addEventListener('click', closePopup);
    });

    const cancelButtons = document.querySelectorAll(".cancel");
    cancelButtons.forEach((cancelButton) => {
        cancelButton.addEventListener('click', closePopup);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closePopup(e);
        }
    });
};

listenButtons();