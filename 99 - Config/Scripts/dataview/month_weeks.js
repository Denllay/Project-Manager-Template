const { Utils, Config } = customJS;

const { weekly, monthly } = Config.getConfig();

const { format, folderPath } = weekly;
const LABEL_FORMAT = "WW [Неделя]";

try {
  const currentMonth = moment(dv.current().file.name, monthly.format);
  const startMonth = currentMonth.month();

  const weeksLinks = new Set();

  while (currentMonth.month() === startMonth) {
    const week = currentMonth.isoWeek().toString().padStart(2, "0");
    const currentWeekDate = moment(`${currentMonth.year()}-${week}`, "YYYY-WW");

    const weekLink = Utils.generateLink({
      path: currentWeekDate.format(format),
      label: currentWeekDate.format(LABEL_FORMAT),
      folder: folderPath,
    });

    weeksLinks.add(weekLink);

    currentMonth.add(1, "day");
  }

  for (const weekLink of weeksLinks) {
    dv.header(2, weekLink, { cls: "journal-head" });
  }
} catch (e) {
  // nothing to do
}
