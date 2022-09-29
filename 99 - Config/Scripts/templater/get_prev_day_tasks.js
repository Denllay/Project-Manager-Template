async function get_prev_day_tasks(reference, include) {
    const { Config } = customJS

    const { daily } = Config.getConfig()

    const { format, folderPath } = daily

    try {
        const prevDayLink = moment(reference, daily.format).add(-1, 'days').format(format)
        const prevDayContent = await include(`[[${folderPath}/${prevDayLink}]]`)
        const UNCOMPLETED_TASK_REGEX = /\[[>\/\s]\]/i

        const filtredTasks = prevDayContent.split('\n').filter(item => UNCOMPLETED_TASK_REGEX.test(item))

        return filtredTasks.map(task => `${task.replace(UNCOMPLETED_TASK_REGEX, '[ ]')}\n`)
    } catch (error) {
        return []
    }
}
module.exports = get_prev_day_tasks;
