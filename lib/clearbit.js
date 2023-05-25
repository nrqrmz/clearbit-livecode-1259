const authorization = "<your API key>";
// TODO
const name1 = document.getElementById("userName");
const email1 = document.getElementById("userEmail");
const bio1 = document.getElementById("userBio");
const location1 = document.getElementById("userLocation");

const form = document.querySelector('#clearbitForm');
const input = document.getElementById('clearbitEmail');
console.log(form);

const stalker = (email) => {
  const url = `https://person.clearbit.com/v1/people/email/${email}`;
  fetch(url, {
    headers: { Authorization: authorization }
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      name1.innerText = data.name.fullName;
      location1.innerText = data.location;
      bio1.innerText = data.geo.state;
      email1.innerText = data.email;
    })
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  stalker(input.value);
});
