// from https://github.com/lunaceee/netlify-gotruejs-example-site/blob/master/src/index.js

import GoTrue from 'gotrue-js';

let auth;

// Instantiate the GoTrue auth client with an optional configuration
auth = new GoTrue({
  APIUrl: 'https://nostalgic-payne-051c14.netlify.app/.netlify/identity',
  audience: '',
  setCookie: false,
});

window.auth = auth

//sign up
document.querySelector("form[name='signup']").addEventListener("submit", e => {
  e.preventDefault();
  const form = e.target;
  console.log(form)
  if (!auth) {
    console.log('No auth')
  }

  const {
    email,
    password,
    campaign
  } = form.elements;

  auth
    .signup(email.value, password.value, {data: campaign.value})
    .then(response => console.log(`Response: ${JSON.stringify(response)}`))
    .catch(error => console.log(`Error: ${error}`))
});