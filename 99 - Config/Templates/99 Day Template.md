<%*
const { Config } = customJS

const {daily, weekly, monthly} = Config.getConfig()

const { format, folderPath } = daily
const TITLE_LABEL_FROMAT = "dddd, D MMMM YYYY"
const LINK_LABEL_FORMAT = 'YYYY-MM-DD'

const monthLink = tp.user.get_navigation_link(tp.file.title, format, 'Месяц', monthly.format, monthly.folderPath)
const weekLink = tp.user.get_navigation_link(tp.file.title, format, 'Неделя', weekly.format, weekly.folderPath)
const fileName = tp.user.get_formatted_date(TITLE_LABEL_FROMAT, tp.file.title, format)

const [ prevDayNav, nextDayNav ] = tp.user.get_navigations_dates({
reference: tp.file.title,
referenceFormat: format,
folderPath: folderPath,
pathFormat: format,
type: 'days',
labelFormat: LINK_LABEL_FORMAT,
})
%>[[00 Homepage|Homepage]] / <% monthLink %> / <% weekLink %>

#### << <% prevDayNav %> | <% nextDayNav %> >>

## <% fileName %>

---

## 📕 Задачи
<%*
const tasks = await tp.user.get_prev_day_tasks(tp.file.title, tp.file.include)

for(let task of tasks){
tR += task
}
%>
## 📘 События

---

## 📖 Дневник

## Утренний ритуал

## Вечерний ритуал

---

## 📝 Заметки

## 📦 Интересные материалы
