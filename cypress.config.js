
const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://payout-v2.arca.network/auth',
        watchForFileChanges: false,
        viewportHeight: 900,
        viewportWidth: 1400,
        testIsolation: false,
        // experimentalRunAllSpecs: true,
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
    },
});
    