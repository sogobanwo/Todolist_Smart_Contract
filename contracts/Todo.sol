// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Todolist {
     Todo[] allTodo;
    uint id = 1 ;

    struct Todo {
        uint id;
        string title;
        string description;
        bool isDone;
    }

    function addTodo(string memory _title, string memory  _description) external {
        Todo memory eachTodo;
        eachTodo.id = id;
        eachTodo.title = _title;
        eachTodo.description = _description;
        eachTodo.isDone = false;
        allTodo.push(eachTodo);
        id++;
    }
}