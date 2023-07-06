import "./style.css";
import ejs from "ejs";
import { jsonCv } from "./sample-json";
import { removeIndent } from "./helper";

const heading = `# <%= name %>
## <%= title %>
`;

const experiencePretty = `
<%if (typeof experience !== 'undefined' && typeof experience.jobs !== 'undefined') {%>
  # Experiencia / Carrera
  <% for(var i=0; i < experience.jobs.length; i++) { %>
    ## <%= experience.jobs[i].organization.name %>
    <%= experience.jobs[i].organization.description %>
  <% } %>
<% } %>
`;

const experience = removeIndent(experiencePretty);

console.log(experience);

const templatePretty = `
${heading}
${experience}
`;

const template = removeIndent(templatePretty);

const output = ejs.render(template, jsonCv);

console.log(output);
