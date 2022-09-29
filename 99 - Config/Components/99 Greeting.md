```dataviewjs
const currentHour = moment().format('HH');

let greeting;

if (currentHour >= 22 || currentHour < 5) {
greeting = 'Ночь'
} else if (currentHour >= 5 && currentHour < 12) {
greeting = 'Утро'
} else {
greeting = 'День'
}

dv.span(`## ${greeting}`)

```
