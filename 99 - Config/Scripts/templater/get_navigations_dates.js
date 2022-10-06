const { Utils } = customJS;

function get_navigations_dates({ labelFormat, type, reference, referenceFormat, folderPath, pathFormat, labels }) {
    const [prevLabel, nextLabel] = labels;
    const prevDate = moment(reference, referenceFormat).add(-1, type);
    const nextDate = moment(reference, referenceFormat).add(1, type);

    const getPath = (date, label) =>
        Utils.generateLink({
            path: date.format(pathFormat),
            folder: folderPath,
            label: label ? label : labelFormat && date.format(labelFormat),
        });

    return [getPath(prevDate, prevLabel), getPath(nextDate, nextLabel)];
}

module.exports = get_navigations_dates;
