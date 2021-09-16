package co.com.sofka.crud.mapper;


import co.com.sofka.crud.dto.TodoDTO;
import co.com.sofka.crud.entities.Todo;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TodoMapper {

    TodoDTO toTodoDTO(Todo todo);
    List<TodoDTO> toTodosDTO(List<Todo> todo);

    @InheritInverseConfiguration
    Todo toTodo(TodoDTO todoDTO);
}
