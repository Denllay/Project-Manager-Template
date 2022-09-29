```dataviewjs
const startDate = moment([2022, 8, 28]);
const total = moment().diff(startDate, 'days')

const totalDays = `Количество дней использую дневник: ${total}`

const nofold = '!"99 - Config"'

const allFiles = dv.pages(nofold).file

const totalMd = `Количество записей: ${allFiles.length} записями`

dv.span(`
*${totalDays}*
*${totalMd}*`)

```
