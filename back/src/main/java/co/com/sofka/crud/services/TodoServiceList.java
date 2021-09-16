package co.com.sofka.crud.services;

import co.com.sofka.crud.controllers.TodoControllerList;
import co.com.sofka.crud.dto.TodoListDTO;
import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.entities.TodoListEntity;
import co.com.sofka.crud.mapper.TodoListMapper;
import co.com.sofka.crud.repositories.TodoListRepository;
import co.com.sofka.crud.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceList {
    @Autowired
    private TodoListMapper mapper;

    @Autowired
    private TodoListRepository repository;


    public Iterable<TodoListDTO> list(){
        List<TodoListEntity> todos = (List<TodoListEntity>) repository.findAll();
        return mapper.toTodosListDTO(todos);
    }

    public TodoListDTO save(TodoListDTO todoListDTO){
        TodoListEntity todoListEntity = mapper.toTodoListEntity(todoListDTO);
        return mapper.toTodoListDTO(repository.save(todoListEntity));
    }

    public void delete(Long id){
        TodoListEntity todoListEntity = mapper.toTodoListEntity(get(id));
        repository.delete(todoListEntity);
    }

    public TodoListDTO get(Long id){

        return repository.findById(id)
                .map(listEntity->mapper.toTodoListDTO(listEntity))
                .orElseThrow();
    }




}
