Vue.component('alert' , {
    props : ['title' , 'message' , 'type'],
    template : `<div :class="['alert' , classAlert]" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
        <strong>{{ title }}</strong>{{ message }}
      </div>`,
      data() {
          return {
              isActive : true
          }
      }
});

    Vue.component('todos' , {
        props: ['todos'],
        template : `   <ul>
       <todo v-for="(todo , index) in todos" :todo="todo" :index="index"></todo>
    </ul>`
    });
    Vue.component('todo' , {
        props : ['todo' , 'index'],
        template : `<li><a href="#" :class="{ complete : todo.complete }" v-on:click.prevent="removeTodo(index)">{{ todo.title }}</a></li>`
    });

let app = new Vue({
    el : '#app',
    data : {
            newTodo : {
                title : '',
                complete : false
            },
            todos : [
                {title : 'do work 1' , complete : true},
                {title : 'post some pic on instagram' , complete : false},
                {title : 'play some WOW' , complete : true}
                ],
                alert : {
                    title :'',
                    message : '',
                    show : false ,
                    type : ''
                }

        },
        methods : {
            addtodo(){
                if(this.newTodo != ''){
                    this.todos.push(this.newTodo);
                    this.newTodo = { title : '' , complete : false};
                    this.alert = {
                        title : 'DONE!',
                        message : 'New work successfuly added :)' ,
                        show : true ,
                        type : 'alert-success'
                    }
                } else {
                    
                }
            },
            removeTodo(index){
                this.todos[index].complete = ! this.todos[index].complete;
            }
        },
        computed : {
            completeTodos(){
                return this.todos.filter(todo => todo.complete);
            }

        }
});
