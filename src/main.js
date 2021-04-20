
import { createApp } from 'vue';
import App from './App.vue';
import { VuelidatePlugin } from '@vuelidate/core';




// register router which was installed and define the routes we want to have in app
import { createRouter, createWebHistory } from 'vue-router'
import TheForm from './components/TheForm.vue'
import DisplayData from './components/DisplayData.vue'
import ViewMember from './components/viewMember.vue'
import UpdateForm from './components/UpdateForm.vue'
import DeleteComponent from './components/DeleteComponent.vue'
import LocalData from './components/LocalData.vue'
//import TheNavigation from './components/TheNavigation.vue'

const router = createRouter({
  // used to handle the previous pages visited e.g. back button (using the broswer built-in support)
  history: createWebHistory(),
  routes: [
    { path: '/', component: DisplayData },
    { path: '/addMember', component: TheForm },
    { path: '/addMember/:memberId', component: TheForm },
    { path: '/viewMember/:memberId', component: ViewMember },
    { path: '/updateForm/:memberId', component: UpdateForm },
    { path: '/deleteComponent/:memberId', component: DeleteComponent},
    { path: '/localData', component: LocalData},
    //{ path:'/displayMember/:id', component: DisplayMember }
  ],
});

export function somethingWithjQuery(){
  console.log($)
  }





const app = createApp(App)
app.use(router)
app.use(VuelidatePlugin)

app.mount('#app')