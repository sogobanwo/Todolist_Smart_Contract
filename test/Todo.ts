import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Todolist", function () {
  async function deployTodoContract() {
    const TodoContract = await ethers.getContractFactory("Todolist");
    const deployTodolist = await TodoContract.deploy();
    return { deployTodolist };
  }

  describe("addTodo and get Todos", function () {
    it("Should return an array of todos", async function () {
      const { deployTodolist } = await loadFixture(deployTodoContract);
      const tx = await deployTodolist.addTodo("sogo", "Sogo is a boy");
      const todo = await deployTodolist.getAllTodos();
      expect(todo[0].id).to.equal(1);
      expect(todo[0].description).to.equal("Sogo is a boy");
      expect(todo[0].title).to.equal("sogo");
      expect(todo[0].isDone).to.equal(false);
    });
  });

  describe("Delete All Todos", function () {
    it("Should return an empty array", async function () {
      const { deployTodolist } = await loadFixture(deployTodoContract);
      const add = await deployTodolist.addTodo("sogo", "Sogo is a boy");
      const tx = await deployTodolist.deleteAllTodos();
      const todo = await deployTodolist.getAllTodos();
      expect(todo.length).to.equal(0);
    });
  });

  describe("Update the isDone status", function () {
    it("Should return the opposite of the boolean it is", async function () {
      const { deployTodolist } = await loadFixture(deployTodoContract);
      const add = await deployTodolist.addTodo("sogo", "Sogo is a boy");
      const todo = await deployTodolist.updateIsDone(1);
      const allTodo = await deployTodolist.getAllTodos();
      expect(allTodo[0].isDone).to.equal(true);
    });
  });
});
