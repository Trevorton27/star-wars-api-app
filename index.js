const table = document.getElementById("main-table");

window.addEventListener('load', () => {

    const getCharacterInfo = fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(response => console.log('thisn here is the response ', response))
    .then(response => {

        const characterInfo = response.data.results;
        console.log('character info is ', characterInfo);

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

        tableCell1.textContent = characterInfo;
        tableCell2.textContent = null;
        tableCell3.textContent = null;
        tableCell4.textContent = null;

})
    .catch(error => console.log('you got yerself an error ', error))
})
