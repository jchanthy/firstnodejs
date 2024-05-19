const apiUrl = 'https://official-joke-api.appspot.com/jokes/random';
const getData = async (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
}
const data = await getData(apiUrl);
console.log(data.type);
console.log(data.setup);
console.log(data.punchline);