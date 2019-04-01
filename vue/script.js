window.Event = new Vue();
Vue.component('alert' , {
    props : ['title' , 'message' , 'type'],
    template : `<div :class="['alert' , type]" role="alert">
        <button type="button" class="close" @click="$emit('close')">
            <span aria-hidden="true">×</span>
        </button>
        <strong>{{ title }}</strong>{{ message }}
      </div>`,

});

    Vue.component('todos' , {
        props: ['todos'],
        template : `   <ul class="list-group">
       <todo v-for="(todo , index) in todos" :todo="todo" :index="index"></todo>
    </ul>`
    });
    Vue.component('todo' , {
        props : ['todo' , 'index'],
        template : `<li class="list-group-item"><a href="#" :class="{ complete : todo.complete }" v-on:click.prevent="removeTodo(index)">{{ todo.title }}</a></li>`,
        methods :{
            removeTodo(index) {
                Event.$emit('remove' , index);
            }
        }
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
                if(this.newTodo.title != '') {
                    this.todos.push(this.newTodo);
                    this.newTodo = { title : '' , complete : false};
                    this.alert = {
                        title : 'DONE!',
                        message : 'New work successfuly added :)' ,
                        show : true ,
                        type : 'alert-success'
                    }
                } else {
                    this.alert = {
                        title : 'ERROR!',
                        message : 'please make sure that you write something' ,
                        show : true ,
                        type : 'alert-danger'
                    }
                }
            },
            removeTodo(index){
                this.todos[index].complete = ! this.todos[index].complete;
            }
        },
        computed : {
            completeTodos(){
                return this.todos.filter(todo => todo.complete);
            },
            showCompleteBox(){
                return this.todos.filter(todo => todo.complete).length > 0; 
            }

        },
        created(){
            Event.$on('remove' , (index) => {
                this.removeTodo(index);
            });
        }
});
