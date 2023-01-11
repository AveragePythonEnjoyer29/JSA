const title = document.getElementById("title");
const image = document.getElementById("image");

let seizoenen = [
    {
        "titel": "seizoenen",
        "image": "resources/img/seasons.jpg",
        "backGround": "gray"
    },

    {
        "titel": "lente",
        "image": "resources/img/spring.jpg",
        "backGround": "green"
    },

    {
        "titel": "zomer",
        "image": "resources/img/summer.jpg",
        "backGround": "yellow"
    },

    {
        "titel": "autumn",
        "image": "resources/img/autumn.jpg",
        "backGround": "brown"
    },

    {
        "titel": "winter",
        "image": "resources/img/winter.jpg",
        "backGround": "white"
    }
];

function show(index) {
    seizoen = seizoenen[index];

    title.innerHTML = seizoen.titel;
    image.src = seizoen.image;

    document.body.style.backgroundColor = seizoen.backGround;
}