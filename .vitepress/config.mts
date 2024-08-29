import { defineConfig } from "vitepress";
import  footnote_plugin  from "markdown-it-footnote";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  base:'/',
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
      pattern: 'https://gitee.com/sunshinelikeyou/interview-notes/blob/master/:path'
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
        text: "Catagory",
        collapsed: false,
        items: [
          { text: "HTML", link: "/src/html.md" },
          { text: "Css", link: "/src/css" },
          { text: "Javascript", link: "/src/javascript.md" },
          { text: "TypeScript", link: "/src/typescript.md" },
          { text: "Vue", link: "/src/vue" },
          { text: "React", link: "/src/React.md" },
          { text: "前端工程化", link: "/src/engineering.md" },
          { text: "微信小程序", link: "/src/wxprogram.md" },
          { text: "Uniapp", link: "/src/uniapp.md" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
