/**
 * @typedef {Object} Period
 * @property {string} format - period format
 * @property {string} folderPath - folder path
 */

class Config {
    /**
     * @returns {{daily: Period, weekly: Period, monthly: Period, goalsFolder: string, projectsFolder: string, tasksFolder:string, SPACE: string}}
     */
    getConfig() {
        const { settings } = app.plugins.plugins['periodic-notes'];

        return {
            daily: this.generatePeriod(settings.daily),
            weekly: this.generatePeriod(settings.weekly),
            monthly: this.generatePeriod(settings.monthly),
            goalsFolder: '100 - Goals',
            projectsFolder: '200 - Projects',
            tasksFolder: '600 - Tasks',
            SPACE: '',
        };
    }

    generatePeriod = ({ format, folder }) => ({
        format,
        folderPath: folder,
    });
}
