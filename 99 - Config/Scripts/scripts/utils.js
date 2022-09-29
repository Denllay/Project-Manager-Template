class Utils {
  generateLink({ path, folder = "", label = "" }) {
    const formattedFolder =
      folder[folder.length - 1] === "/" ? folder : `${folder}/`;
    const formattedLabel = label ? `|${label}` : "";

    return `[[${formattedFolder}${path}${formattedLabel}]]`;
  }

  toUpperCase(string) {
    if (string !== "" || string !== undefined || string !== null) {
      return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    }

    return "";
  }
}
