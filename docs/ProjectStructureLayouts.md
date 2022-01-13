# Project Structure Layouts

```text
--src
----views
------About.vue
------Contacts.vue
------Home.vue
----App.vue
----main.js
----router.js
```

- `App.vue`

```vue

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/contacts">Contacts</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
```

- `views/Home.vue`

```vue

<template>
  <div>
    <h1>This is a home page</h1>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
```

- `views/About.vue`

```vue

<template>
  <div>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
```

- `views/Contacts.vue`

```vue

<template>
  <div>
    <h1>This is a contacts page</h1>
  </div>
</template>

<script>
export default {
  name: "Contacts"
}
</script>
```

- `router.js`

```js

import Vue       from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/Contacts.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```

## Creating layout constructor

`layouts/AppLayout.vue`

```vue

<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
const defaultLayoutComponent = 'AppLayoutDefault'
export default {
  name: "AppLayout",
  computed: {
    layout() {
      const layoutComponent = this.$route.meta.layoutComponent || defaultLayoutComponent
      return () => import(`@/layouts/${ layoutComponent }.vue`)
    }
  }
}
</script>
```

```vue

<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayoutDefault   from './AppLayoutDefault'
import { markRaw, watch } from 'vue'
import { useRoute }       from 'vue-router'

export default {
  name: 'AppLayout',
  setup() {
    const layout = markRaw(AppLayoutDefault)
    const route = useRoute()
    watch(
        () => route.meta,
        async meta => {
          try {
            const component = await import(`@/layouts/${ meta.layout }.vue`)
            layout.value = component?.default || AppLayoutDefault
          } catch ( e ) {
            layout.value = AppLayoutDefault
          }
        },
        { immediate: true }
    )
    return { layout }
  }
}
</script>
```

## Creating layouts

- `layouts/AppLayoutLinks.vue`

```vue

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/contacts">Contacts</router-link>
  </div>
</template>

<script>
export default {
  name: "AppLayoutLinks"
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
```