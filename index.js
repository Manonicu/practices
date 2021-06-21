import {template,forEach} from "lodash-es"
const modules = import.meta.glob('./src/**/index.html')

const compiled = template('<% _.forEach(modules, function(module) { %><a href="<%- module.url %>"><%- module.name %></a><% }); %>');

document.querySelector(".js-list").innerHTML = compiled({
  'modules': Object.keys(modules).map(module => {
    return {
      url: module.replace("./", ""),
      name:module.split("/")[2]
    }
  })
})