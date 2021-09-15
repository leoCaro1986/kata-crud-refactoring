package co.com.sofka.crud.repositories;

import co.com.sofka.crud.entities.Todo;
import co.com.sofka.crud.entities.TodoListEntity;
import org.springframework.data.repository.CrudRepository;

public interface TodoListRepository extends CrudRepository<TodoListEntity, Long> {
}
