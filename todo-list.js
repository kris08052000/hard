/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

 constructor(){
  this.todoList = [];
 }

 add(t){
  this.todoList.push(t);
 }

 remove(index){
  this.todoList.splice(index,1);
 }

 update(index,updatedTodo){
  if(index < this.todoList.length){
    this.todoList[index] = updatedTodo;
  }
 }

 getAll(){
  return this.todoList;
 }

 get(index){
    const a  = this.todoList[index];
  if(a === undefined){
    let b = null;
    return b;
  }else 
  return a;
 }

 clear(){
  this.todoList= [];
 }

}

module.exports = Todo;
