let bar = document.getElementById('bar');
bar.addEventListener('click', function(){
    let nav = document.getElementById('nav-list');

    nav.classList.toggle('active');
});


let shop = document.getElementById('shop');

let shopItem = [{
    id:'item1',
    name:'Spain Places',
    desc:'7days / 6 night',
    img:'./image/feature 1.png'
},{
    id:'item2',
    name:'Japan Places',
    desc:'7days / 6 night',
    img:'./image/feature 2.png'
},{
    id:'item3',
    name:'Italy Places',
    desc:'7days / 6 night',
    img:'./image/feature 3.png'
},{
    id:'item4',
    name:'Canada Places',
    desc:'7days / 6 night',
    img:'./image/feature 4.png'
},

{
    id:'item1',
    name:'Spain Places',
    desc:'7days / 6 night',
    img:'./image/feature 1.png'
},{
    id:'item2',
    name:'Japan Places',
    desc:'7days / 6 night',
    img:'./image/feature 2.png'
},{
    id:'item3',
    name:'Italy Places',
    desc:'7days / 6 night',
    img:'./image/feature 3.png'
},{
    id:'item4',
    name:'Canada Places',
    desc:'7days / 6 night',
    img:'./image/feature 4.png'
}]



let generateShop=()=>{
    return(shop.innerHTML = shopItem.map((x)=> {
        let {id,name,desc,img} = x;
       return `
    <div class="col-lg-3" >
    <div class="feature-card">
        <img src="${img}" alt="feature 1">
        <div class="feature-card-body">
            <h3>${name}</h3>
            <div class="flex">
                <div>
                    <p>7days/6 Nights</p>
                </div>
                <div>
                    <p>$544</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `
    }).join(''))
}

generateShop();