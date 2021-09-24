const urlA = "https://striveschool-api.herokuapp.com/api/movies/action"
const urlH = "https://striveschool-api.herokuapp.com/api/movies/horror"
const urlF = "https://striveschool-api.herokuapp.com/api/movies/fantasy"

const action = async () => {

    let title = document.querySelector(".title")
    title.innerText = "Action"
    let data =  await fetchData(urlA)
    console.log(data)

    let container = document.querySelector("#row-master")
    container.innerHTML = ""


    data.forEach(element => {
        container.innerHTML += `
        <div class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1">
            <div class="card col-size-style">
            
            <img
                src="${element.imageUrl}"
                class="card-img-top img-netflix-movies img-fluid w-100 rounded"
            />
            </div>
            <a href="./backoffice.html?id=${element._id}"><h5 style="color: white; text-align: center;">${element.name}</h5></a>
        </div>
        `
    });
}


const horror = async () => {

    let title = document.querySelector(".title")
    title.innerText = "Horror"
    
    let data =  await fetchData(urlH)
    console.log(data)
    let container = document.querySelector("#row-master")
    container.innerHTML = ""
    data.forEach(element => {
        container.innerHTML += `
        <div class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1">
            <div class="card col-size-style">
            
            <img
                src="${element.imageUrl}"
                class="card-img-top img-netflix-movies img-fluid w-100 rounded"
            />
            </div>
            <a href="./backoffice.html?id=${element._id}"><h5 style="color: white; text-align: center;">${element.name}</h5></a>
        </div>
        `
    });
}


const fantasy = async () => {

    let title = document.querySelector(".title")
    title.innerText = "Fantasy"

    
    let data =  await fetchData(urlF)
    console.log(data)
    let container = document.querySelector("#row-master")
    container.innerHTML = ""
    data.forEach(element => {
        container.innerHTML += `
        <div class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1">
            <div class="card col-size-style">
            
            <img
                src="${element.imageUrl}"
                class="card-img-top img-netflix-movies img-fluid w-100 rounded"
            />
            </div>
            <a href="./backoffice.html?id=${element._id}"><h5 style="color: white; text-align: center;">${element.name}</h5></a>
        </div>
        `
    });
}

const fetchData = async (url) => {
    try {
        const response = await fetch(url , { 
            headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWNlNjRiYjUzZDAwMTViMTllY2UiLCJpYXQiOjE2MzIzMTI1NTAsImV4cCI6MTYzMzUyMjE1MH0.2jt7nrvY6lDD2JNvyGbxJLIR8WemIGQXws4PHMeNqQI",
                "Content-Type": "application/json",
            },
        })

        let data = await response.json()
        return data
        
    } catch (error) {
        console.error(error)
    }
}