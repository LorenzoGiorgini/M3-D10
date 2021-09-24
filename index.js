const showCaseMovies = async (genreName) => {
    const baseUrl = "https://striveschool-api.herokuapp.com/api/movies/" + genreName
    let title = document.querySelector(".title")
    title.innerText = genreName
    title.classList.add("toUpper")
    let data =  await fetchData(baseUrl)
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
        console.log(data)
        return data
        
    } catch (error) {
        console.error(error)
    }
}


const fetchGenre = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/" , { 
            headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWNlNjRiYjUzZDAwMTViMTllY2UiLCJpYXQiOjE2MzIzMTI1NTAsImV4cCI6MTYzMzUyMjE1MH0.2jt7nrvY6lDD2JNvyGbxJLIR8WemIGQXws4PHMeNqQI",
                "Content-Type": "application/json",
            },
        })

        let data = await response.json()
        console.log(data)
        dropdownGenre(data)
        return data
        
    } catch (error) {
        console.error(error)
    }
}



const dropdownGenre = (data) => {
    let dropdown = document.querySelector("#drop-down")
    let aGenre
    data.forEach(elem => {
        aGenre = document.createElement("a")
        aGenre.innerHTML = `<a class="dropdown-item" onclick="showCaseMovies('${elem}')">${elem}</a>`
        dropdown.appendChild(aGenre)
    })
}


window.onload = () => {
    fetchGenre()
}