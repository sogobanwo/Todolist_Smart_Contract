// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Todolist {
    Todo[] allTodo;
    uint id = 1;

    struct Todo {
        uint id;
        string title;
        string description;
        bool isDone;
    }

    function addTodo( string memory _title, string memory _description ) external {
        allTodo.push(Todo(id, _title, _description, false));
        id++;
    }

    function updateIsDone(uint _id) external {
        for (uint i = 0; i < allTodo.length; i++) {
            if (allTodo[i].id == _id) {
                allTodo[i].isDone = !(allTodo[i].isDone);
            }
        }
    }

    function deleteTodoDetail(uint _id) external {
        for (uint i = 0; i < allTodo.length; i++) {
            if (allTodo[i].id == _id) {
                delete allTodo[i];
            }
        }
        revert("Todo with the specified ID not found");
    }

    function updateTodoDetail( uint _id, string memory _title, string memory _description  ) external {
        for (uint i = 0; i < allTodo.length; i++) {
            if (allTodo[i].id == _id) {
                allTodo[i].title = _title;
                allTodo[i].description = _description;
            }
        }
    }

    function getAllTodos() external view returns (Todo[] memory) {
        return allTodo;
    }

    function deleteAllTodos() external {
        delete allTodo;
    }
}
