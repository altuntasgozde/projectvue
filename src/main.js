import './assets/main.css'
import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import "primevue/resources/themes/lara-light-indigo/theme.css";
import App from './App.vue'
import router from './router'
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const app = createApp(App)

app.use(router) 
app.use(PrimeVue)

app.component('Button', Button);
app.component('InputText', InputText);
app.component('DataTable', DataTable);
app.component('Column', Column);

app.mount('#app')
