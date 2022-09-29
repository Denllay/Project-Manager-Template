const { Config } = customJS;

if (!input?.query) {
  dv.paragraph("You must pass a `query` to the view");
  return;
}

const { SPACE } = Config.getConfig();
const pagesWithLists = await dv.tryQuery(input.query);
const HEADER_SIZE = input?.headerSize ?? 2;
const BATCH_LIMIT = input?.limit ?? 150;

let batches = [];
let listCount = 0;
let batch = [];

for (let [page, list] of pagesWithLists.values) {
  batch.push([page, list]);
  listCount += list.length;
  if (listCount > BATCH_LIMIT) {
    batches.push(batch);
    batch = [];
    listCount = 0;
  }
}
batches.push(batch);

const container = dv.container.createEl("div");

function renderList(tasks) {
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
      }] ${text}`;

      result.push(currentName);
    });
  }

  iterator(currentTasks);

  return result.join("");
}

function renderPages(pages) {
  for (let [page, list] of pages) {
    dv.header(HEADER_SIZE, page, { container, cls: "journal-head" });

    dv.span(renderList(list), { container, cls: "journal-task-list" });
  }
}

let currentBatch = 0;
function loadNextBatch() {
  const nextBatch = currentBatch + 1;
  renderPages(batches[nextBatch - 1]);
  currentBatch = nextBatch;
}

loadNextBatch();

const loadMore = dv.container.createEl("a", {
  text: "Load More",
  cls: "cursor-pointer",
});

loadMore.addEventListener("click", (evt) => {
  evt.stopPropagation();
  loadNextBatch();
});
