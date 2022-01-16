# Vue Modular Architecture

```text
src
--components
--modules
----cart
------store
--------index.js
--------mutation-types.js
--------mutations.js
--------state.js
------views
------index.js
------Module.vue
------router.js
----products
------views
------index.js
------Module.vue
------router.js

--plugins
--router
--store
--views
--App.vue
--main.js
--register-modules.js
```

## src/modules/products

- index.js

```js
import router from "./router"

export default {
  router
}
```

- router.js

```js
const Module = () => import("./Module.vue")
const Module = () => import("./views/Home.vue")
const Module = () => import("./views/Product.vue")

const moduleRoute = {
  path: "/products",
  componet: Module,
  children: [
    {
      path: "/",
      component: Home
    },
    {
      path: ":id",
      component: Product
    }
  ]
}

export default router => {
  router.addRoutes([moduleRoute]);
}
```

- Module.vue

```vue

<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>
```

## src/modules/cart

- index.js

```js
import router from "router"
import store  from "store"

export default {
  store,
  router
}
```

- router.js

```js
const Module = () => import("./Module.vue")
const Home = () => import("./views/Home.vue")

const moduleRoute = {
  path: "/cart",
  component: Module,
  children: [
    {
      path: "/",
      component: Home
    }
  ]
}

export default (router) => {
  router.addRoutes([moduleRoute])
}
```

- Module.vue

```vue

<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>
```

- store.index.js

```js
import state     from "./state"
import mutations from "./mutations"

export default {
  namespaced: true,
  state,
  mutations
}
```

## register-modules.js

```js
import router from "./router"
import store  from "./store"

const registerModule = (name, module) => {
  if ( module.store ) {
    store.registerModule(name, module.store)
  }

  if ( module.router ) {
    module.router(router)
  }
}


/**
 * @param modules
 * @example
 *  reqisterModules({
 *    products: productsModule,
 *    cartL cartModule
 *  })
 */
export const registerModules = modules => {
  Object.keys(modules).forEach(moduleKey => {
    const module = modules[moduleKey]
    registerModule(noduleKey, module)
  })
}
```

## main.js

```js
import cartModule          from "./modules/cart"
import productsModule      from "./modules/products"
import { registerModules } from "./register-modules"

registerModules({
  products: productsModule,
  cart: cartModule
})

```