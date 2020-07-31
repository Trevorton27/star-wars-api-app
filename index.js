const tableDisplay = document.getElementById("table-display");
const table = document.getElementById("main-table");
const inputField = document.getElementById("input-field");
const searchResult = document.getElementById("search-results");
const searchTable = document.getElementById("main-row");
let rendered = false;
let clicked = false;
const getSpecies = async (speciesUrl) => {
    const response = await fetch(speciesUrl)
        .then((response) => {

            return response.json();
        });

    const speciesInfo = response;
    const speciesName = speciesInfo.name;

    return speciesName;

}
window.addEventListener('load', async () => {

    const getPeople = await fetch('https://swapi.dev/api/people/')
        .then((response) => response.json());
    console.log('people api results: ', getPeople.results);
    const people = getPeople.results;

    people.forEach((character) => {

        const getHomeWorld = async (homeWorld) => {
            const response = await fetch(homeWorld)
                .then((response) => {
                    return response.json();
                });

            const worldInfo = response;
            const worldName = worldInfo.name;
            return worldName;
        };

       

        const getCharacterData = async (character) => {
            console.log(typeof character);
            const world = await getHomeWorld(character.homeworld);
            const species = character.species.length === 0 ? "Humanoid" : await getSpecies(character.species);

            const tableData = {
                name: character.name,
                height: character.height,
                mass: character.mass,
                homeWorld: world,
                species: species,
                birthDate: character.birth_year
            };
            return tableData;
        };

        getCharacterData(character).then((tableData) => {

            const tableRow = document.createElement('tr');
            table.appendChild(tableRow);

            const tableCell1 = document.createElement('td');
            tableRow.appendChild(tableCell1);
            const tableCell2 = document.createElement('td');
            tableRow.appendChild(tableCell2);
            const tableCell3 = document.createElement('td');
            tableRow.appendChild(tableCell3);
            const tableCell4 = document.createElement('td');
            tableRow.appendChild(tableCell4);
            const tableCell5 = document.createElement('td');
            tableRow.appendChild(tableCell5);
            const tableCell6 = document.createElement('td');
            tableRow.appendChild(tableCell6);

            tableCell1.textContent = tableData.name;
            tableCell2.textContent = tableData.birthDate;
            tableCell3.textContent = tableData.height;
            tableCell4.textContent = tableData.mass;
            tableCell5.textContent = tableData.homeWorld;
            tableCell6.textContent = tableData.species;
        });
    })
});

const returnValue = async function () {
    return await fetch('https://swapi.dev/api/people/?search=' + inputField.value)
        .then(response => response.json())
        .then(response => {
            // console.log( response.results);
            const data = response.results;
            return data;
        })
        .then((data) => {

            console.log("data is ", data);
            function renderTableHeader() {

                const tableHead1 = document.createElement('th');
                searchTable.appendChild(tableHead1);
                const tableHead2 = document.createElement('th');
                searchTable.appendChild(tableHead2);
                const tableHead3 = document.createElement('th');
                searchTable.appendChild(tableHead3);
                const tableHead4 = document.createElement('th');
                searchTable.appendChild(tableHead4);
                const tableHead5 = document.createElement('th');
                searchTable.appendChild(tableHead5);
                const tableHead6 = document.createElement('th');
                searchTable.appendChild(tableHead6);

                tableHead1.textContent = 'Name';
                tableHead2.textContent = 'Height';
                tableHead3.textContent = 'Mass';
                tableHead4.textContent = 'Hair Color';
                tableHead5.textContent =  'Homeworld';
                tableHead6.textContent = 'Species';

                tableDisplay.remove();
                table.remove();
                rendered = true;
            }
            if (rendered === false) {
                renderTableHeader();
            }
            console.log(data);
         
            data.forEach((data) => {
                const species =   getSpecies(data.species)
                const searchReturnData = {
                    name: data.name,
                    height: data.height,
                    mass: data.mass,
                    hairColor: data.hair_color,
                    species: species 
                }

                console.log("getSpecies() is returning ", getSpecies());

                const tableRow = document.createElement('tr');
                searchResult.appendChild(tableRow);

                const tableCell1 = document.createElement('td');
                tableRow.appendChild(tableCell1);
                const tableCell2 = document.createElement('td');
                tableRow.appendChild(tableCell2);
                const tableCell3 = document.createElement('td');
                tableRow.appendChild(tableCell3);
                const tableCell4 = document.createElement('td');
                tableRow.appendChild(tableCell4);
                const tableCell5 = document.createElement('td');
                tableRow.appendChild(tableCell5);
                const tableCell6 = document.createElement('td');
                tableRow.appendChild(tableCell6);

                tableCell1.textContent = searchReturnData.name;
                tableCell2.textContent = searchReturnData.height;
                tableCell3.textContent = searchReturnData.mass;
                tableCell4.textContent = searchReturnData.hairColor;
                tableCell5.textContent = 'Hey you guys!';
                tableCell6.textContent = searchReturnData.species;
                console.log('search return data: ', searchReturnData);

                clicked = true;
            });
        })
}

document
    .getElementById("submitButton")
    .addEventListener('click', () => {

        if (inputField.value !== '') {
            if (clicked === true) searchResult.textContent = '';
            returnValue();
            inputField.value = "";
            inputField.focus;
        } else {
            alert('Please enter a character name. May the force be with you.');
        }
    })