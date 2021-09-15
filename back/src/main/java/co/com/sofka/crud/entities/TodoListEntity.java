package co.com.sofka.crud.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "todoList")
public class TodoListEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private  String nameList;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "groupListId")
    private Set<Todo> todos;


    public TodoListEntity() {
    }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getNameList() { return nameList; }

    public void setNameList(String nameList) { this.nameList = nameList; }

    public Set<Todo> getTodos() { return todos; }

    public void setTodos(Set<Todo> todos) { this.todos = todos; }


}
