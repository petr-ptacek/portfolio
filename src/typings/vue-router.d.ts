// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
  }
}