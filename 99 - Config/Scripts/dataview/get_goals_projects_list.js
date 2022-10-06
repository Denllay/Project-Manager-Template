const { Config } = customJS;

const { projectsFolder } = Config.getConfig()

try {
    const pages = dv.pages(`#project and "${projectsFolder}"`).values.filter(({ goal }) => goal.includes(dv.page(input.name).file.name))

    dv.table(["Project", "Status"], pages.map(page => {
        return [`[[${page.file.link.path}|${page.file.name.replace(/\;\s/, '')}]]`, page.status]
    }));
} catch { }