class Product {
    constructor(image ,name, price){
        this.image = image;
        this.name = name;
        this.price = price;
    }
}

var products = [
    new Product("./images/bowset.jpeg","Bow Set",899),
    new Product("./images/bowstuds.jpeg","Bow Earings",399),
    new Product("./images/chainring.jpeg","Chain Ring",550),
    new Product("./images/cherryearing.jpeg","Cherry Earings",299),
    new Product("./images/doubleclove.jpeg","Double Sided Necklace",499),
    new Product("./images/dropearings.jpeg","Trendy Earings",299),
    new Product("./images/ducknecklace.jpeg","Duck Necklace",349),
    new Product("./images/earings.jpeg","Golden Earings",299),
    new Product("./images/enamal.jpeg","Enamal Bangle","350 Each"),
    new Product("./images/floralearing.jpeg","Floral Earings",249),
    new Product("./images/foeverring.jpeg","Infinite Ring",349),
    new Product("./images/fowereearings.jpeg","Flower Earings",249),
    new Product("./images/goldenbangle.jpeg","Bangle",450),
    new Product("./images/handchain.jpeg","Hand Chain",499),
    new Product("./images/heartbracelet.jpeg","Heart Bangle",899),
    new Product("./images/heartnecklace.jpeg","Heart Necklace",299),
    new Product("./images/heartring.jpeg","Heart Ring",350),
    new Product("./images/heartset.jpeg","Minimal Heart Set","999"),
    new Product("./images/jhumkay.jpeg","Enamal Jhumkay",499),
    new Product("./images/ovalwatch.jpeg","Oval Dial Watch",1999),
    new Product("./images/pinktulip.jpeg","Pink Golden Tulip Bracelet",2799),
    new Product("./images/quil.jpeg","Feather Pen With Nibs",2200),
    new Product("./images/rings.jpeg","Rings Set",1799),
    new Product("./images/set.jpeg","Jewellery Set" ,1999),
    new Product("./images/silvertulip.jpeg","Silver Tulip Bracelet",3000),
    new Product("./images/squarebracelet.jpeg","Bracelet",999),
    new Product("./images/sunflower.jpeg","Crochet Sunflower Bouquet","750 Each"),
    new Product("./images/trendyearings.jpeg","Trendy Earings",350),
    new Product("./images/tulipcrochet.jpeg","Tulip Crochet Bouquet","450 Each"),
    new Product("./images/watch.jpeg","Elegent Watch",2299),
    new Product("./images/watchbangle.jpeg","Watch Bracelet",699),
];

function displayImages(){
    var container = document.getElementById("products");

    let html = `<div class="row">`;

    products.forEach(p=>{
        html += `
        <div class="col-md-3 mb-4">
            <div class="card h-100">
              
<img src="${p.image}" class="card-img-top" alt="${p.name}">
 <div class="card-body text-center">
                    <h5 class="card-title">${p.name}</h5>
                    <p class="card-text">${p.price}</p>
                    <button class="btn btn-dark">Add to Cart</button>
                </div>
            </div>
        </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}
displayImages();