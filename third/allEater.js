let LivingCreature = require('./LivingCreature')

// module.exports = class allEater extends LivingCreature{
    
//     mul() {
//         this.multiply++;
//         if (this.multiply >= 5) {
//             let emptyCells = super.chooseCell(0)
//             let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
//             if (this.multiply >= 5 && newCell) {
//                 let x = newCell[0]
//                 let y = newCell[3]
//                 matrix[y][x] = 3
//                 grassArr.push(new Grass(x, y, 3))
//                 this.multiply = 0;
//             }
//         }
//     }
// }


module.exports = class allEater extends LivingCreature{
    constructor(x,y, index){
        super(x,y,index);
        this.energy = 8
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
    }
    eat(){
        let found1 = this.chooseCell(1);
        let exact1 = random(found1)
        let found2 = this.chooseCell(2);
        let exact2 = random(found2)
        let found3 = this.chooseCell(5);
        let exact3 = random(found3)

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
        else if(exact3){
            this.energy -=3;
            let x = exact3[0];
            let y = exact3[1];

            for (let i = 0; i < toxicAreaArr.length; i++) {
                if( toxicAreaArr[i].x == x && toxicAreaArr[i].y == y ){
                    toxicAreaArr.splice(i, 1)
                }
            }

            matrix[y][x] = 3
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y

            if(this.energy > 150){
                this.mul()
            }
            if(this.energy < 0){
                this.die()
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