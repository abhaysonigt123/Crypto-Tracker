const form = document.querySelector('#searchForm');
const res  = document.querySelector('#tableResult');
var upd;
form.addEventListener('submit',(e)=>{

    if(upd){
        clearTimeout(upd);
    }
    e.preventDefault();

    const ctype = form.elements.coinType.value;

    fetchPrice(ctype);

});

var fetchPrice= async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);
    console.log(r.data.coin.price);

    const price = r.data.coin.price;
    const volume = r.data.coin.volume;
    const Change = r.data.coin.priceChange1d;
    const base = r.data.coin.name;
    const target = 'INR';
    
    
    res.innerHTML = `<tr>
    <td>
        Property
    </td>
    <td>Value</td>
</tr>
<tr>
    <td>
        ${base} Price
    </td>
    <td id>${price} ${target}</td>
</tr>
<tr>
    <td>
        Volume
    </td>
    <td>${volume}</td>
</tr>
<tr>
    <td>
        Change in 1D
    </td>
    <td>${Change}</td>
</tr>
`

upd = setTimeout(()=>fetchprice(ctype),10000);

}

