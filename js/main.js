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

var kdjacket = new GSW ('Kevin Durant 35 Wool Jacket', 'All Size', 'Royal / White', 'Limited', 500, 'img/kd/kevin-durant-35.png', 'img/kd/kevin-durant-35-2.png')

stocksArray.push(kdjacket)

for( i = 0; i < stocksArray.length; i++ ) {
	var gswName = document.createTextNode(stocksArray[i].name)
	var gswSize = document.createTextNode('Availabe size: ' + stocksArray[i].size)
	var gswColor = document.createTextNode('Color: ' + stocksArray[i].color)
	var gswStock = document.createTextNode('In stock: ' + stocksArray[i].stock)
	var gswPrice = document.createTextNode('Price: $' + stocksArray[i].price)
	var gswButton = document.createTextNode('Buy Now!')
	var gswImage = stocksArray[i].image
	var gswMagnifyImage = stocksArray[i].magnifyImage

	var newCol = document.createElement('div')
	var newDiv = document.createElement('div')
	var nameH1 = document.createElement('h1')
	var sizeH4 = document.createElement('h4')
	var colorH4 = document.createElement('h4')
	var stockH4 = document.createElement('h4')
	var priceH4 = document.createElement('h4')
	var buyNow = document.createElement('button')
	var image = document.createElement('img')

	nameH1.appendChild(gswName)
	sizeH4.appendChild(gswSize)
	colorH4.appendChild(gswColor)
	stockH4.appendChild(gswStock)
	priceH4.appendChild(gswPrice)
	buyNow.appendChild(gswButton)
	buyNow.className = 'btn btn-primary btn-lg'
	image.src = gswImage
	image.setAttribute('data-magnify-src', gswMagnifyImage)
	image.className = 'zoom img-responsive'

	newCol.className = 'col-sm-4'
	newDiv.className = 'gsw stock' + i + ' thumbnamil'
	newDiv.appendChild(nameH1)
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















