package co.com.sofka.crud.controllers;

import co.com.sofka.crud.dto.TodoDTO;
import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoService service;

    @GetMapping(value = "api/todos")
    public Iterable<TodoDTO> list(){

        return service.list();
    }
    
    @PostMapping(value = "api/todo")
    public TodoDTO save(@RequestBody TodoDTO todo){

        return service.save(todo);
    }

    @PutMapping(value = "api/todo")
    public TodoDTO update(@RequestBody TodoDTO todo){
        if(todo.getId() != null){
            return service.save(todo);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/todo")
    public TodoDTO get(@PathVariable("id") Long id){

        return service.get(id);
    }

}
