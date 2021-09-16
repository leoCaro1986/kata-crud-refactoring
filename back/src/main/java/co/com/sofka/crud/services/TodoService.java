package co.com.sofka.crud.services;

import co.com.sofka.crud.dto.TodoDTO;
import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.mapper.TodoMapper;
import co.com.sofka.crud.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    @Autowired
    private TodoMapper mapper;

    public Iterable<TodoDTO> list(){
        List<Todo> todos = (List<Todo>) repository.findAll();
        return mapper.toTodosDTO(todos);
    }

    public TodoDTO save(TodoDTO todoDTO){
        Todo todo = mapper.toTodo(todoDTO);
        return mapper.toTodoDTO(repository.save(todo));
    }

    public void delete(Long id){
        Todo todo =  mapper.toTodo(get(id));
        repository.delete(todo);
    }

    public TodoDTO get(Long id){

        return repository.findById(id)
                .map(entity->mapper.toTodoDTO(entity))
                .orElseThrow();
    }

}
