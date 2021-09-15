package co.com.sofka.crud.controllers;

import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.entities.TodoListEntity;
import co.com.sofka.crud.services.TodoService;
import co.com.sofka.crud.services.TodoServiceList;
import org.hibernate.mapping.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class TodoControllerList {

    @Autowired
    private TodoServiceList listservice;

    @GetMapping(value = "api/todos")
    public Iterable<TodoListEntity> list(){
        return listservice.list();
    }

    @PostMapping(value = "api/todo")
    public TodoListEntity save(@RequestBody TodoListEntity todoList){
        return listservice.save(todoList);
    }

    @PutMapping(value = "api/todo")
    public TodoListEntity update(@RequestBody TodoListEntity todoList){
        if(todoList.getId() != null){
            return listservice.save(todoList);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        listservice.delete(id);
    }

    @GetMapping(value = "api/{id}/todo")
    public TodoListEntity get(@PathVariable("id") Long id){
        return listservice.get(id);
    }




}
