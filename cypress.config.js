const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hbq2gb",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
