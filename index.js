const table = document.getElementById("main-table");
const inputField = document.getElementById("input-field");
const searchResult = document.getElementById("search-results");


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

                const worldInfo =  response;
                const worldName = worldInfo.name;
                return worldName;
            };
        
        const getSpecies = async (speciesUrl) => {
            const response = await fetch(speciesUrl)
                .then((response) => {
                    
                    return response.json();
                });

                const speciesInfo = response;
                const speciesName = speciesInfo.name;

                return speciesName;
               
                }
           
        const getCharacterData = async (character) => {
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

const returnValue = async function() {
  return  await fetch('https://swapi.dev/api/people/?search=' + inputField.value )
    .then(response => response.json())
    .then(response => {
    
      const data = response.results;
      console.log('data value: ', data);

      const searchReturnData = {
          name: data.name,
          height: data.height,
          mass: data.mass,
          hairColor: data.hair_color
      }

      return searchReturnData;
    //   console.log(data);
    //   return data.map((character) => {
    //     //   console.log('character values is: ', character);
    //       return character;
    //   })
    });
};

document
    .getElementById("submitButton")
    .addEventListener("click", () => {
        // console.log("I'm working");
        // console.log("input value is ", inputField.value);
         returnValue().then((searchReturnData) => {
            document.getElementById('')
            // console.log('return value is: ', character);
            // console.log('returnValue() returns: ', character);
          
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

            tableCell1.textContent = searchReturnData.name;
            // tableCell2.textContent = name.height;
            // tableCell3.textContent = name.mass;
            // tableCell4.textContent = name.hair_color;
          console.log('search return data: ', searchReturnData);

           
        });
    })

    console.log(returnValue());
