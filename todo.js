/* eslint-disable no-undef */
const todoList = () => {
    // eslint-disable-next-line no-undef
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }

const overdue = () => {
// Write the date check condition here and return the array of overdue items accordingly.
// FILL YOUR CODE HERE
const due=all.filter(checkDue);

function checkDue(todoItem)
{

let yourDate = new Date()
 yourDate=yourDate.toISOString().split('T')[0]

let d1=new Date(yourDate);
d1=d1.toISOString().split('T')[0];

  let d2=new Date(todoItem.dueDate);
  d2=d2.toISOString().split('T')[0];
 
    if(d1 > d2)
    return(todoItem);

}

return due;
}

const dueToday = () => {
// Write the date check condition here and return the array of todo items that are due today accordingly.
// FILL YOUR CODE HERE
const due=all.filter(checkDue);
function checkDue(todoItem)
{

let yourDate = new Date()
 yourDate=yourDate.toISOString().split('T')[0]

let d1=new Date(yourDate);
d1=d1.toISOString().split('T')[0];

  let d2=new Date(todoItem.dueDate);
  d2=d2.toISOString().split('T')[0];
 
    if(d1 === d2)
    return(todoItem);

}

return due;
}


const dueLater = () => {
// Write the date check condition here and return the array of todo items that are due later accordingly.
// FILL YOUR CODE HERE


const due=all.filter(checkDue);
function checkDue(todoItem)
{

let yourDate = new Date()
 yourDate=yourDate.toISOString().split('T')[0]

let d1=new Date(yourDate);
d1=d1.toISOString().split('T')[0];


 
  let d2=new Date(todoItem.dueDate);
  d2=d2.toISOString().split('T')[0];
 
    if(d1 < d2)
    return(todoItem);

}

return due;

}

const toDisplayableList = (list) => {
// Format the To-Do list here, and return the output string as per the format given above.
// FILL YOUR CODE HERE
     const result=list.map(display).join("\n");
     function display(item)
     {
      return `${item.completed ? '[x]':'[ ]'} ${item.title} ${new Date(item.dueDate).toISOString().split('T')[0] === new Date().toISOString().split('T')[0]?' ':item.dueDate}`
     }
     return result;
}
return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };

}




/*const todos = todoList();

const formattedDate = d => {
return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
new Date(new Date().setDate(dateToday.getDate() + 1))
)
todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")
*/
module.exports=todoList;