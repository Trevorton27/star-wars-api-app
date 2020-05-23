const table = document.getElementById("main-table");

window.addEventListener('load', () => {

    const urls = [
        fetch('https://swapi.dev/api/planets/'),
        fetch('https://swapi.dev/api/people/'),
        fetch('https://swapi.dev/api/species/')
    ];
    Promise.all(urls)
        .then(responses => {
            return responses.map(response => {
                return response.json();
            }
            )
        })
        .then(promises => {
            console.log('thisn here is the response ', promises);
            console.log(typeof promises);

        })
        .then(Promise.resolve(urls)).then(promise => {
            console.log('your promises, sir ', promise);
               
            
})
.catch (error => console.log('you got yerself an error ', error))
});


