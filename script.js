// snack 1

// function getPostTitle(id) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://dummyjson.com/users/${post.userId}`)
//             .then(response => response.json())
//             .then(obj => resolve(obj))
//             .catch(reject);

//     })
// }

// getPostTitle(1)
//     .then(title => console.log(title))
//     .then(title => console.log(title))
//     .catch(error => console.error(error))


// snack 2

function lanciaDado() {
    return new Promise((resolve, reject) => {
        console.log("Sto lanciando il dado")
        setTimeout(() => {
            let prob = Math.floor(Math.random() * 10);
            if (prob === 0 || prob === 1) {
                reject("il dado si è incastrato")
            } else {
                let risultato = Math.floor(Math.random() * 6) + 1
                resolve(`è uscito il ${risultato}`)
            }
        }, 3000)
    })
}

lanciaDado()
    .then(risultato => console.log(risultato))
    .catch(messaggio => console.log(messaggio))