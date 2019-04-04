import './bootstrap';
import Users from './components/users.vue';
Vue.component('users-component', Users);
const app = new Vue({
    el: '#app',
    data : {
        title : "vuejs website"
    }
});
