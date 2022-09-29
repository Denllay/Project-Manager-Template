const { Utils } = customJS;

function get_navigation_link(
  reference,
  referenceFormat,
  label,
  format,
  folderPath
) {
  const date = moment(reference, referenceFormat);

  return Utils.generateLink({
    path: date.format(format),
    folder: folderPath,
    label,
  });
}

module.exports = get_navigation_link;
