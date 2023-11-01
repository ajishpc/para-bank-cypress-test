import { defineConfig } from "cypress";
import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor";
import webpack from "@cypress/webpack-preprocessor";
import * as dotenv from 'dotenv';

dotenv.config()

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config:Cypress.PluginConfigOptions
):Promise<Cypress.PluginConfigOptions>{
  //this is required for the preprocessor to be able to generate json reports
  await addCucumberPreprocessorPlugin(on,config)

  on('task',{
    log(message){
      console.log(message.txt, message.value)
      return null
    },
  }),
  on('file:preprocessor',
    webpack({
      webpackOptions:{
        resolve:{
          extensions:[".ts",".js"],
        },
        module:{
          rules:[
            {
              test: /\.ts$/,
              exclude:[/node_modules/],
              use:[
                {
                  loader:"ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use:[
                {
                  loader:"@badeball/cypress-cucumber-preprocessor/webpack",
                  options:config,
                },
              ],
            },
          ],
        },
      },
    }));
    return config
}
export default defineConfig({
  defaultCommandTimeout:20000,
  viewportWidth:1000,
  viewportHeight:600,
  env:{
    username:process.env.USERNAME,
    password:process.env.PASSWORD,

  },
  e2e: {
    specPattern:"cypress/e2e/features/**/*.feature",
    baseUrl:"https://parabank.parasoft.com",
    includeShadowDom:true,
    setupNodeEvents,
  },
});
