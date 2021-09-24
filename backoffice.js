let url
const movieId = new URLSearchParams(window.location.search).get("id")

if (movieId) {
    url = "https://striveschool-api.herokuapp.com/api/movies/" + movieId
    let button = document.querySelector("button[type=submit]")
    let del = document.querySelector("#del")
    del.classList.remove("d-none")
    button.classList.add("btn-success")
    button.innerText = "Edit"
} else {
    url = "https://striveschool-api.herokuapp.com/api/movies/"
    let button = document.querySelector("button[type=submit]")
    button.classList.add("btn-primary")
    button.innerText = "Submit"
}

const handleForm = (event) => {

    let obj = {
        name: document.querySelector("#title").value,
        description: document.querySelector("#description").value,
        category: document.querySelector("#category").value.toLowerCase(),
        imageUrl: document.querySelector("#image").value
    }

    event.preventDefault();

    postedData(obj);
};

const handleDelete = async () => {

    let confirmationDel = confirm("Do you want to delete?")
    if(confirmationDel) {
        try {
        const resp = await fetch(endpointUrl, {
            method: "DELETE",
            headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWNlNjRiYjUzZDAwMTViMTllY2UiLCJpYXQiOjE2MzIzMTI1NTAsImV4cCI6MTYzMzUyMjE1MH0.2jt7nrvY6lDD2JNvyGbxJLIR8WemIGQXws4PHMeNqQI",
            },
        });

        if(resp.ok) {
            let deletedProduct = await resp.json()
            displayAlert("danger" , "Product : " + deletedProduct.name + " deleted succesfully")
        }

        } catch (error) {
        displayAlert("danger" , error)
        }
    }
};


const postedData = async (obj) => {
    try {
        const resp = await fetch( url, {
        method: movieId ? "PUT" : "POST",
        body: JSON.stringify(obj),
        headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWNlNjRiYjUzZDAwMTViMTllY2UiLCJpYXQiOjE2MzIzMTI1NTAsImV4cCI6MTYzMzUyMjE1MH0.2jt7nrvY6lDD2JNvyGbxJLIR8WemIGQXws4PHMeNqQI",
            "Content-Type": "application/json",
        },
        }
        );
        let response = await resp.json()
        console.log(response)
    } catch (error) {
        console.error(error)
    }
};