---
tags: goal
alias: {{VALUE:🎯 Add Goal}}
date: <% tp.date.now() %>
timespan: {{VALUE:10 Лет, 5 Лет, 3 Года, 1 Год, 6 Месяцев, 1 Месяц, 1 Неделя}}
---
%%
Bar:: `$= dv.view('Scripts/dataview/year_progress', {date: '<% tp.date.now() %>', timeSpan: '<% tp.frontmatter.timespan %>'})`
Projects:: `$= dv.view('Scripts/dataview/get_goal_projects', {name: '<% tp.file.title %>'})`
%%

<%*
const { Utils } = customJS
const fileName = Utils.toUpperCase(tp.file.title)

%>[[00 Homepage|Homepage]]

# <% tp.file.title %>

## Описание

## Задачи


## Полезные материалы


### Проекты
```dataviewjs
dv.view('Scripts/dataview/get_goal_projects', {name: '<% tp.file.title %>'})
```