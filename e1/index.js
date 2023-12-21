const API = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_pL0L39wO8vuZvcDVE4rITm1sgE6ba382YvPEeiO0033b0Yk50yrn6eizUQzj39zT'
const button = document.getElementById('button')

button.addEventListener('click',reload)

async function reload(){
    const res = await fetch(API)
    const data = await res.json()
    
    console.log(data);

    const img1 = document.getElementById('img1')
    const img2 = document.getElementById('img2')
    const img3 = document.getElementById('img3')

    img1.src = data[0].url
    img2.src = data[1].url
    img3.src = data[2].url 
}

