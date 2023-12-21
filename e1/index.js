const APAPI_URL_RAMDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_pL0L39wO8vuZvcDVE4rITm1sgE6ba382YvPEeiO0033b0Yk50yrn6eizUQzj39zT'
const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_pL0L39wO8vuZvcDVE4rITm1sgE6ba382YvPEeiO0033b0Yk50yrn6eizUQzj39zT'
const button = document.getElementById('button')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const spanError = document.getElementById('error')


button.addEventListener('click',loadRamdomMichis)
btn1.addEventListener('click',saveFavoriteMichis)
btn2.addEventListener('click',saveFavoriteMichis)


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
async function loadFavouritesMichis(){
    const res = await fetch(API_URL_FAVOURITES)
    const data = await res.json()
    console.log('Favoritrs');
    console.log(data);

}

async function saveFavoriteMichis(){
    const res = await fetch(API_URL_FAVOURITES,+{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            Image_id: 12
        }),
    })
    const data = await res.json()

    console.log('GURADR');
    console.log(res);

    if (res.status !== 200) {
        spanError.innerText = "Hubo un error " + res.status
    }
}


loadRamdomMichis()
loadFavouritesMichis()


