function enterCountryInfo() {
    let countryName = prompt('Введите название страны: ');
    let capitalName = prompt('Введите название столицы:');
    addCountry(countryName, capitalName);
}

function logCountryInfo() {
    let countryName = prompt('Введите название страны: ');
    console.log(getCountryInfo(countryName));
}

function logAllCountryInfos() {
    console.log(allCountry());
}

function deleteCountryInfo() {
    let countryName = prompt('Введите название страны: ');
    deleteCountry(countryName);
}