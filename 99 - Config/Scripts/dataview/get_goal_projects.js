const { Config } = customJS;

const { projectsFolder } = Config.getConfig()
try {

    const projects = dv
        .pages(`#project and "${projectsFolder}"`)
        .values.filter(({ goal }) => goal?.includes(dv.page(input.name).file.name))
        .map((page) => `[[${page.file.link.path}|${page.file.name.replace(/\;\s/, '')}]]`);

    if (projects.length > 0) {
        dv.span(projects.length > 1 ? 'Проекты' : 'Проект', { cls: 'goal_projects_list_header' });
        dv.list(projects);
    }

} catch { }