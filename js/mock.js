export const randomBoolean = () => {
    return Math.random() < 0.5;
};

export const randomDate = () => {
    let randomYear = Math.floor(2000 + Math.random() * (2022 + 1 - 2000));
    let randomMonth = Math.floor(0 + Math.random() * (11 + 1 - 0));
    let randomDay = Math.floor(0 + Math.random() * (31 + 1 - 0));
    return new Date(randomYear, randomMonth, randomDay);
};

export const randomNumber = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

export const randomText = () => {
    let items = ['Веницианский карнавал танцев и богохульных плясок: смотрим вместе',
    'Солнцестоим вместе или как провести выходные продуктивно',
    'Бредовые макеты и как с ним работать: спитч о проблемах друзей-фронтендеров',
    'Аукцион: лоснящаяся шкура золотого дракона Монина. Что скрывается в повале офиса Нагатино?',
    'К посещению приглашаются сотрудники 18-',
    'Если вы люите солнце и стоять - то данный курс вам очень подойдет. Мы вместе будем стоять и смотреть на солнце. Чистый кайф.',
    'Что делать если в дизайне, который вам отправил дизайнер написаны бредовые тексты? Посмеяться?! Это что для вас шуточки?!',
    'Если у вас еще осталась зарплата - приходите, мы будем рады ее забрать']
    let randomIndex = Math.floor(0 + Math.random() * (items.length - 0));
    return items[randomIndex];
};

export const randomName = () => {
    let firstName = ['Петр', 'Василий', 'Николай', 'Олег', 'Павел'];
    let secondName = ['Иванов', 'Петров', 'Гагарин', 'Сюткин', 'Грозный'];
    let randomIndex1 = Math.floor(0 + Math.random() * (firstName.length - 0));
    let randomIndex2 = Math.floor(0 + Math.random() * (secondName.length - 0));
    return firstName[randomIndex1] + ' ' + secondName[randomIndex2];
};

export const randomEvent = () => {
    let event = {};
    event.date = randomDate();
    event.title = randomText();
    event.description = randomText();
    event.countLikes = randomNumber();
    event.names = randomName();
    event.registrationDisabled = randomBoolean();
    return event;
};

export const tenEvents = () => {
    let events = [];
    for (let i = 0; i <= 10; i ++) {
        events[i] = randomEvent();
    }
    return events;
};

console.log(tenEvents());