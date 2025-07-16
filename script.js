function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(obj => resolve(obj.title))
            .catch(reject);

    })
}

getPostTitle(1)
    .then(title => console.log(title))
    .catch(error => console.error(error))
