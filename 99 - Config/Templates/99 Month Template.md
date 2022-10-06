<%*
const { Config, Utils } = customJS

const config = Config.getConfig()
const {weekly, monthly} = config

const { format, folderPath } = monthly
const TITLE_LABEL_FORMAT = "MMMM YYYY"
const LINK_LABEL_FROMAT = "YYYY-MM"

const fileName = tp.user.get_formatted_date(TITLE_LABEL_FORMAT, tp.file.title, format)

const [ prevMonthLink, nextMonthLink ] = tp.user.get_navigations_dates({  
reference: tp.file.title,  
referenceFormat: format,  
folderPath: folderPath,  
pathFormat: format,  
type: 'months',  
labelFormat: null,
labels: ['↶ PREVIOUS MONTH', 'FOLLOWING MONTH ↷']
})
%>###### [[00 Homepage|HOMEPAGE]]
###### <% prevMonthLink %> ⁝ <% nextMonthLink %> 

# ◌ <% fileName %>
 
## 📐 Проекты


## 📕 Обучение


## 📚 Список чтения


## 📒 Рефлексия прошлого месяца


## 📕 Задачи
- [ ] 

## 📘 Недели

<%*

const LABEL_FORMAT = "WW [Неделя]";

const currentMonth = moment(tp.file.title, format);
const startMonth = currentMonth.month();

const weeksLinks = new Set();

while (currentMonth.month() === startMonth) {
const week = currentMonth.isoWeek().toString().padStart(2, "0");
const currentWeekDate = moment(`${currentMonth.year()}-${week}`, "YYYY-WW");

const weekLink = Utils.generateLink({
path: currentWeekDate.format(weekly.format),
label: currentWeekDate.format(LABEL_FORMAT),
folder: weekly.folderPath,
});

weeksLinks.add(weekLink);

currentMonth.add(1, "day");
}

for (const weekLink of weeksLinks) {
tR += `- ${weekLink}\n`
}
%>
