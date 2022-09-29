<%*
const { Config } = customJS

const { format, folderPath } = Config.getConfig().monthly
const TITLE_LABEL_FORMAT = "MMMM YYYY"
const LINK_LABEL_FROMAT = "YYYY-MM"

const fileName = tp.user.get_formatted_date(TITLE_LABEL_FORMAT, tp.file.title, format)

const [ prevMonthLink, nextMonthLink ] = tp.user.get_navigations_dates({  
reference: tp.file.title,  
referenceFormat: format,  
folderPath: folderPath,  
pathFormat: format,  
type: 'months',  
labelFormat: LINK_LABEL_FROMAT,  
})
%>[[00 Homepage|Homepage]]

#### << <% prevMonthLink %> | <% nextMonthLink %> >>

## <% fileName %>

---

## 💼 Проекты

## 📕 Обучение

## 📚 Список чтения

## 📒 Рефлексия прошлого месяца

---

```dataviewjs
dv.view('Scripts/dataview/month_weeks')
```
