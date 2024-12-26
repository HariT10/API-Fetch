
// fetch = Function used for making HTTP requests fetch resources

// fetch (url, {options})

//the fetching part
//fetchData("https://pokeapi.co/api/v2/pokemon/pikachu")

        //.then(response => console.log(response))
        //.then(response => response.json())

        /*
        .then(response => {

            if(!response.ok){

                throw new Error("ERROR! Could not get");

            }

            else{
                return response.json();
            }


        })


        .then(data => console.log(data))

        //to catch errors
        .catch(error => console.error(error))


        */

//fetchData();

async function fetchData(){


    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        //const response = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemonName}');
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){

            throw new Error("ERROR");

        }

        const data = await response.json();

        //console.log(data);

        const pokemonSprite = data.sprites.front_default;

        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;

        imgElement.style.display = "block";


    } catch(error){

        console.error(error);


    }



}
