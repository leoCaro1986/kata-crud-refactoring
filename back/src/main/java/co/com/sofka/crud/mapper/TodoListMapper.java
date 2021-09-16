package co.com.sofka.crud.mapper;

import co.com.sofka.crud.dto.TodoListDTO;
import co.com.sofka.crud.entities.TodoListEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TodoListMapper {

    TodoListDTO toTodoListDTO(TodoListEntity todoListEntity);
    List<TodoListDTO> toTodosListDTO(List<TodoListEntity> todoListEntities);

    @InheritInverseConfiguration
    TodoListEntity toTodoListEntity(TodoListDTO todoListDTO);
}
