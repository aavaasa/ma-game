const LivingCreature = require("./LivingCreature");

module.exports = class AeEater extends LivingCreature {
    mul() {
      let found = this.chooseCell(0);
      let exact = random(found);
  
      if (
        exact &&
        this.energy >
          17000000000000000000000000000000000000000000000000000000000000000000
      ) {
        let x = exact[0];
        let y = exact[1];
  
        let ae_Eater = new AeEater(x, y);
        matrix[y][x] = 4;
        aeEeaterArr.push(ae_Eater);
  
        this.energy = 100;
      }
    }
    eat() {
      let found1 = this.chooseCell(3);
      let exact1 = random(found1);
      let found2 = this.chooseCell(5);
      let exact2 = random(found2);
  
      if (exact1) {
        this.energy += 10;
        let x = exact1[0];
        let y = exact1[1];
  
        for (let i = 0; i < allEaterArr.length; i++) {
          if (allEaterArr[i].x == x && allEaterArr[i].y == y) {
            allEaterArr.splice(i, 1);
          }
        }
  
        matrix[y][x] = 4;
        matrix[this.y][this.x] = 0;
  
        this.x = x;
        this.y = y;
  
        if (this.energy > 50) {
          this.mul();
        }
      } else if (exact2) {
        this.energy -= 3;
        let x = exact2[0];
        let y = exact2[1];
  
        for (let i = 0; i < toxicAreaArr.length; i++) {
          if (toxicAreaArr[i].x == x && toxicAreaArr[i].y == y) {
            toxicAreaArr.splice(i, 1);
          }
        }
        matrix[y][x] = 2;
        matrix[this.y][this.x] = 0;
  
        this.x = x;
        this.y = y;
        console.log(this.energy);
        if (this.energy > 50) {
          this.mul();
        }
        if (this.energy < 0) {
          this.die();
        }
      } else {
        this.move();
      }
    }
    move() {
      let found1 = this.chooseCell(0);
      let found2 = this.chooseCell(1);
      let exact1 = random(found1);
      let exact2 = random(found2);
  
      if (exact1) {
        let x = exact1[0];
        let y = exact1[1];
  
        matrix[y][x] = 4;
        matrix[this.y][this.x] = 0;
  
        this.x = x;
        this.y = y;
  
        this.energy--;
  
        if (this.energy < 0) {
          this.die();
        }
      } else if (exact2) {
        let x = exact2[0];
        let y = exact2[1];
  
        matrix[y][x] = 4;
        matrix[this.y][this.x] = 0;
  
        this.x = x;
        this.y = y;
  
        // this.energy--
  
        if (this.energy < 0) {
          this.die();
        }
      } else {
        this.energy--;
        if (this.energy < 0) {
          this.die();
        }
      }
    }
    die() {
      for (let i = 0; i < aeEeaterArr.length; i++) {
        if (aeEeaterArr[i].x == this.x && aeEeaterArr[i].y == this.y) {
          aeEeaterArr.splice(i, 1);
        }
      }
      matrix[this.y][this.x] = 0;
    }
  }