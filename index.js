const table = document.getElementById("main-table");

window.addEventListener('load', async () => {

    
        const people = await fetch('https://swapi.dev/api/people/')
                .then((response) => response.json())
                .then((values) => {
                    const characters = values.results;
                    characters.forEach((character) => {
                        const name = character.name;
                        console.log('character name is ', name);
                        return name;
                    })
                })
                .catch (error => console.log('you got yerself an error in people promise', error));
               

        const planets = await fetch('https://swapi.dev/api/planets/')
                .then((response) => response.json())
                .then((planets) => {
                    const homeWorld = planets.results;
                    homeWorld.forEach((homeworld) => {
                        console.log('characters homeworld is ', homeworld.name);
                    })
                })
                .catch (error => console.log('you got yerself an error in planets promise', error));

        const type = await fetch('https://swapi.dev/api/species/')
                .then((response) => response.json())
                .then((type) => {
                    const species = type.results;
                    species.forEach((speciesType) => {
                    console.log('species is ', speciesType.name);
                    })
                })
                .catch (error => console.log('you got yerself an error in species promise', error));
           
            });

         

        
     
        

        
              
   

  
        // fetch('https://swapi.dev/api/planets/'),
        // fetch('https://swapi.dev/api/people/'),
        // fetch('https://swapi.dev/api/species/')

    //  fetch('https://swapi.dev/api/people/')
    //  .then((response) => response.json())
    //  .then((values) => {
    //      const characters = values.results;
    //      console.log('characters are ', characters );

    //      characters.map((person) => {
    //      const homeWorld = fetch(person.homeworld)
    //        .then((response) => response.json())
    //        .then((homeWorld) => {
    //             // console.log('homeworld value is ', homeWorld)
    //             const homeWorldName = homeWorld.name;
    //            console.log( person.name + "is from " + homeWorldName);
    //        })
    //      })
    //   })
    //   .catch (error => console.log('you got yerself an error ', error))


