import {defineClientConfig} from '@vuepress/client';
import {MermaidComponent} from './mermaidComponent';

export default defineClientConfig({
  enhance({app, router, siteData}) {
    app.component('ClMermaid', MermaidComponent);
  },
});
