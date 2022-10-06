if (!input?.end || !input?.birthday) {
    dv.paragraph('You must pass a `end and birthdat` to the view');
    return;
}

const month = moment().month() + 1;
const year = moment().year();
const day = moment().date();
const hour = moment().hour();

function progress(type) {
    let value;

    switch (type) {
        case 'lifespan': {
            const birthday = moment(input.birthday, 'YYYY-MM-DD');
            const daysDifference = moment(input.end, 'YYYY-MM-DD').diff(birthday, 'days');
            const difference = moment().diff(birthday, 'days');

            value = Math.round((difference / daysDifference) * 100);
            break;
        }
        case 'year':
            value = (month / 12) * 100;
            break;
        case 'month':
            value = (day / moment().daysInMonth()) * 100;
            break;
        case 'day':
            value = (hour / 24) * 100;
            break;
    }

    return {
        progress: `<progress value="${parseInt(value)}" max="100"></progress>`,
        value: `${parseInt(value)}%`,
    };
}

const lifeProgress = progress('lifespan');
const yearProgress = progress('year');
const monthProgress = progress('month');
const dayProgress = progress('day');

dv.span(`
|           |                                  |                               |
| --------- | -------------------------------- | ----------------------------- |
| **Life**  | ${lifeProgress.progress}         | ${lifeProgress.value}         |
| **Year**  | ${yearProgress.progress}         | ${yearProgress.value}         |
| **Month** | ${monthProgress.progress}        | ${monthProgress.value}        |
| **Day**   | ${dayProgress.progress}          | ${dayProgress.value}          |
`);
