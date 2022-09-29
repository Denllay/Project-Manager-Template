<%*
const tasks = await tp.user.get_prev_day_tasks(tp.file.title, tp.file.include)

for(let task of tasks){
tR += task
}
%>
