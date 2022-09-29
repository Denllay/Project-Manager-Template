/**
 * @typedef {Object} Period
 * @property {string} format - period format
 * @property {string} folderPath - folder path
 */

class Config {
  /**
   * @returns {{daily: Period, weekly: Period, monthly: Period, SPACE: string}}
   */
  getConfig() {
    const { settings } = app.plugins.plugins["periodic-notes"];

    return {
      daily: this.generatePeriod(settings.daily),
      weekly: this.generatePeriod(settings.weekly),
      monthly: this.generatePeriod(settings.monthly),
      taskFolder: "400 - Tasks",
      SPACE: "",
    };
  }

  generatePeriod = ({ format, folder }) => ({
    format,
    folderPath: folder,
  });
}
