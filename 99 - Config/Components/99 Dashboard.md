---
cssClasses: cards cards-1-1 table-wide wide
---

## 🎯 Goals
```dataview
TABLE WITHOUT ID
	(link(file.path, alias)) as title,
	Bar
FROM #goal
```
## 📐 Projects
```dataview
TABLE WITHOUT ID
	(link(file.path, alias[0])) as title,
	choice(regexmatch("undefined", subtitle), "\-", subtitle) as subtitle,
	(link(goal, "Цель")) as goal
FROM #project
```