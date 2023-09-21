import './assets/main.css'

import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

const app = createApp(App)
// App Configuration Example
// - App Level Error Handling
app.config.errorHandler = (err) => {
  /* handle error */
}

// - Registering component (only example)
// This makes the TodoDeleteButton available for use anywhere in our app.
// app.component('TodoDeleteButton', TodoDeleteButton)

// An application instance won't render anything until its .mount() method is called. 
// It expects a "container" argument, which can either be an actual DOM element or a selector string
// Here the #app selector is automatically set to be from index.html when creating the project with npm
app.mount('#app')

Multiple application instances
​

// You are not limited to a single application instance on the same page. 
// The createApp API allows multiple Vue applications to co-exist on the same page, 
// each with its own scope for configuration and global assets
// const app1 = createApp({
//     /* ... */
//   })
//   app1.mount('#container-1')
  
//   const app2 = createApp({
//     /* ... */
//   })
//   app2.mount('#container-2')