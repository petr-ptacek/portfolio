# Project Structure

## Source folder structure

```text
src
-- assets
-- common
-- layouts
-- middlewares
-- modules
-- plugins
-- router
-- services
-- static
-- store
-- views
```

## Assets

Here we want to save `fonts`, `icons`, `styles`, etc.

## Common

Common files. It could to be separated into multiple inner folders: `components`, `mixins`, `directives`, etc, or single
files: `functions.ts`, `helpers.ts`, `constants.ts`, `config.ts`

## Layouts

You can save your app layout in this directory. `AppLayout.vue`

More in this [article](https://itnext.io/vue-tricks-smart-layouts-for-vuejs-5c61a472b69b)

## Middlewares

This directory closely works with **vue router**. Store **navigation guards**

```js
export default function checkAuth(next, isAuthenticated) {
  if ( isAuthenticated ) {
    next('/')
  } else {
    next('/login');
  }
}
```

and use it inside **vue-router**

```js
import Router    from 'vue-router'
import checkAuth from '../middlewares/checkAuth.js'

const isAuthenticated = true

const router = new Router({
  routes: [],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  checkAuth(next, isAuthenticated)
});
```

More in this [article](https://itnext.io/vue-tricks-smart-router-for-vuejs-93c287f46b50)

## Modules

This is the core of our application. Here we store all our modules -- logically separated parts of our application.

* an inner components folder where you can save your vue components
* test folder (I prefer to keep all related tests in the module)
* `store.ts` or store directory, where you keep your store module
* other files related to this module. It could be helper functions related only to the module.

```text
src
--modules
----orders
------__tests__
------components
--------OrderList.vue
--------OrderDetails.vue
------store
--------actions.ts
--------getters.ts
--------mutations.ts
--------state.ts
------helpers.ts
------types.ts
```

## Services

You can create and save an **API connections** service, **localStorage** manager service, etc

## Static

Usually, you do not need this folder. It could be used to save some dummy data.

## Router

Inside this directory you can store all files related to `vue-router`. It could be just `index.ts` with router and
routes in one place (in this case it probably a good idea to store this file in src root). _I prefer to separate router
and routes into two different files to avoid mess._

## Views

Second most important folder in our application. Here are all entry points for application routes. You can
have `home/about/orders` routes. Respectively in the `views` folder you should have `Home.vue` `About.vue` `Orders.vue`