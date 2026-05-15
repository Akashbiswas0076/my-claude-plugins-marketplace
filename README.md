# Claude Code Plugin Marketplace

A custom Claude Code plugin marketplace containing a simple hello-world plugin and a collection of bundled plugin metadata.

## Included files

- `marketplace.json` — Marketplace manifest defining available plugins
- `plugins/hello-world/plugin.json` — Plugin metadata for a hello-world plugin
- `plugins/hello-world/index.js` — Simple plugin implementation

## Hello World Plugin

The hello-world plugin exposes a single skill named `hello`, which returns a greeting string:

```js
hello: {
  description: "Say hello to someone",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "The name to greet"
      }
    }
  },
  execute: async (params) => {
    const name = params.name || "World";
    return `Hello, ${name}!`;
  }
}
```

## Publishing

The repository has been pushed to GitHub at:

https://github.com/Akashbiswas0076/my-claude-plugins-marketplace
