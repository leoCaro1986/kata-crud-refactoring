package co.com.sofka.crud.dto;

import co.com.sofka.crud.entities.Todo;

import java.util.Set;

public class TodoListDTO {
    private Long id;
    private  String nameList;
    private Set<TodoDTO> todos;

    public TodoListDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameList() {
        return nameList;
    }

    public void setNameList(String nameList) {
        this.nameList = nameList;
    }

    public Set<TodoDTO> getTodos() {
        return todos;
    }

    public void setTodos(Set<TodoDTO> todos) {
        this.todos = todos;
    }
}
