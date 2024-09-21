const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0,
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    while (minesPlanted < minesAmount) {
        const rowSel = Math.floor(Math.random() * rows)
        const columnsSel = Math.floor(Math.random() * columns)

        if (!board[rowSel][columnsSel].mined) {
            board[rowSel][columnsSel].mined = true
            minesPlanted++
        }
    }
}

export const createMineBoard = (rows, columns, minesAmount) =>  {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}