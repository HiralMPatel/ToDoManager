/* eslint-disable no-undef */
const todoList=require('../todo');

const {all ,markAsComplete, add}=todoList();

describe("TodoList test suite", () =>{
    beforeAll(()=>{
        add({
            title: "Test todo",
            completed: false,
            dueDate: new Date().toLocaleDateString()
        }
    );

    })
    test("should ass new todo",()=>{
        const todoItemCount=all.length;
        add({
            title: "Test todo",
            completed: false,
            dueDate: new Date().toLocaleDateString()
        }
        );
        expect(all.length).toBe(todoItemCount + 1);
    });

    test("should mark a todo as complete",()=>{
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
})

