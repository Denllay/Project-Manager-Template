const { Utils } = customJS;

function get_navigations_dates({
  labelFormat,
  type,
  reference,
  referenceFormat,
  folderPath,
  pathFormat,
}) {
  const prevDate = moment(reference, referenceFormat).add(-1, type);
  const nextDate = moment(reference, referenceFormat).add(1, type);

  const getPath = (date) =>
    Utils.generateLink({
      path: date.format(pathFormat),
      folder: folderPath,
      label: date.format(labelFormat),
    });

  return [getPath(prevDate), getPath(nextDate)];
}

module.exports = get_navigations_dates;
