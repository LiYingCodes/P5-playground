
let width = 600
let height= 400
let r = 0
let g = 255
let b = 255
let moveX = 50;
let speed = 2;

const circle1 = {
  x: width / 2,
  y: height,
  diameter: width,
  r: 255,
  g: 102,
  b: 102
}; 

const circle2 = {
	y: height + 20,
	r: 255,
	g: 178,
	b: 102
}; 

const circle3 = {
	y: height + 40,
	r: 255,
	g: 255,
	b: 102
}; 

const circle4 = {
	y: height + 40,
	r: 178,
	g: 255,
	b: 102
}; 

const circle5 = {
	y: height + 60,
	r: 102,
	g: 255,
	b: 102
}; 

const circle6 = {
	y: height + 80,
	r: 102,
	g: 255,
	b: 178
}; 

const circle7 = {
	y: height + 100,
	r: 102,
	g: 255,
	b: 255
}; 
const circle8 = {
	y: height + 120,
	r: 102,
	g: 178,
	b: 255
};
const circle9 = {
	y: height + 140,
	r: 102,
	g: 102,
	b: 255
};
const circle10 = {
	y: height + 160,
	r: 178,
	g: 102,
	b: 255
};
const circle11 = {
	y: height + 180,
};

function setup() {
	createCanvas(width, height);
}

function draw() {	
	//change color of sky from left to right
	r = map(moveX,0,600,204,0)
	g = map(moveX,0,600,255,0)
	b = map(moveX,0,600,255,100)
	background(r,g,b);	

	//create stars
	if (moveX > width / 2) {
		let x = random(width);
		let y = random(height / 2);
		fill(255, 255, 204);
		stroke(255, 255, 204);
		const num = random(8, 10);
		strokeWeight(num);
		point(x, y);
	}

	//create airplane line
	fill(255, 255, 255);
	stroke(255, 255, 255);
	strokeWeight(2)
	if (moveX < width / 4) {
		line(150, 50, 0, 150)
		ellipse(150, 50, 10, 10);
	} else if (moveX < width / 3) {
		line(150, 50, 0, 150)
		ellipse(150, 50, 10, 10);
		line(200, 50, 0, 200)
		ellipse(200, 50, 10, 10);
	} else if (moveX < width / 2) {
		line(150, 50, 0, 150);
		ellipse(150, 50, 10, 10);
		line(200, 50, 0, 200);
		ellipse(200, 50, 10, 10);
		line(250, 50, 0, 250);
		ellipse(250, 50, 10, 10);
	}

	//create rainbow
	noStroke();
	fill(circle1.r, circle1.g, circle1.b);
	ellipse(circle1.x, circle1.y, circle1.diameter);
	fill(circle2.r, circle2.g, circle2.b);
	ellipse(circle1.x, circle2.y, circle1.diameter);
	fill(circle3.r, circle3.g, circle3.b);
	ellipse(circle1.x, circle3.y, circle1.diameter);
	fill(circle4.r, circle4.g, circle4.b);
	ellipse(circle1.x, circle4.y, circle1.diameter);
	fill(circle5.r, circle5.g, circle5.b);
	ellipse(circle1.x, circle5.y, circle1.diameter);
	fill(circle6.r, circle6.g, circle6.b);
	ellipse(circle1.x, circle6.y, circle1.diameter);
	fill(circle7.r, circle7.g, circle7.b);
	ellipse(circle1.x, circle7.y, circle1.diameter);
	fill(circle8.r, circle8.g, circle8.b);
	ellipse(circle1.x, circle8.y, circle1.diameter);
	fill(circle9.r, circle9.g, circle9.b);
	ellipse(circle1.x, circle9.y, circle1.diameter);
	fill(circle10.r, circle10.g, circle10.b);
	ellipse(circle1.x, circle10.y, circle1.diameter);
	fill(r, g, b);
	ellipse(circle1.x, circle11.y, circle1.diameter);

	//create words
	if (moveX < width / 2) {
		word = 'Rise and shine!'
		textSize(30);
		fill(255);
		text(word, width/ 3, 350);
	} else if (moveX > width / 2) {
		word = 'It is getting late, go to sleep!';
		fill(255);
		text(word, width / 5, 350);
	}
	
	//create sun
	noStroke();
	r = map(moveX + 50, 0, 600, 255, 255)
	g = map(moveX + 50, 0, 600, 153, 255)
	b = map(moveX + 50, 0, 600, 51, 204);
	fill(r,g,b);
	ellipse(moveX + 50, 60, 50);
	
	moveX = moveX + speed;
	if (moveX > (width - 150)) {
		speed = -2;
	} else if (moveX < 0) {
		speed = 2; 
	}
}