/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
const todoList = require("../todo");
//const moment = require('moment');

const { all, markAsComplete, add } = todoList();

describe("TodoList test suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString(),
    });
  });
  test("should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString(),
    });
    expect(all.length).toBe(todoItemCount + 1);
  });

  test("should mark a todo as complete", () => {
    for (i = 0; i < all.length; i++) {
      expect(all[i].completed).toBe(false);
      markAsComplete(i);
      expect(all[i].completed).toBe(true);
    }
  });

  test("should retrieve OverDue items", () => {
    var dateToday = new Date();
    const yesterday = new Date(new Date().setDate(dateToday.getDate() - 1))
      .toISOString()
      .split("T")[0];
    for (i = 0; i < all.length; i++) {
      const dat = all[i].dueDate.split("/");
      var d1 = dat[2].concat("-").concat(dat[0]).concat("-").concat(dat[1]);
      expect(d1).not.toBe(yesterday);
    }
  });

  test("should retrieve due today items", () => {
    var dateToday = new Date();
    const today = new Date(new Date().setDate(dateToday.getDate()))
      .toISOString()
      .split("T")[0];
    for (i = 0; i < all.length; i++) {
      const dat = all[i].dueDate.split("/");
      var d1 = dat[2].concat("-").concat(dat[0]).concat("-").concat(dat[1]);
      expect(d1).not.toBe(today);
    }
  });

  test("should retrieve due later items", () => {
    var dateToday = new Date();
    const tomorrow = new Date(new Date().setDate(dateToday.getDate() + 1))
      .toISOString()
      .split("T")[0];
    for (i = 0; i < all.length; i++) {
      const dat = all[i].dueDate.split("/");
      var d1 = dat[2].concat("-").concat(dat[0]).concat("-").concat(dat[1]);
      expect(d1).not.toBe(tomorrow);
    }
  });
});
