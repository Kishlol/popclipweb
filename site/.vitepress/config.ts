import { defineConfig } from "vitepress";
import imageFigures from "markdown-it-image-figures";
const { html5Media } = require("markdown-it-html5-media");
import { imgSize } from "@mdit/plugin-img-size";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PopClip",
  description: "Instant text actions for macOS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/icon128.png",
    nav: [
      {
        text: "Documentation",
        activeMatch:
          "^(/guide/|/ref/|/changelog|/dowload|/buy|/kb/|/terms|/privacy|/download)",
        link: "/guide/",
        // items: [
        //   { text: "User Guide", link: "/guide/" },
        //   { text: "Developer Reference", link: "/ref/" },
        // ],
      },
      {
        text: "Extensions",
        link: "https://pilotmoon.com/popclip/extensions/",
        // items: [
        //   { text: "Directory", link: "/x/" },
        //   { text: "Create Your Own", link: "/create/" },
        // ],
      },
      {
        text: "Support",
        items: [
          { text: "Support & Feedback", link: "/support" },
          { text: "PopClip Forum", link: "https://forum.popclip.app/" },
        ],
      },
    ],
    sidebar: {
      "/": [
        { text: "Introduction", link: "/guide/" },
        {
          text: "User Guide",
          collapsed: false,
          items: [            
            { text: "Installation", link: "/guide/install" },
            { text: "Basic Usage", link: "/guide/basics" },
            { text: "Actions", link: "/guide/actions" },
            { text: "Settings", link: "/guide/settings" },
            { text: "Extensions", link: "/guide/extensions" },
          ],
        },
        {
          text: "App Information",
          collapsed: false,
          items: [
            { text: "Download", link: "/download" },
            { text: "Buy", link: "/buy" },
            { text: "Version History", link: "/changelog", },
            { text: "Support & Feedback", link: "/support" },
          ],
        },
        {
          text: "Knowledge Base",
          collapsed: false,
          items: [
            { text: "Troubleshooting", link: "/kb/troubleshooting" },
            { text: "Known Issues", link: "/kb/compatibility" },
            { text: "FAQ", link: "/guide/faq" },
            {
              text: "Articles",
              collapsed: true,
              items: [
                { text: "Browsers", link: "/kb/compatibility" },
              ],
            },
          ],
        },
        {
          text: "Policies",
          collapsed: true,
          items: [
            { text: "Terms of License", link: "/terms.md" },
            { text: "Privacy Policy", link: "/privacy.md" },
          ],
        },
        {
          text: "Developer Reference",
          link: "https://github.com/pilotmoon/PopClip-Extensions",
        },
      ],
    },
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  head: [
    [
      "link",
      { rel: "shortcut icon", href: "/icon32.png", type: "image/png" },
    ],
  ],
  markdown: {
    config: (md) => {
      md.use(html5Media, {
        videoAttrs: "autoplay loop muted playsinline",
      });
      md.use(imageFigures, {
        figcaption: "title",
        copyAttrs: "^class$",
      });
      // md.use(imgSize);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "setapp-custom-banner",
      },
    },
  },
});
