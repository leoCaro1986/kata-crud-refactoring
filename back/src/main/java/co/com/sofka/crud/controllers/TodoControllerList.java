package co.com.sofka.crud.controllers;

import co.com.sofka.crud.dto.TodoListDTO;
import co.com.sofka.crud.entities.TodoListEntity;
import co.com.sofka.crud.services.TodoServiceList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoControllerList {

    @Autowired
    private TodoServiceList listservice;

    @GetMapping(value = "api/todoslist")
    public Iterable<TodoListDTO> list(){
        return listservice.list();
    }

    @PostMapping(value = "api/createlist")
    public TodoListDTO save(@RequestBody TodoListDTO todoListDTO){

        return listservice.save(todoListDTO);
    }

    @PutMapping(value = "api/updateList")
    public TodoListDTO update(@RequestBody TodoListDTO todoListDTO){
        if(todoListDTO.getId() != null){
            return listservice.save(todoListDTO);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/deleteList")
    public void delete(@PathVariable("id")Long id){
        listservice.delete(id);
    }

    @GetMapping(value = "api/{id}/todoListid")
    public TodoListDTO get(@PathVariable("id") Long id){

        return listservice.get(id);
    }


}
