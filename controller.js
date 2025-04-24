const { resolve } = require("path");
const data = require("./data");
const { rejects } = require("assert");

class Controller {
    // Getting all todos
    async getTodos() {
        return new Promise((resolve, _) => resolve(data));
    }

    // Getting a single todosasync
    async getTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find((todo) => todo.id === parseInt(id));
            if (todo) {
                resolve(todo);
            } else {
                reject(`Todo with id ${id} not found`);
            }
        });
    }

    // Creating a Todo
    async createTodo(todo) {
        return new Promise((resolve, reject) => {
            let newTodo = {
                id: Math.floor(4 + Math.random()*10),
                ...todo
            }
            resolve(newTodo)
        });
    }

    // updating a todos
    async updateTodo(id) {

        return new Promise((resolve, reject) =>{
            let todo = data.find(todo => todo.id === parseInt(id));

            if(!todo){
                reject(`no todo with ${id} found`);

            }

            todo[`completed`] = true;
            resolve(todo);
        })
    }


    // Deleteing a todos
    async deleteTodo(id) {

        return new Promise((resolve, reject) =>{
            let todo = data.find(todo => todo.id === parseInt(id));

            if(!todo){
                reject(`no todo with ${id} found`);

            }

            todo[`completed`] = true;
            resolve(`todo deleted successfully`);
        })
    }
    
}


module.exports =Controller;