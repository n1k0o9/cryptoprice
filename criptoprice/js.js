fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2C%20Ethereum%2CCardano%2CTether%2Cpolygon%2CFantom&vs_currencies=usd')
.then(res => res.json())
.then(json => {
    const container=document.querySelector(".container");
    const coins =Object.getOwnPropertyNames(json);
    for(let coin of coins){
        const coininfo = json[`${coin}`];
        const price =coininfo.usd;
        //const change =coininfo.usd_24h_change.toFixed(5);
        container.innerHTML+=`
            <div class="coin">
            <div class="coinlogo">
                <img src="img/${coin}.png" alt="">
            </div>
            <div class="coinname">
                <h3>${coin}</h3>
                <span>/usd</span>
            </div>
            <div class="coinprice">
                <span class="price">${price}</span>
                <span class="change"></span>
            </div>
        </div>
        `;
    }
})
    
