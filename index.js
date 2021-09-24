const url = "https://striveschool-api.herokuapp.com/api/movies/action"

const action = () => {
    let title = document.querySelector(".title")
    title.innerText = "Action"
    fetchData()
    let container = document.querySelector("#row-master")
    container.innerHTML = `
        <div class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1">
            <div class="card col-size-style">
            
            <img
                src=""
                class="card-img-top img-netflix-movies img-fluid w-100 rounded"
            />
            </div>
            <h4 style="color: white; text-align: center;"></h4>
        </div>
        `
}


const horror = () => {
    let title = document.querySelector(".title")
    title.innerText = "Horror"
    fetchData()
}


const fantasy = () => {
    let title = document.querySelector(".title")
    title.innerText = "Fantasy"
    fetchData()
}

const fetchData = async () => {
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