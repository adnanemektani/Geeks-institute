//exercice1

const test1 = fetch('https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')

.then (response =>{
    if (!response.ok){
        return "status not found"
    }
       return response.json()
    
})
.then(data => {
    const img = document.createElement('img')
    img.src = data.data.images.original.url
    document.body.appendChild(img) 
})
.catch(error => console.log(error))




//exercice2
/*
==SEQUENTIAL START==
starting slow promise
slow promise is done
slow
starting fast promise
fast promise is done
fast
*/





//exercice3
/*
after 4s
==CONCURRENT START with await==
starting slow promise
starting fast promise

//after 1s
fast promise is done 
//after 2s
slow promise is done 
slow
fast

*/



//exercice4
const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums"
      ];

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(async(url) =>{

    try {
        const response = await fetch(url)
        return await response.json() 
    } catch {
        console.log('ooooooops')  
    }
      
});
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

getData()
