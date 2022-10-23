import {defineComponent, h, PropType} from 'vue';
import mermaid, {Config} from 'mermaid';

type Theme = 'dark' | 'default' | 'forest' | 'neutral' | 'null';

const MermaidComponent = defineComponent({
  name: 'Mermaid',
  props: {
    id: {
      type: String,
      required: false,
      default() {
        return `diagram_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
      }
    },
    graph: {
      type: String,
      required: true
    },
    style: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    },
    theme: {
      type: String as PropType<Theme>,
      default: 'base',
    },

  },
  render(props: { id: string; graph: string; style: object; theme: Theme; }) {
    const style = {
      width: '100%',
      ...props.style
    };

    return h('div', {
      style,
      class: 'cl-mermaid',
    }, []);
  },
  data(): { observer?: MutationObserver; darkMode: boolean } {
    return {
      observer: undefined,
      darkMode: false,
    };
  },
  methods: {
    updateDarkMode() {
      const html = document.querySelector('html');
      if (!html) return;
      if (
        (html.getAttribute('class') || '')?.indexOf('dark') > -1 ||
        (html.getAttribute('data-theme') || '')?.indexOf('dark') > -1
      ) {
        this.darkMode = true;
        return;
      }
      this.darkMode = false;
    },
    renderGraph() {
      const element = this.$el;
      console.debug(this.id, JSON.parse(JSON.stringify(this.config)));
      mermaid.initialize(this.config);
      mermaid.mermaidAPI.setConfig(this.config);
      mermaid.render(this.id, decodeURIComponent(this.graph), (svgCode: any) => {
        element.innerHTML = svgCode;
      });
    },
  },
  computed: {
    html() {
      return document.querySelector('html');
    },
    themeVariables() {
      return {
        darkMode: this.darkMode,
        primaryColor: this.darkMode ? '#409eff' : '#d9ecff',
      };
    },
    config() {
      return {
        startOnLoad: false,
        theme: this.theme,
        themeVariables: {
          ...this.themeVariables,
          darkMode: this.darkMode,
        }
      } as Config;
    }
  },
  mounted() {
    this.observer = new MutationObserver(() => {
      this.updateDarkMode();
      this.renderGraph();
    });
    if (!this.html) return;
    this.observer?.observe(this.html, {attributes: true});

    setTimeout(() => {
      this.updateDarkMode();
      this.renderGraph();
    }, 0);
  },
  unmounted() {
    this.observer?.disconnect();
  },
});

export {MermaidComponent};
