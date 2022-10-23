import {getDirname, path} from '@vuepress/utils';
import markdownItPlugin from './markdownItPlugin';

// @ts-ignore
const __dirname = getDirname(import.meta.url);
const clientConfigFile = path.resolve(__dirname, './clientConfig.ts');

export default (options: any, ctx: any) => {
  return {
    name: 'crawlab-vuepress-plugin-mermaidjs',
    define: {
      // MERMAID_OPTIONS: options
    },
    extendsMarkdown(md: any, app: any) {
      md.use(markdownItPlugin);
    },
    clientConfigFile,
  };
}
