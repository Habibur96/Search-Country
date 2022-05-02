
const loadCountries = () => {

    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
    // .then(data => console.log(data))
}

loadCountries();

const displayCountries = countries => {
    // console.log(countries);
    const a = document.getElementById('country')
    // for (const country of countries) {
    countries.forEach(country => {

        const div = document.createElement('div');
        div.classList.add('country')
        // div.style.color = 'green'
        // div.style.textAlign = 'center'

        div.innerHTML = `
        <h4>Country Name: ${country.name.common}<h4>
        <p>Capital: ${country.capital} </p>
        <button onclick="loadCountryName('${country.name.common}')">Details</button>`
        a.appendChild(div);
    })

}

const loadCountryName = name => {

    console.log(name);
    const url = `https://restcountries.com/v3.1/name/${name}`

    // console.log(url)
    fetch(url)

        .then(res => res.json())

        .then(data => displayCountryDetails(data[0]));
    // .then(data => console.log(data[0]))


}

const displayCountryDetails = country => {
    // console.log(country)
    // const h2 = document.createElement('h2')
    const v = document.getElementById('country-detail');
    v.innerHTML = `<h3>Country Nmae: ${country.name.common}</h3>
    <h4>Population: ${country.population}</h4>
    <h4>Capital: ${country.capital}</h4>
    <img src="${country.flags.png}">
    `

}


