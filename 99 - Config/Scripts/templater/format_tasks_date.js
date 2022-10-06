const { Config } = customJS;

const { projectsFolder } = Config.getConfig()

const KANBAN_DATES_REGEX = /📅\{(\d{4}-\d{2}-\d{2})\}/g

function format_tasks_date() {
    app.vault.on('modify', async (file) => {
        if (file.parent.path === projectsFolder) {
            const fileContent = await app.vault.read(file)
            const formattedDates = fileContent.replace(KANBAN_DATES_REGEX, '📅 $1')

            app.vault.modify(file, formattedDates)
        }
    })
}

module.exports = format_tasks_date;
