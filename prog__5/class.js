class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        let result = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
                
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                }
            }

        }

        return result;
    }
    mul() {
        this.energy++;
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 1) {
            let x = exact[0];
            let y = exact[1];

            let grass = new Grass(x, y);
            matrix[y][x] = 1;
            grassArr.push(grass);

            this.energy = 0;
        }   
    }
}


class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 12;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCordinates(){
              this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
      this.getNewCordinates();
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                }
            }

        }

        return result;
    }
    mul() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 50) {
            let x = exact[0];
            let y = exact[1];

            let eater = new GrassEater(x, y);
            matrix[y][x] = 2;
            grassEaterArr.push(eater);

            this.energy = 12;
        }
        //  else {
        //     console.error('there is no way to multiply');
        // }
    }
    eat(){
        let found = this.chooseCell(1);
        let exact = random(found)

        if (exact){
            this.energy +=3;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassArr.length; i++) {
                if( grassArr[i].x == x && grassArr[i].y == y ){
                    grassArr.splice(i, 1)
                }
            }

            matrix[y][x] = 2
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y

            if(this.energy > 50){
                this.mul()
            }
        }else {
            this.move()
        }
    }
    move(){
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy--

            if(this.energy < 0){
                this.die()
            }
        }else {
            this.energy--
            if(this.energy < 0){
                this.die()
            }
        }
    }
    die(){
        for (let i = 0; i < grassEaterArr.length; i++) {
            if( grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y ){
                grassEaterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}
class allEater{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCordinates(){
              this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
      this.getNewCordinates();
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                }
            }

        }

        return result;
    }
    mul() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 150) {
            let x = exact[0];
            let y = exact[1];

            let all__eater = new allEater(x, y);
            matrix[y][x] = 3;
            allEaterArr.push(all__eater);

            this.energy = 20;
        } 
        // else {
        //     console.error('there is no way to multiply');
        // }
    }
    eat(){
        let found1 = this.chooseCell(1);
        let exact1 = random(found1)
        let found2 = this.chooseCell(2);
        let exact2 = random(found2)

        if (exact2){
            this.energy +=4;
            let x = exact2[0];
            let y = exact2[1];

            for (let i = 0; i < grassEaterArr.length; i++) {
                if( grassEaterArr[i].x == x && grassEaterArr[i].y == y ){
                    grassEaterArr.splice(i, 1)
                }
            }

            matrix[y][x] = 3
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y

            if(this.energy > 150){
                this.mul()
            }
        }
        else if(exact1){
            this.energy++;
            let x = exact1[0];
            let y = exact1[1];

            for (let i = 0; i < grassArr.length; i++) {
                if( grassArr[i].x == x && grassArr[i].y == y ){
                    grassArr.splice(i, 1)
                }
            }

            matrix[y][x] = 3
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y

            if(this.energy > 150){
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
    move(){
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 3
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy -= 3

            if(this.energy < 0){
                this.die()
            }
        }else {
            this.energy -= 3
            if(this.energy < 0){
                this.die()
            }
        }
    }
    die(){
        for (let i = 0; i < allEaterArr.length; i++) {
            if( allEaterArr[i].x == this.x && allEaterArr[i].y == this.y ){
                allEaterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }

}

class AeEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 150;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCordinates(){
              this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
      this.getNewCordinates();
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                }
            }

        }

        return result;
    }
    mul() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 170) {
            let x = exact[0];
            let y = exact[1];

            let ae_Eater = new AeEater(x, y);
            matrix[y][x] = 4;
            aeEeaterArr.push(ae_Eater);

            this.energy = 100;
        }
        //  else {
        //     console.error('there is no way to multiply');
        // }
    }
    eat(){
        let found = this.chooseCell(3);
        let exact = random(found)

        if (exact){
            this.energy +=10;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < allEaterArr.length; i++) {
                if( allEaterArr[i].x == x && allEaterArr[i].y == y ){
                    allEaterArr.splice(i, 1)
                }
            }

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y

            if(this.energy > 50){
                this.mul()
            }
        }else {
            this.move()
        }
    }
    move(){
        let found1 = this.chooseCell(0);
        let found2 = this.chooseCell(1);
        let exact1 = random(found1)
        let exact2 = random(found2)

        if (exact1){
            let x = exact1[0];
            let y = exact1[1];

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy--

            if(this.energy < 0){
                this.die()
            }
        }
        else if(exact2){
            let x = exact2[0];
            let y = exact2[1];

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            // this.energy--

            if(this.energy < 0){
                this.die()
            }
        }
        else {
            this.energy--
            if(this.energy < 0){
                this.die()
            }
        }
    }
    die(){
        for (let i = 0; i < aeEeaterArr.length; i++) {
            if( aeEeaterArr[i].x == this.x && aeEeaterArr[i].y == this.y ){
                aeEeaterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}

class FunnyKiller{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 300;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCordinates(){
              this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
      this.getNewCordinates();
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                }
            }

        }

        return result;
    }
    eat(){
        let found1 = this.chooseCell(1);
        let exact1 = random(found1)
        let found2 = this.chooseCell(2);
        let exact2 = random(found2)
        let found3 = this.chooseCell(3);
        let exact3 = random(found3)
        let found4 = this.chooseCell(4);
        let exact4 = random(found4)

        if (exact2){
            // this.energy +=4;
            let x = exact2[0];
            let y = exact2[1];

            for (let i = 0; i < grassEaterArr.length; i++) {
                if( grassEaterArr[i].x == x && grassEaterArr[i].y == y ){
                    grassEaterArr.splice(i, 1)
                }
            }

            matrix[y][x] = 5
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y
        }
        
        else if(exact3){
            // this.energy++;
            let x = exact3[0];
            let y = exact3[1];

            for (let i = 0; i < allEaterArr.length; i++) {
                if( allEaterArr[i].x == x && allEaterArr[i].y == y ){
                    allEaterArr.splice(i, 1)
                }
            }

            matrix[y][x] = 5
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y
        }
        else if(exact4){
            // this.energy++;
            let x = exact4[0];
            let y = exact4[1];

            for (let i = 0; i < aeEeaterArr.length; i++) {
                if( aeEeaterArr[i].x == x && aeEeaterArr[i].y == y ){
                    aeEeaterArr.splice(i, 1)
                }
            }

            matrix[y][x] = 5
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y
        }
        else if(exact1){
            // this.energy++;
            let x = exact1[0];
            let y = exact1[1];

            for (let i = 0; i < grassArr.length; i++) {
                if( grassArr[i].x == x && grassArr[i].y == y ){
                    grassArr.splice(i, 1)
                }
            }

            matrix[y][x] = 5
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y
        }
        else {
            this.move()
        }
    }
    move(){
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 5
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy--

            if(this.energy < 0){
                this.die()
            }
        }else {
            this.energy--
            if(this.energy < 0){
                this.die()
            }
        }
    }
    die(){
        for (let i = 0; i < FunnyKillerArr.length; i++) {
            if( FunnyKillerArr[i].x == this.x && FunnyKillerArr[i].y == this.y ){
                FunnyKillerArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }

}