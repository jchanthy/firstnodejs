const url='https://picsum.photos/200/300';
const img = async (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(img)
)};

img(url).then(res=> console.log(res));