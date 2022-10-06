---
tags: project
alias: 
  - {{VALUE:⚒ Add List Project}}
subtitle: {{VALUE:Project Subtitle}}
```js quickadd
const { Config } = customJS;

const { goalsFolder } = Config.getConfig()

const goalNotes = DataviewAPI.pages(`#goal and "${goalsFolder}"`)
const targetGoal = await this.quickAddApi.suggester(goalNotes.map(p => p.file.name), goalNotes);
const targetGoalFile = app.vault.getAbstractFileByPath(targetGoal.file.path);
return `goal: ${targetGoal.file.name}`;
```
---

# {{VALUE:⚒ Add List Project}}

## Описание
{{VALUE:Project Subtitle}}

## Задачи


## Полезные материалы
