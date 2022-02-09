// Напишите функцию отрисовки данных в таблице
// Передайте в метод getData в качестве callback renderList

// data - массив объектов
// структура моих данных: таблица -> ячейки -> p или кнопки
import { getData } from "./getData";

const createTableRows = (event) => {
    const eventsTable = document.querySelector(".events-schedule");

    let row = eventsTable.insertRow(-1);

    let dateCell = row.insertCell(0);
    let infoCell = row.insertCell(1);
    let likeCell = row.insertCell(2);
    let personsCell = row.insertCell(3);
    let buttonCell = row.insertCell(4);

    let date = event.date
        .split("-")
        .reverse()
        .join(".");
    let names = event.names
        .map((name) => {
        return '<p>' + name + '</p>';
        })
        .join("\n");
    let buttonCondition = event.registrationDisabled ? `<button class='lock-button'>Регистрация закрыта</button>` : `<button class='registration-button'>Зарегистрироваться</button>`;

    dateCell.innerHTML = `<p class='event-date'>${date}</p>`;
    infoCell.innerHTML = `<p class='event-name'>${event.title}</p>
                    <p class='event-description'>${event.description}</p>`;
    likeCell.innerHTML = `<span class='like-counter'>${event.countLikes}</span>`;
    personsCell.innerHTML = `${names}`;
    buttonCell.innerHTML = `${buttonCondition}`;

    dateCell.classList.add("date");
    infoCell.classList.add("info");
    likeCell.classList.add("likes");
    personsCell.classList.add("persons");
    buttonCell.classList.add("event-buttons");
};

export const renderList = (data) => {
    for (let event of data) {
        createTableRows(event);
    };
};

getData(renderList);