import { defineConfig } from "vitepress";
import  footnote_plugin  from "markdown-it-footnote";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/", // 部署站点的基础路径,根据你的部署环境调整
  lastUpdated: true,
  title: "Interview Question",
  description: "Record common front interview questions",
  head: [
    [
      "link",
      { rel: "icon", href: "https://vitepress.dev/vitepress-logo-mini.svg" },
    ],
  ],
  markdown: {
    lineNumbers: true,
    config:(md)=>{
      md.use(footnote_plugin)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/sunshinelikeyou/interview-notes/blob/master/:path',
    },
    logo: "https://vitepress.dev/vitepress-logo.svg",
    nav: [
      { text: "Home", link: "/" },
    ],
    search: {
      provider: 'local'
    },  
    sidebar: [
      {
        items: [
          { text: "介绍", link: "/src/introduce.md" },
        ],
      },
      {
        text: "技术栈",
        collapsed: false,
        items: [
          { text: "HTML", link: "/src/html.md" },
          { text: "Css", link: "/src/css" },
          { text: "Javascript", link: "/src/javascript.md" },
          { text: "TypeScript", link: "/src/typescript.md" },
          { text: "Vue", link: "/src/vue" },
          { text: "React", link: "/src/react.md" },
          { text: "前端工程化", link: "/src/engineering.md" },
          { text: "微信小程序", link: "/src/wxprogram.md" },
          { text: "Uniapp", link: "/src/uniapp.md" },
          { text: "算法", link: "/src/algorithm.md" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/sunshinelikeyou/interview-notes" },
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 90" version="1.1"><title>logo</title><desc>Created with Sketch.</desc><g id="LOGO" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard" transform="translate(-532.000000, -431.000000)"><g id="logo" transform="translate(532.000000, 431.000000)"><g id="Group"><circle id="Combined-Shape" fill="#C71D23" cx="44.8544363" cy="44.8544363" r="44.8544363"/><path d="M67.558546,39.8714292 L42.0857966,39.8714292 C40.8627004,39.8720094 39.8710953,40.8633548 39.8701949,42.0864508 L39.8687448,47.623783 C39.867826,48.8471055 40.8592652,49.8390642 42.0825879,49.8393845 C42.0827874,49.8393846 42.0829869,49.8393846 42.0831864,49.8387862 L57.5909484,49.838657 C58.8142711,49.8386283 59.8059783,50.830319 59.8059885,52.0536417 C59.8059885,52.0536479 59.8059885,52.053654 59.8059701,52.0536602 L59.8059701,52.6073539 L59.8059701,52.6073539 L59.8059701,53.161115 C59.8059701,56.8310831 56.8308731,59.80618 53.160905,59.80618 L32.1165505,59.80618 C30.8934034,59.806119 29.9018373,58.8145802 29.9017425,57.5914331 L29.9011625,36.5491188 C29.9008781,32.8791508 32.8758931,29.9039718 36.5458611,29.9038706 C36.5459222,29.9038706 36.5459833,29.9038706 36.5460443,29.9040538 L67.5523638,29.9040538 C68.77515,29.9026795 69.7666266,28.9118177 69.7687593,27.6890325 L69.7721938,22.1516997 C69.774326,20.928378 68.7832423,19.9360642 67.5599198,19.9353054 C67.5594619,19.9353051 67.5590039,19.935305 67.558546,19.9366784 L36.5479677,19.9366784 C27.3730474,19.9366784 19.935305,27.3744208 19.935305,36.549341 L19.935305,67.558546 C19.935305,68.7818687 20.927004,69.7735676 22.1503267,69.7735676 L54.8224984,69.7735676 C63.079746,69.7735676 69.7735676,63.079746 69.7735676,54.8224984 L69.7735676,42.0864509 C69.7735676,40.8631282 68.7818687,39.8714292 67.558546,39.8714292 Z" id="G" fill="#FFFFFF"/></g></g></g></g></svg>',
        }, 
        link: "https://gitee.com/sunshinelikeyou/interview-notes",
         ariaLabel: 'gitee link'
       },
    ],
  },
});
