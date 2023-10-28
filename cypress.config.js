import { defineConfig } from "cypress";
import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor";
import webpack from "@cypress/webpack-preprocessor";
import * as dotenv from 'dotenv';
const { defineConfig } = require("cypress");

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config:
)
module.exports = defineConfig({
  e2e: {
    specPattern:"**/*.feature",
    baseUrl:"https://parabank.parasoft.com/parabank/index.htm",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
