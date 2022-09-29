<%*
const { Config } = customJS

const { weekly, monthly} = Config.getConfig()

const { format, folderPath } = weekly
const TITLE_LABEL_FORMAT = 'D MMMM, W [Неделя] YYYY [Года]'
const LINK_LABEL_FORMAT = 'YYYY-W'

const monthLink = tp.user.get_navigation_link(tp.file.title, format, 'Месяц', monthly.format, monthly.folderPath)
const fileName = tp.user.get_formatted_date(TITLE_LABEL_FORMAT, tp.file.title, format)

const [ prevWeekLink, nextWeekLink ] = tp.user.get_navigations_dates({  
reference: tp.file.title,  
referenceFormat: format,  
folderPath: folderPath,  
pathFormat: format,  
type: 'weeks',  
labelFormat: LINK_LABEL_FORMAT,  
}) 
%>[[00 Homepage|Homepage]] / <% monthLink %>

#### << <% prevWeekLink %> | <% nextWeekLink %> >>

## <% fileName %>

---

## 🌹 Что прошло хорошо на прошлой неделе?

## 🌵 Что я должен прекратить делать?

## 🌱 Что можно было бы улучшить?

## 🔋 Что придало мне энергии?

## 📉 Что истощило меня?

## 📒 Рефлексия прошлой недели

---

```dataviewjs
dv.view('Scripts/dataview/week_days')
```
