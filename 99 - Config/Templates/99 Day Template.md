<%*
const { Config } = customJS

const {daily, weekly, monthly, projectsFolder} = Config.getConfig()

const { format, folderPath } = daily
const TITLE_LABEL_FROMAT = "dddd, D MMMM YYYY"
const LINK_LABEL_FORMAT = 'YYYY-MM-DD'

const monthLink = tp.user.get_navigation_link(tp.file.title, format, 'MONTH', monthly.format, monthly.folderPath)
const weekLink = tp.user.get_navigation_link(tp.file.title, format, 'WEEK', weekly.format, weekly.folderPath)
const fileName = tp.user.get_formatted_date(TITLE_LABEL_FROMAT, tp.file.title, format)

const [ prevDayNav, nextDayNav ] = tp.user.get_navigations_dates({
reference: tp.file.title,
referenceFormat: format,
folderPath: folderPath,
pathFormat: format,
type: 'days',
labelFormat: null,
labels: ['↶ YESTERDAY', 'TOMORROW ↷']
})
%>###### [[00 Homepage|HOMEPAGE]] • <% monthLink %> • <% weekLink %>
###### <% prevDayNav %> ⁝ <% nextDayNav %>

# ◌ <% fileName %>

## 📕 Задачи
###### ◧ СПОНТАННЫЕ ЗАДАЧИ
- [ ]  

###### ○ ЗАДАЧИ
```tasks
group by filename
due before <% tp.date.now("YYYY-MM-DD",1, tp.file.title, "YYYY-MM-DD") %>
path includes <% projectsFolder %>
not done
hide task count
```
###### ✓ ВЫПОЛНЕННЫЕ СЕГОДНЯ
```tasks
done date is <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
hide task count
group by filename
```
## 📘 События


## 📖 Дневник


## 🧘 Утренний ритуал


## 🚿 Вечерний ритуал


## 📝 Заметки


## 📦 Интересные материалы


