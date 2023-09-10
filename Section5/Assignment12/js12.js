const companiesElement = document.querySelector(".companies");

// Write an HTML template string...
// li with class "company"
// h3 with content "1."
// img with src "https://assets.codepen.io/6060109/salaries-icon-google.png"
// h3 with content "Google"
// h3 with content "$130k"
const newCompanyHTML = `
  <li class="company">
    <h3>1.</h3>
    <img src="https://assets.codepen.io/6060109/salaries-icon-google.png">
    <h3>Google</h3>
    <h3>$130k</h3>
  </li>
`;

companiesElement.innerHTML += newCompanyHTML;
