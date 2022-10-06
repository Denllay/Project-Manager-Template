function get_formatted_date(format, reference, referenceFormat) {
    const date = moment(reference, referenceFormat).locale('ru').format(format);

    return date
        .split(' ')
        .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
}

module.exports = get_formatted_date;
