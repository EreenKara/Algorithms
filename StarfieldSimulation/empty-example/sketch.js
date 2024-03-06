class Star {

  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }

  update() {
    this.z = this.z - speed;
    if (this.z < 1) {  // z<0 olursa 0'a bölme hatası olduğundan 
      this.z = width;
      this.x = random(-width,width);
      this.y = random(-height,height);
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    

    // maplenmiş X, Z ile öteliyoruz gibi düşün. Burada Z değerini azalttıkça Bölme işlemi büyüyor SX büyüyor. 
    // Bu sayede merkezden ötelemiş oluyoruz. Yeni SX konumu merkezden uzaklaşıyor.
    let sx = map(this.x / this.z, 0, 1, 0, width);  
    let sy = map(this.y / this.z, 0, 1, 0, height);
    
    let r = map(this.z, 0, width, 4, 0);
    ellipse(sx, sy, r, r);

    let px = map(this.x / this.pz, 0, 1, 0, width);  // previous X çünkü arkasında çizgi var gibi yapıacz.
    let py = map(this.y / this.pz, 0, 1, 0, height); // previous X çünkü arkasında çizgi var gibi yapıacz.

    this.pz = this.z;

    stroke(255); 
    strokeWeight(r);
    line(px, py, sx, sy); // arkasında iz bırakmak için.


  }
}



let stars=[]
let speed;
let starAmount=400;
function setup(){
  
  createCanvas(400,400);
  
  for (let i = 0; i < starAmount; i++) {
    stars.push(new Star());    
  }
}


function draw(){
  speed =map(mouseX,0,width,0,20);  // Mouse'un konumuna göre hız ayarladı
  background(0);
  translate(width/2,height/2);  // Merkeze öteledi bütün noktaları
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }

}