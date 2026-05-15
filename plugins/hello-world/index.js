// Hello World Plugin for Claude Code

function hello(name = "World") {
  return `Hello, ${name}!`;
}

// Export the skill
module.exports = {
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
      return hello(name);
    }
  }
};