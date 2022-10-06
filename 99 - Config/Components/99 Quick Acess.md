```dataviewjs
const { Utils, Config } = customJS

const config = Config.getConfig()

const { daily } = config

 const prevDay = moment().add(-1, 'days')
 const nextDay = moment().add(1, 'days')

 const prevDayLink = Utils.generateLink({
    path: prevDay.format(daily.format),
    folder: daily.folderPath,
    label: '↶ YESTERDAY'
    })

const nextDayLink = Utils.generateLink({
    path: nextDay.format(daily.format),
    folder: daily.folderPath,
	label: 'TOMORROW ↷'
    })

    dv.span(`${prevDayLink} ⁝ ${nextDayLink}`)
```

## Dashboard

- [[00 Homepage|💎 Homepage]]
- [[00 Goals Board|🎯 Goals]]
- [[00 Projects Board|📐 Projects]]

```dataviewjs
const { Utils, Config } = customJS

const config = Config.getConfig()
const LABEL_FORMAT = 'YYYY-MM-DD'

const getFileLink = (type)=>{
    const period = config[type]
    const lables = {
        monthly: '📅 Monthly',
        weekly: '📅 Weekly',
        daily: '📅 Daily'
    }

    return Utils.generateLink({
    path: moment().format(period.format),
    folder: period.folderPath,
    label: lables[type]
    })
}

dv.span('## Periodic Overviews')

dv.span(dv.markdownList( [getFileLink('daily'), getFileLink('weekly'), getFileLink('monthly')]), {cls: 'quick_acess_periodic_list'})

```

## Tasks

```tasks
group by filename
due before tomorrow
path includes 200 - Project
hide task count
not done
```
