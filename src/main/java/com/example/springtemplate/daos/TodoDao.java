package com.example.springtemplate.daos;

import com.example.springtemplate.models.Todo;
import com.example.springtemplate.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoDao {
    @Autowired
    TodoRepository repository;
    @GetMapping("/findAllTodos")
    public List<Todo> findAllTodos() {
        return repository.findAllTodos();
    }
    @GetMapping("/findTodoById/{id}")
    public Todo findTodoById(@PathVariable("id") Integer id) {
        return repository.findTodoById(id);
    }
    @GetMapping("/createTodo")
    public Todo createTodo() {
        Todo todo = new Todo();
        todo.setTitle("New Todo");
        todo.setTodo("Chang this todo");
        return repository.save(todo);
    }
    @GetMapping("/updateTodo/{id}/{newTitle}/{newTodo}")
    public Todo updateTodo(
            @PathVariable("id") Integer id,
            @PathVariable("newTitle") String newTitle,
            @PathVariable("newTodo") String newTodo) {
        Todo todo = repository.findTodoById(id);
        todo.setTitle(newTitle);
        todo.setTodo(newTodo);
        return repository.save(todo);
    }
    @GetMapping("/deleteTodo/{id}")
    public void deleteTodo(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
}
