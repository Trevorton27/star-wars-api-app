const tableDisplay = document.getElementById('table-display');
const table = document.getElementById('main-table');
const inputField = document.getElementById('input-field');
const searchResult = document.getElementById('search-results');
const searchTable = document.getElementById('main-row');
const clearSearchButtonHook = document.getElementById('button-hook');
const searchForm = document.getElementById('top-row');
const submitButton = document.getElementById('submitButton');
let rendered = false;
let clicked = false;

const getSpecies = async (speciesUrl) => {
  const response = await fetch(speciesUrl).then((response) => {
    return response.json();
  });

  const speciesInfo = response;
  const speciesName = speciesInfo.name;

  return speciesName;
};

const getHomeWorld = async (homeWorld) => {
  const response = await fetch(homeWorld).then((response) => {
    return response.json();
  });

  const worldInfo = response;
  const worldName = worldInfo.name;
  return worldName;
};

const getCharacterData = async (character) => {
  console.log(typeof character);
  const world = await getHomeWorld(character.homeworld);
  const species =
    character.species.length !== 0
      ? await getSpecies(character.species)
      : 'Biological';

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

async function renderDataOnLoad() {
  const getPeople = await fetch('https://swapi.dev/api/people/').then(
    (response) => response.json()
  );
  console.log('people api results: ', getPeople.results);
  const people = getPeople.results;
  people.forEach((character) => {
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
  });
}

const renderSearchData = async function () {
  const searchTerm = inputField.value;
  return await fetch('https://swapi.dev/api/people/?search=' + searchTerm)
    .then((response) => response.json())
    .then((response) => {
      const data = response.results;
      return data;
    })
    .then((data) => {
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
        tableHead2.textContent = 'Birth Date';
        tableHead3.textContent = 'Height';
        tableHead4.textContent = 'Mass';
        tableHead5.textContent = 'Homeworld';
        tableHead6.textContent = 'Species';

        rendered = true;
      }

      function renderButton() {
        const clearSearchButton = document.createElement('button');
        clearSearchButtonHook.appendChild(clearSearchButton);
        clearSearchButton.textContent = 'Clear Search Results';
        clearSearchButton.className = 'clearSearch';
        clearSearchButton.addEventListener('click', () => {
          window.location.reload();
        });
      }

      function renderNoResultsButton() {
        const clearSearchButton = document.createElement('button');
        clearSearchButtonHook.appendChild(clearSearchButton);
        clearSearchButton.textContent = 'Back To Main Page';
        clearSearchButton.className = 'clearSearch';
        clearSearchButton.addEventListener('click', () => {
          window.location.reload();
        });
      }

      if (rendered === false) {
        if (data.length === 0) {
          const noResults = document.createElement('div');
          searchTable.appendChild(noResults);
          noResults.className = 'noResultsDiv';
          noResults.textContent = `There were no results for "${searchTerm}". May the force be with you.`;
          searchForm.remove();
          renderNoResultsButton();
        } else {
          searchForm.remove();
          renderTableHeader();
          renderButton();
        }
      }
      console.log('data is ', data);
      data.forEach((data) => {
        getCharacterData(data).then((data) => {
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

          tableCell1.textContent = data.name;
          tableCell2.textContent = data.birthDate;
          tableCell3.textContent = data.height;
          tableCell4.textContent = data.mass;
          tableCell5.textContent = data.homeWorld;
          tableCell6.textContent = data.species;
          console.log('search return data: ', data);
        });
      });
      clicked = true;
      tableDisplay.remove();
    });
};

window.addEventListener('load', renderDataOnLoad());

inputField.addEventListener('keydown', function (e) {
  if (e.which === 13) {
    if (e.target.value !== '') {
      renderSearchData();
    } else {
      alert('Please enter a character name. May the force be with you.');
    }
  }
});

submitButton.addEventListener('click', () => {
  if (inputField.value !== '') {
    if (clicked === true) searchResult.textContent = '';
    renderSearchData();
    inputField.value = '';
    inputField.focus;
  }
});
