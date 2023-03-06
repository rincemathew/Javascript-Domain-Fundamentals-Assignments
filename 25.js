// Write a Javascript program to display the status (I.e. display book name, author name & reading status) of books. You are given an object library in the code's template. It contains a list of books with the above mentioned properties.Your task is to display the following:

const library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

function displayStatus(library){
    for(let i=0; i<library.length; i++){
        if(library[i].readingStatus==true){
            console.log("Already read "+library[i].title+" by "+library[i].author);
        }else{
            console.log("You still need to read "+library[i].title+" by "+library[i].author);
        }
        console.log("\n");
    }
}

displayStatus(library)
