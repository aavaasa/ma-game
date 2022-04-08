let LivingCreature = require('./LivingCreature')

module.exports = class funnyKiller extends LivingCreature{
    constructor(x,  y) {
        super(x, y)
        this.energy = 3000;
    }
    chooseCell(char) {
      this.getNewDirections();
      return super.chooseCell(char)
        
    }
    eat(){
        let found1 = super.chooseCell(1);
        let exact1 = found1[Math.floor(Math.random() * found1.length)]
        let found2 = super.chooseCell(2);
        let exact2 = found2[Math.floor(Math.random() * found2.length)]
        let found3 = super.chooseCell(3);
        let exact3 = found3[Math.floor(Math.random() * found3.length)]
        let found4 = super.chooseCell(4);
        let exact4 = found4[Math.floor(Math.random() * found4.length)]

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

            for (let i = 0; i < aeEaterArr.length; i++) {
                if( aeEaterArr[i].x == x && aeEaterArr[i].y == y ){
                    aeEaterArr.splice(i, 1)
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
        let found = super.chooseCell(0);
        let exact = found[Math.floor(Math.random() * found.length)]

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