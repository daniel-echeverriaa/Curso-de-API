const APAPI_URL_RAMDOM  = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_pL0L39wO8vuZvcDVE4rITm1sgE6ba382YvPEeiO0033b0Yk50yrn6eizUQzj39zT'
const API_URL_FAVOURITES  = 'https://api.thecatapi.com/v1/favourites?api_key=live_pL0L39wO8vuZvcDVE4rITm1sgE6ba382YvPEeiO0033b0Yk50yrn6eizUQzj39zT';

const button = document.getElementById('button')

const spanError = document.getElementById('error')





async function loadRamdomMichis(){
    const res = await fetch(APAPI_URL_RAMDOM)
    const data = await res.json()
    console.log('Ramdom');
    console.log(data);

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error " + res.status
    }else {
        const img1 = document.getElementById('img1')
        const img2 = document.getElementById('img2')
        const btn1 = document.getElementById('btn1')
        const btn2 = document.getElementById('btn2')
        
        img1.src = data[0].url
        img2.src = data[1].url
        btn1.onclick = () => saveFavoriteMichi(data[0].id);
        btn2.onclick = () => saveFavoriteMichi(data[1].id);
    }
   
}
async function loadFavouritesMichi(){
    const res = await fetch(API_URL_FAVOURITES)
    const data = await res.json()
    console.log('Favoritrs');
    console.log(data);

    
    if (res.status !== 200) {
        spanError.innerText = "Hubo un error " + res.status + data.message;
    } else {
       data.forEach(michis => {
        const section = document.getElementById('favoritesMichi')
        const article = document.createElement('article');   
        const img = document.createElement('img');   
        const btn = document.createElement('button'); 
        const btnText = document.createTextNode('Sacar al michi de Favoritos')  
        
        btn.appendChild(btnText);
        img.src = michis.image.url
        img.width = 150;

        article.appendChild(img)
        article.appendChild(btn)
        section.appendChild(article)
       }); 
    }
}

async function saveFavoriteMichi(id){
    const res = await fetch(API_URL_FAVOURITES,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id: id
        }),
    })
    const data = await res.json()

    console.log('GURADR');
    console.log(res);

    if (res.status !== 200) {
        spanError.innerText = "Hubo un error " + res.status + data.message;
    }
}


loadRamdomMichis()
loadFavouritesMichi()


