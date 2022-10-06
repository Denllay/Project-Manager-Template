const { date, timeSpan } = input;

const currentTimespan = parseFloat(timeSpan) * 365;
const startDate = moment(date, 'YYYY-MM-DD');

const difference = moment().diff(startDate, 'days');

const value = (difference / currentTimespan) * 100;

dv.span(`<progress value="${difference}" max='${currentTimespan}'></progress> ${value.toFixed(1)}%`, {
    cls: 'year_progress',
});
