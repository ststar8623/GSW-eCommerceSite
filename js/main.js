function GSW (name, size, color, stock, price, image, magnifyImage) {
	this.name = name;
	this.size = size;
	this.color = color;
	this.stock = stock;
	this.price = price;
	this.image = image;
	this.magnifyImage = magnifyImage
}

var stocksArray = []

var curryJacket = new GSW ('Stephen Curry #30 Jacket', 'All Size', 'Blue', 'Sold Out', 500, 'img/curry/curry-jacket.png', 'img/curry/curry-jacket-2.png')
var curryJersey = new GSW ('Stephen Curry #30 Jersey', 'Small', 'Blue', '15', 110, 'img/curry/curry-jersey.png', 'img/curry/curry-jersey-2.png')
var curryTee = new GSW ('Stephen Curry #30 Tee', 'M L', 'White', 'Limited', 20, 'img/curry/curry-tee.png', 'img/curry/curry-tee-2.png')
var kdJacket = new GSW ('Kevin Durant #35 Jacket', 'All Size', 'Royal / White', 'Limited', 500, 'img/kd/kevin-durant-35.png', 'img/kd/kevin-durant-35-2.png')
var kdJersey = new GSW ('Kevin Durant #35 Jersey', 'S M', 'White', '500', 110, 'img/kd/kevin-durant-jersey.png', 'img/kd/kevin-durant-jersey-2.png')
var kdTee = new GSW ('Kevin Durant #35 Tee', 'All Size', 'Blue', 'Sold Out', 28, 'img/kd/kevin-durant-tee.png', 'img/kd/kevin-durant-tee-2.png')
var kThomWest = new GSW ('Klay Thompson #11 West', 'Large', 'Red', 'Limited', 28, 'img/kt/kthom-west.png', 'img/kt/kthom-west-2.png')
var kThomJersey = new GSW ('Klay Thompson #11 Jersey', 'All Size', 'Grey', 500, 110, 'img/kt/kthom-jersey.png', 'img/kt/kthom-jersey-2.png')
var kThomTee = new GSW ('Klay Thompson #11 Tee', 'X-Large', 'Black', 500, 20, 'img/kt/kthom-tee.png', 'img/kt/kthom-tee-2.png')
var greenUSA = new GSW ('Draymond Green Nike USA', 'All Size', 'Blue', 350, 35, 'img/green/green-usa.png', 'img/green/green-usa-2.png')
var greenJersey = new GSW ('Draymond Green #23 Jersey', 'All Size', 'Blue', 350, 110, 'img/green/green-jersey.png', 'img/green/green-jersey-2.png')
var greenTee = new GSW ('Draymond Green #23 Tee', 'All Size', 'Grey', 500, 28, 'img/green/green-tee.png', 'img/green/green-tee-2.png')
var curryHead = new GSW ('Stephen Curry #30 FLATHLETE 5”', 'One Size', '', 'Limited', 20, 'img/head/curry-head.png', 'img/head/curry-head.png')
var greenHead = new GSW ('Draymond Green #23 FLATHLETE 5”', 'One Size', '', 'Limited', 20, 'img/head/green-head.png', 'img/head/green-head.png')
var kThomHead = new GSW ('Klay Thompson #11 FLATHLETE 5”', 'One Size', '', 'Limited', 20, 'img/head/kthom-head.png', 'img/head/kthom-head.png')

stocksArray.push(curryHead)
stocksArray.push(curryJacket)
stocksArray.push(curryJersey)
stocksArray.push(curryTee)
stocksArray.push(kThomHead)
stocksArray.push(kThomWest)
stocksArray.push(kThomJersey)
stocksArray.push(kThomTee)
stocksArray.push(greenHead)
stocksArray.push(greenUSA)
stocksArray.push(greenJersey)
stocksArray.push(greenTee)
stocksArray.push(kdJacket)
stocksArray.push(kdJersey)
stocksArray.push(kdTee)

for( i = 0; i < stocksArray.length; i++ ) {
	var gswName = document.createTextNode(stocksArray[i].name)
	var gswSize = document.createTextNode('Availabe size: ' + stocksArray[i].size)
	var gswColor = document.createTextNode('Color: ' + stocksArray[i].color)
	var gswStock = document.createTextNode('In stock: ' + stocksArray[i].stock)
	var gswPrice = document.createTextNode('Price: $' + stocksArray[i].price)
	var gswButton = document.createTextNode('ADD TO CART')
	var gswImage = stocksArray[i].image
	var gswMagnifyImage = stocksArray[i].magnifyImage

	var newCol = document.createElement('div')
	var newDiv = document.createElement('div')
	var nameH2 = document.createElement('h2')
	var sizeH4 = document.createElement('h4')
	var colorH4 = document.createElement('h4')
	var stockH4 = document.createElement('h4')
	var priceH4 = document.createElement('h4')
	var buyNow = document.createElement('a')
	var image = document.createElement('img')

	nameH2.appendChild(gswName)
	sizeH4.appendChild(gswSize)
	colorH4.appendChild(gswColor)
	stockH4.appendChild(gswStock)
	priceH4.appendChild(gswPrice)
	buyNow.appendChild(gswButton)
	buyNow.setAttribute('href', '#' + [i])
	buyNow.setAttribute('data-price', stocksArray[i].price)
	buyNow.className = 'cd-add-to-cart'

	image.src = gswImage
	image.setAttribute('data-magnify-src', gswMagnifyImage)
	image.className = 'zoom img-responsive'

	newCol.className = 'col-sm-3'
	newDiv.className = 'gsw stock' + i + ' thumbnamil'
	newDiv.appendChild(nameH2)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(buyNow)
	newCol.appendChild(newDiv)

	document.getElementById('gsw').appendChild(newCol)
}

$(document).ready(function(){
	$('.zoom').magnify();
});



