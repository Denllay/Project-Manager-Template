## 📘 Journal

```dataviewjs
const { Config } = customJS

const config = Config.getConfig()

dv.view('Scripts/dataview/journal_view', {
  query: `TABLE file.tasks from "${config.daily.folderPath}" SORT file DESC`,
  limit: 150,
  headerSize: 2
})
```
