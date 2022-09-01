import readlineSync from "readline-sync"

function MatrixInput(name){
    let rows = readlineSync.questionInt(`Enter ${name} number of rows: `)
    let cols = readlineSync.questionInt(`Enter  ${name} number of columns: `)
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
        console.log(res)
    }
}
PrintMatrix(mat)


// export default MatrixInput;
// export {MatrixInput, PrintMatrix}







































// import readlineSync, { question } from "readline-sync";
// // let a = readlineSync.question("Please give me value of a : ");cx

// function MatrixInput(){
//     let rows = readlineSync.questionInt("Enter number of rows : ")
//     let cols = readlineSync.questionInt("Enter number of columns: ")
//     console.log(`Given matrix is ${rows} x ${cols} dimension`)

//     let MatrixA = new Array(rows)
//     for (let i=0;i<MatrixA.length;i++){
//         MatrixA[i] = new Array(cols)
//     }
//     for(let i=0;i<rows;i++){
//         for(let j=0;j<cols;j++){
//             MatrixA[i][j] = readlineSync.questionInt(`Enter element of ${i}, ${j} : `)
//         }
//     }
//     return MatrixA
// }

// let mat = MatrixInput()

// function print(MatrixA) {
//       let z = ' '
//       for(let p=0;p<MatrixA.length;p++){
//         for(let q=0; q<MatrixA[p].length;q++){

//             z += MatrixA[p][q]
//         }
//         z=' '
//       }
//     console.log(z)
// }

//  print(mat)