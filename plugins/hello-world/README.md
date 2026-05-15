# Hello World Plugin

This plugin is a simple demonstration plugin for Claude Code.

## Files

- `plugin.json` — Plugin manifest and metadata
- `index.js` — Plugin implementation

## Skill

The plugin exposes a single skill:

- `hello`

### Parameters

- `name` (string, optional) — The name to greet.

### Example

If the plugin is installed and invoked with `name: "Alice"`, it returns:

```text
Hello, Alice!
```

If no name is provided, it defaults to:

```text
Hello, World!
```
