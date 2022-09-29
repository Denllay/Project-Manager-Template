---
obsidianUIMode: preview
---

```dataviewjs
const { Utils, Config } = customJS

const config = Config.getConfig()
const LABEL_FORMAT = 'YYYY-MM-DD'

const getFileLink = (type)=>{
    const period = config[type]
    const lables = {
        monthly: 'Месяц',
        weekly: 'Неделя',
        daily: 'День'
    }

    return Utils.generateLink({
    path: moment().format(period.format),
    folder: period.folderPath,
    label: lables[type]
    })
}

 dv.span(`# [[00 Homepage|Homepage]]`, {cls: 'quick-acess-header'})
 dv.span(`### ${getFileLink('monthly')} / ${getFileLink('weekly')} / ${getFileLink('daily')}`)

 const { daily } =config

 const prevDay = moment().add(-1, 'days')
 const nextDay = moment().add(1, 'days')

 const prevDayLink = Utils.generateLink({
    path: prevDay.format(daily.format),
    folder: daily.folderPath,
    label: prevDay.format(LABEL_FORMAT)
    })

const nextDayLink = Utils.generateLink({
    path: nextDay.format(daily.format),
    folder: daily.folderPath,
    label: nextDay.format(LABEL_FORMAT)
    })

    dv.span(`<< ${prevDayLink} | ${nextDayLink} >>`)
```

---

```dataviewjs
dv.view('Scripts/dataview/active_tasks')
```
