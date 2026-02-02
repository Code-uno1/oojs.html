/*  Question
Object basics 1

In this task you are provided with an object literal, and we want you to do some work on it.

To complete the task:

    Store the value of the name property inside the catName variable, using bracket notation.
    Run the greeting() method using dot notation (it will log the greeting to the console).
    Update the color property value to black.


const cat = {
    name: "Bertie",
    breed: "Cymric",
    color: "white",
    greeting: function () {
        console.log("Meow!");
    },
};

// My solution

1 Solution
const catName = cat["name"];

2 Solution

cat.greeting()

3 Solution

cat.color = "black";

*/

/* and in this "An object property can itself be an object" why can't we like declare it with const, but we end up declaring it with this const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
}; */
/* 
Object basics 2

In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands.

To complete the task:

    Create an object literal called band, which contains the following properties:
        name: A string representing the band name.
        nationality: A string representing the country the band comes from.
        genre: What type of music the band plays.
        members: A number representing the number of members the band has.
        formed: A number representing the year the band formed.
        split: A number representing the year the band split up, or false if they are still together.
        albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
            name: A string representing the name of the album.
            released: A number representing the year the album was released.

            Note: Include at least two albums in the albums array.
    Write a string to the variable bandInfo, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.

    my Solution for the second question
    
    const band = {
        name: "Sauti soul",
        nationality: "Kenyan",
        genre: "Afropop",
        members: ["Bien Aime", "Polycarp Otieno", "Savara Mudigi", "Willis Chimano"],
        formed: 2005,
        split: 3,
        albums: [
            album1: {
                name: "Mwanzo",
                released: 2008
    
            },
            album2: {
                name: "Sol Filosofia",
                released: 2011
            },
            album3: {
                name: "Live and Die in Afrika",
                released: 2015
            },
            album4: {
                name: "Afrikan Sauce",
                released: 2019
            },
            album5: {
                name: "Midnight Train",
                released: 2020
            }
        ],
        let bandInfo = `This is ${this.name} based in ${this.nationality} and it has been active since ${this.formed}. They do ${this.genre} and their was ${this.albums.album1.name} released on ${this.albums.album1.released}`
    
    }
*/
wait is this used instead of 
greeting: function () {
    console.log(`Hello said ${cat.name} the ${cat.breed}`); ? 



const cat = {
    name: "Bernice",
    breed: "Cymric",
    color: "white",
    greeting: function () {
        console.log(`Hello said ${this.name} the ${this.breed}`);
    },
};
 

const cat2 = {
    name: "Pete",
    breed: "x",
    color: "brown",
    greeting: function () {
        console.log(`Hello, said ${this.name} the ${this.breed.}`);
    },
};

cat.greeting();
cat2.greeting();