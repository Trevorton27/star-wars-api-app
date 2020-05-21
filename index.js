const table = document.getElementById("main-table");

window.addEventListener('load', () => {

    const getCharacterInfo = fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(response => {
        console.log('thisn here is the response ', response)
        const characterInfo = response.results;
        console.log('character info is ', characterInfo);
        characterInfo.forEach((characters) => {
            const testRow = document.createElement('tr');
            table.appendChild(testRow);
    
            const tableCell1 = document.createElement('td');
            testRow.appendChild(tableCell1);
            const tableCell2 = document.createElement('td');
            testRow.appendChild(tableCell2);
            const tableCell3 = document.createElement('td');
            testRow.appendChild(tableCell3);
            const tableCell4 = document.createElement('td');
            testRow.appendChild(tableCell4);
            const tableCell5 = document.createElement('td');
            testRow.appendChild(tableCell5);
            const tableCell6 = document.createElement('td');
            testRow.appendChild(tableCell6);
    
            tableCell1.textContent = characters.name;
            tableCell2.textContent = characters.birth_year;
            tableCell3.textContent = characters.height;
            tableCell4.textContent = characters.mass;
            tableCell5.textContent = characters.homeworld;
            tableCell6.textContent = characters.species;
        }

        )
       

})
    .catch(error => console.log('you got yerself an error ', error))
})
