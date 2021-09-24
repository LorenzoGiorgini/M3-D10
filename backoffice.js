const url = "https://striveschool-api.herokuapp.com/api/movies/"


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


const postedData = async (obj) => {
    try {
        const resp = await fetch( url, {
        method: "POST",
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