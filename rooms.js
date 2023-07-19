class Room {
    constructor(roomIndex, x, y, width, height, cellWidth, maxIndex, r, g, b) {
        this.roomIndex = roomIndex;
        this.cells = [];
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.r = r;
        this.g = g;
        this.b = b;
        this.cellWidth = cellWidth
        this.maxIndex = maxIndex
        this.shiftDirection = -1;
    }

    addCell( index ) {
        this.cells.push( index );
    }

    cells() {
        return this.cells
    }

    getRGB() {
        return(r,g,b)
    }

    checkHasCell( index ) {
        return this.cells.includes( index );
    }
    clearCells() {
        for ( let i = 0; i < this.cells.length; i++ )
        {
            grid[this.cells[i]].setRGB(22,22,22)
            grid[this.cells[i]].setWalls( false )
        }

        this.cells = []
    }

    labelRoom() {
        // Calculate the position to draw the text centered in the room
        let textX = Math.floor((this.x + this.width / 2) * cellWidth);
        let textY = Math.floor((this.y + this.height / 2) * cellWidth);
      
        fill(0);
        textSize(25);
        textAlign(CENTER, CENTER);
        text("Room " + parseInt( this.roomIndex ), textX, textY); 
      }
      

    fillCells() {
        this.cells = []
        for( let i = 0; i < this.width; i++ )
        {
            for ( let j = 0; j < this.height; j++ ) {
                let cellIndex = index( this.x + i, this.y + j )
                if ( cellIndex > 0 && cellIndex < this.maxIndex ){
                    let cell = grid[ cellIndex ];
                    this.cells.push( cellIndex )
                    cell.setRGB( this.r, this.g, this.b, 255 );
                    cell.setWalls( true )
                }
            }
        }
    }

    finishShift() {
        this.shiftDirection = -1
    }

    shift() {
        if ( this.shiftDirection === -1 ) {
            this.shiftDirection = Math.floor( Math.random() * 4 )
            console.log( "Created new direction: ", this.shiftDirection)
        }
        switch( this.shiftDirection )
        {
            case 0: {
                this.shiftDirection = 0
                this.x -= 1;
                break;
            }
            case 1: {
                this.shiftDirection = 1
                this.x += 1;
                break;
            }
            case 2: {
                this.shiftDirection = 2
                this.y += 1;
                break;
            }
            case 3: {
                this.shiftDirection = 3
                this.y -= 1;
                break;
            }
        }
        this.clearCells()
        this.fillCells()
    }

}