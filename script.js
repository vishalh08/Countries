'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function () {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/all`);
  request.send();
  request.addEventListener('load', function () {
    const [...data] = JSON.parse(this.responseText);
    for (const i of data) {
      console.log(i);

      const html = `
   <article class="country">
          <img class="country__img" src="${i.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${i.name.common}</h3>
            <h3 class="country__region">${i.capital}</h3>
            <h4 class="country__region">${i.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +i.population / 1000000
            ).toFixed(1)}M</p>
            <p class="country__row"><span>🗣️</span>${data.languages}</p>
            
          </div>
        </article>
`;

      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    }
  });
};

// getCountryData('spain');
// getCountryData('portugal');
// getCountryData('india');
// getCountryData('usa');
getCountryData();

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };
// getCountryData('india');
