import { App } from 'vue';
import * as Components from './components';

export const plugin = {
  install: (app: App) => {
    (Object.keys(Components) as (keyof typeof Components)[]).forEach(
      (component) => {
        app.component(component, Components[component]);
      },
    );
  },
};
