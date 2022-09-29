const { Utils, Config } = customJS;

const { SPACE, taskFolder } = Config.getConfig();

const container = dv.container.createEl("div");

const taskList = dv
  .pages(`#status/active and "${taskFolder}"`)
  .values.map(({ file }) => {
    return {
      link: Utils.generateLink({ path: file.path, label: file.name }),
      tasks: file.tasks,
    };
  });

function renderList(tasks) {
  const result = [];

  const currentTasks = tasks.map((task) => {
    return {
      isChecked: task.completed || task.checked,
      text: task.text,
      deeph: task.position.start.col,
    };
  });

  function iterator(tree) {
    tree.forEach(({ text, isChecked, deeph }) => {
      const currentName = `\n${SPACE.padStart(deeph * 4)} - [${
        isChecked ? "x" : " "
      }] ${text}`;

      result.push(currentName);
    });
  }

  iterator(currentTasks);

  return result.join("");
}

for (const { link, tasks } of taskList) {
  dv.header(2, link, { container, cls: "journal-head" });
  dv.span(renderList(tasks), { container, cls: "journal-task-list" });
}
