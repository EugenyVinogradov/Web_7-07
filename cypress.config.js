const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8tq6sa',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "http://qamid.tmweb.ru/client/index.php",
    "retries": 1,
  },
});
