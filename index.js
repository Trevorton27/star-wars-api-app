const table = document.getElementById("main-table");

window.addEventListener('load', () => {


        // fetch('https://swapi.dev/api/planets/'),
        // fetch('https://swapi.dev/api/people/'),
        // fetch('https://swapi.dev/api/species/')

     fetch('https://swapi.dev/api/people/')
     .then((response) => response.json())
     .then((values) => {
         const characters = values.results;
         console.log('characters are ', characters );

         characters.map((person) => {
           const homeWorld = fetch('https://swapi.dev/api/planets/')
           
           .then((response) => response.json())
           .then((homeWorld) => {
               console.log('homeworld is ', homeWorld);
           })
         })
      })
      .catch (error => console.log('you got yerself an error ', error))
});


