Vue.component ('jumbotron' , {
    template : `           
     <div class="jumbotron">
     <slot name="alert"></slot>
    <slot name="title"></slot>
    <p><slot></slot></p>
    <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
  </div>`
});

Vue.component('panel' , {
    template : `
    <div class="panel panel-success"> 
    <div class="panel-heading">
         <h3 class="panel-title"><slot name="title"></slot></h3>
    </div>
          <div class="panel-body">
               <slot></slot>
          </div>
</div>
    `
})


new Vue({
    el:'#app'
})