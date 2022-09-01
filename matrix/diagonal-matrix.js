import readlineSync from "readline-sync"
// import { Color } from "colors-cli/lib/color"
import color from 'colors-cli'

function MatrixInput(name){
    let rows = readlineSync.questionInt(color.blue_bbt(`Enter ${name} number of rows: `))
    let cols = readlineSync.questionInt(color.green(`Enter  ${name} number of columns: `))
    console.log(`Given matrix is ${name} which has ${rows} x ${cols} dimension`)
    
    let Matrix = new Array(rows) //[_ _ _]
    // console.log(MatrixA.length)
    for (let i=0;i<Matrix.length;i++){
        Matrix[i] = new Array(cols)
    } //[[][][]]
    // console.log(Matrix)

    for (let i=0;i<rows;i++){
        for (let j=0;j<cols;j++){
            Matrix[i][j] = readlineSync.questionInt(`Enter element of ${name} ${i},${j}: `)
        }
    }
    return Matrix

}
// console.log(MatrixInput())
// MatrixInput()
let mat = MatrixInput()
function PrintMatrix(matrix){
    for (let i=0;i<matrix.length;i++){
        var res = ""
        for (let j=0;j<matrix[i].length;j++){
            res+=(matrix[i][j])+' '
        }
        console.log(color.red(res))
    }
}
PrintMatrix(mat)

for(let i=0,j=2;i<3,j>=0;i++,j--){
    console.log(mat[i][i])
}



