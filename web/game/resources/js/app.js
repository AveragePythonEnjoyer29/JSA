const img = document.getElementById("view");
const title = document.getElementById("title");
const uinput = document.getElementById("input");
const textbox = document.getElementById("textbox");

const nodes = [
    {
        "title": "gebouw",
        "description": "Je staat voor een gebouw",
        "options": {
            "north": "0",
            "east": "0",
            "south": "1",
            "west": "0"
        },
        "src": "resources/img/0.jpg"
    },

    {
        "title": "gang",
        "description": "Je staat voor in de gang",
        "options": {
            "north": "0",
            "east": "5",
            "south": "4",
            "west": "2"
        },
        "src": "resources/img/1.jpg"
    },
    {
        "title": "gang",
        "description": "Je staat voor een gesloten deur",
        "options": {
            "north": "2",
            "east": "0",
            "south": "3",
            "west": "2"
        },
        "src": "resources/img/2.jpg"
    },
    {
        "title": "lokaal 95",
        "description": "Je gaat het lokaal binnen",
        "options": {
            "north": "2",
            "east": "0",
            "south": "0",
            "west": "0"
        },
        "src": "resources/img/3.jpg"
    },
    {
        "title": "lokaal 91",
        "description": "Je bent in een lokaal",
        "options": {
            "north": "0",
            "east": "5",
            "south": "4",
            "west": "2"
        },
        "src": "resources/img/4.jpg"
    },
    {
        "title": "gang",
        "description": "Je staat in de gang",
        "options": {
            "north": "10",
            "east": "6",
            "south": "5",
            "west": "1"
        },
        "src": "resources/img/5.jpg"
    },
    {
        "title": "gang",
        "description": "Je staat voor de was droger",
        "options": {
            "north": "6",
            "east": "7",
            "south": "11",
            "west": "5"
        },
        "src": "resources/img/6.jpg"
    },
    {
        "title": "gang",
        "description": "Je staat voor lokaal 93",
        "options": {
            "north": "9",
            "east": "7",
            "south": "8",
            "west": "6"
        },
        "src": "resources/img/7.jpg"
    },
    {
        "title": "lokaal 93",
        "description": "Je staat in het lokaal",
        "options": {
            "north": "7",
            "east": "8",
            "south": "8",
            "west": "8"
        },
        "src": "resources/img/8.jpg"
    },
    {
        "title": "lokaal 92",
        "description": "Je staat in het lokaal",
        "options": {
            "north": "9",
            "east": "9",
            "south": "7",
            "west": "10"
        },
        "src": "resources/img/9.jpg"
    },
    {
        "title": "lokaal 90",
        "description": "Je staat in het lokaal",
        "options": {
            "north": "10",
            "east": "9",
            "south": "5",
            "west": "10"
        },
        "src": "resources/img/10.jpg"
    },
    {
        "title": "uitgang",
        "description": "Je bent bij de uitgang",
        "options": {
            "north": "6",
            "east": "11",
            "south": "11",
            "west": "11"
        },
        "src": "resources/img/11.jpg"
    },
];

function show(index) {
    if (index > nodes.length) {
        index = 0;
    }

    let newnode = nodes[index]
    
    if (index != 0 && (index != newnode.options.north || index != newnode.options.east || index != newnode.options.south || newnode.options.west)) {
        alert("Niet valsspelen!");

    } else {
        // update image
        img.src = newnode.src;
        title.innerHTML = newnode.title;

        // update text
        let newtext =  `
        <p>Omschrijving: ${newnode.description}</p>
        <p>Opties:</p>
        <ul>
            <li> Noord: ${newnode.options.north}</li>
            <li>Oost: ${newnode.options.east}</li>
            <li>Zuid: ${newnode.options.south}</li>
            <li>West: ${newnode.options.west}</li>
        </ul>`;

        textbox.innerHTML = newtext;
    }
}

function getInput() {
    show(uinput.value); // switch view and title

    // cleanup
    uinput.value = "";
    uinput.focus();
}

show(0); // start value