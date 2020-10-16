fetch("/mydata")
    .then(response => response.json())
    .then(json => {
        document.getElementById("userFlag").src = json.flag
        document.getElementById("userAvatar").src = json.avatar
        document.getElementById("userHandle").innerText = json.username
    })


console.log(sessionStorage.getItem("friendData"))
getDrawings().then(result => {
    console.log(result)
})


//handle drawings here
const gallery = document.querySelector('#gallery')
let URI = 'data:image/png;base64,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'

let drawings = [
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    },
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    },
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    },
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    },
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    },
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    },
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    },
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    },
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    },
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    },
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    },
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    },
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    },
    {
        title: "Title",
        artist: "Username",
        receiver: "nah",
        URI: 'images/user_01.png',
        instructions: []
    }

]


let myGallery = ''
for (let i = 0; i < drawings.length; i++) {
    let template = `
          <div class="col-md-3">
            <div class="card bg-dark text-center">
            <div class="card-header">
            <h4 class="card-text">${drawings[i].title}</h4>
            </div>
                <img id="galleryThumb" class="card-img-top" src="${drawings[i].URI}">
                    <div class="card-img-overlay text-dark">
                    </div>
                        <div class="card-footer bg-transparent">
                        <div class="card-text">${drawings[i].artist}</div>
                        <button type="button" class="btn btn-light btn-sm">View</button>
                        </div>
                        </div>
            </div>
        </div>`

    myGallery += template
}
//console.log(myGallery)
gallery.innerHTML = myGallery


function getDrawings () {

    let artist = sessionStorage.getItem("friendData") // Pull value set by home

    // Get friend data by username
    return fetch("/drawings", {
        method:"POST",
        body:JSON.stringify({artist: artist, receiver: document.getElementById("userHandle").innerText}),
        headers: { "Content-Type": "application/json"}
    })
        .then(response => response.json())
        .then(json => {
            return json
        })
}