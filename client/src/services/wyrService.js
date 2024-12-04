// export default makes it available for the rest of the program

// make fetch call chaining on then() which is called once fetch is done. when the response is back we return it into json
//wyr is in server routes index.js as the path (localhost:3000/wyr)
export default {
    getRandomWYR(){
        return fetch('/wyr').then(response => {
            return response.json()
        })
    }
}