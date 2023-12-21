const APAPI_URL_RAMDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_pL0L39wO8vuZvcDVE4rITm1sgE6ba382YvPEeiO0033b0Yk50yrn6eizUQzj39zT'
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_pL0L39wO8vuZvcDVE4rITm1sgE6ba382YvPEeiO0033b0Yk50yrn6eizUQzj39zT'
const button = document.getElementById('button')

const spanError = document.getElementById('error')


button.addEventListener('click',loadRamdomMichis)

async function loadRamdomMichis(){
    const res = await fetch(APAPI_URL_RAMDOM)
    const data = await res.json()
    console.log('Ramdom');
    console.log(data);

    if (res.status !== 200) {
        spanError.innerText = "Hubo un error " + res.status
    }else {
        const img1 = document.getElementById('img1')
        const img2 = document.getElementById('img2')
    
        img1.src = data[0].url
        img2.src = data[1].url
    }
   
}
async function loadFavoritesMichis(){
    const res = await fetch(API_URL_FAVORITES)
    const data = await res.json()
    console.log('Favoritrs');
    console.log(data);

}

loadRamdomMichis()
loadFavoritesMichis()

