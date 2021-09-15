package co.com.sofka.crud.services;

import co.com.sofka.crud.controllers.TodoControllerList;
import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.entities.TodoListEntity;
import co.com.sofka.crud.repositories.TodoListRepository;
import co.com.sofka.crud.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoServiceList {
    @Autowired
    private TodoListRepository repository;

    public Iterable<TodoListEntity> list(){
        return repository.findAll();
    }

    public TodoListEntity save(TodoListEntity todoList){
        return repository.save(todoList);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public TodoListEntity get(Long id){
        return repository.findById(id).orElseThrow();
    }




}
