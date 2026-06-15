const { Plugin, Notice } = require("obsidian");

module.exports = class UrlCleanerPlugin extends Plugin {

  async onload() {

    this.addCommand({
      id: "clean-urls-current-note",
      name: "Clean tracking parameters from URLs in current note",

      editorCallback: (editor) => {

        const text = editor.getValue();

        const cleaned = text.replace(
          /https?:\/\/[^\s)\]]+/g,
          (url) => this.cleanUrl(url)
        );

        editor.setValue(cleaned);

        new Notice("URLs cleaned");
      }
    });

  }

  cleanUrl(url) {

    try {

      const parsed = new URL(url);

      const blacklist = [
        "fbclid",
        "gclid",
        "igshid",
        "mc_cid",
        "mc_eid",
        "rcm",
        "ref",
        "ref_src"
      ];

      const params = [...parsed.searchParams.keys()];

      for (const key of params) {

        if (
          key.startsWith("utm_") ||
          blacklist.includes(key)
        ) {

          parsed.searchParams.delete(key);

        }

      }

      return parsed.toString();

    }

    catch {

      return url;

    }

  }

}