<%*
const { Config } = customJS

const { weekly, monthly} = Config.getConfig()

const { format, folderPath } = weekly
const TITLE_LABEL_FORMAT = 'D MMMM, W [Неделя] YYYY [Года]'
const LINK_LABEL_FORMAT = 'YYYY-W'

const monthLink = tp.user.get_navigation_link(tp.file.title, format, 'MONTH', monthly.format, monthly.folderPath)
const fileName = tp.user.get_formatted_date(TITLE_LABEL_FORMAT, tp.file.title, format)

const [ prevWeekLink, nextWeekLink ] = tp.user.get_navigations_dates({  
reference: tp.file.title,  
referenceFormat: format,  
folderPath: folderPath,  
pathFormat: format,  
type: 'weeks',  
labelFormat: null,  
labels: ['↶ PREVIOUS WEEK', 'FOLLOWING WEEK ↷']
}) 
%>###### [[00 Homepage|HOMEPAGE]]  •  <% monthLink %>
######  <% prevWeekLink %> ⁝ <% nextWeekLink %> 

# ◌ <% fileName %>

## 🌹 Что прошло хорошо на прошлой неделе?


## 🌵 Что я должен прекратить делать?


## 🌱 Что можно было бы улучшить?


## 🔋 Что придало мне энергии?


## 📉 Что истощило меня?


## 📒 Рефлексия прошлой недели


## 📕 Задачи
- [ ] 

## 📜 Выполенные задачи

```tasks
has done date
done after <% moment(tp.file.title, format).format("YYYY-MM-DD") %> 
done before <% moment(tp.file.title, format).add(1,'weeks').format("YYYY-MM-DD") %>
group by done
```