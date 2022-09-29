const { Utils, Config } = customJS;

const { daily, weekly, SPACE } = Config.getConfig();
const { format, folderPath } = daily;

const container = dv.container.createEl("div");

const getWeekDays = (isoWeekNum, year) => {
  if (!isoWeekNum || !year) {
    return [];
  }

  const daysList = [];
  const day = moment(`${year}W${isoWeekNum}`).locale("ru");

  for (let i = 0; i < 7; i++) {
    const currentDay = day.format("dddd");
    const dayPath = `${folderPath}/${day.format(format)}`;

    daysList.push({
      tasks: dv.page(dayPath)?.file.tasks.values || [],
      link: Utils.generateLink({
        path: dayPath,
        label: Utils.toUpperCase(currentDay),
      }),
    });

    day.add(1, "day");
  }

  return daysList;
};

try {
  const currentDate = moment(dv.current().file.name, weekly.format);
  const weekNumber = currentDate.format("WW");

  for (const { link, tasks } of getWeekDays(weekNumber, currentDate.year())) {
    dv.header(2, link, { container, cls: "journal-head" });
    dv.span(render(tasks), { container, cls: "journal-task-list" });
  }

  function render(tasks) {
    const currentTasks = tasks.map((task) => {
      return {
        isChecked: task.completed || task.checked,
        text: task.text,
        deeph: task.position.start.col,
      };
    });

    const result = [];

    function iterator(tree) {
      tree.forEach(({ text, isChecked, deeph }) => {
        const currentName = `\n${SPACE.padStart(deeph * 4)} - [${
          isChecked ? "x" : " "
        }] ${text} `;

        result.push(currentName);
      });
    }

    iterator(currentTasks);

    return result.join("");
  }
} catch (e) {
  // nothing todo
}
