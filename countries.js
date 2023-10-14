let countrysH = {};

function addCountry(countryName, capitalName) {
    countrysH[countryName] = capitalName;
}


function deleteCountry(countryName) {
    delete countrysH[countryName];
}


function getCountryInfo(countryName) {
    if (countryName in countrysH)
        return 'страна: ' + countryName + ' столица: ' + countrysH[countryName];
    else
        return 'нет информации о стране ' + countryName + '!';
}


function allCountry() {
    let countryS = '';
    for (let key in countrysH) {
        countryS = countryS + getCountryInfo(key) + '\n';
    }
    return countryS;
}


