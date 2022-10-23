import markdownItFence from './markdownItFence';

export default (md: any) => {
  return markdownItFence(md, 'mermaid-fence', {
    render: (tokens: any, idx: any, _options: any, env: any, self: any) => {
      const token = tokens[idx];
      const {content} = token;

      let encoded = encodeURIComponent(content);
      return `<cl-mermaid graph="${encoded}"></cl-mermaid>`;
    },
    validate: (params: any) => {
      return params.trim().split(' ').includes('mermaid');
    }
  });
};
