class Kartica {
  x = 0;
  y = 0;
  element = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.card();
  }
  card() {
    this.element = document.createElement("div");
    this.element.style.background = "red";
    this.element.style.positon = "fixed";
    this.element.style.width = "150px";
    this.element.style.height = "200px";
    document.body.appendChild(this.element);
  }
}

const currentCard.push(card);

for (let i = 0; i < 6; i++) {
  const card = new Kartica(1, 1);
}


