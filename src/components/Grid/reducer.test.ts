import * as reducer from "./reducer"
// @ponicode
describe("reducer.default", () => {
    test("0", () => {
        let object: any = [{ row: 10, column: 196, playerNumber: -5.48, isEmpty: true }, { row: 30, column: 202, playerNumber: -5.48, isEmpty: false }]
        let object2: any = [{ row: 4, column: 164, playerNumber: -5.48, isEmpty: false }, { row: 10, column: 252, playerNumber: -100, isEmpty: false }, { row: 3.0, column: 164, playerNumber: 0, isEmpty: false }, { row: 0, column: 254, playerNumber: 1, isEmpty: true }]
        let object3: any = [{ row: 4, column: 224, playerNumber: 1, isEmpty: true }]
        let object4: any = [{ row: 0, column: 250, playerNumber: 0, isEmpty: true }]
        let object5: any = [{ row: 0, column: 196, playerNumber: 1, isEmpty: false }, { row: 30, column: 164, playerNumber: 1, isEmpty: true }, { row: 5, column: 202, playerNumber: 1, isEmpty: false }]
        let object6: any = [object, object2, object3, object4, object5]
        let callFunction: any = () => {
            reducer.default({ cells: object6, currentPlayer: -0.5, isGameOver: false }, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object: any = [{ row: 5, column: 239, playerNumber: -100, isEmpty: false }, { row: 10, column: 176, playerNumber: 1, isEmpty: false }, { row: 4, column: 142, playerNumber: -5.48, isEmpty: false }]
        let object2: any = [{ row: 3.0, column: 164, playerNumber: 100, isEmpty: true }, { row: 3.0, column: 135, playerNumber: -5.48, isEmpty: false }]
        let object3: any = [{ row: 10, column: 202, playerNumber: 100, isEmpty: true }, { row: 30, column: 142, playerNumber: 1, isEmpty: true }, { row: 30, column: 164, playerNumber: 0, isEmpty: false }]
        let object4: any = [{ row: 3.0, column: 224, playerNumber: 0, isEmpty: false }, { row: 3.0, column: 142, playerNumber: -100, isEmpty: true }, { row: 3.0, column: 161, playerNumber: -5.48, isEmpty: false }, { row: 3.0, column: 176, playerNumber: 0, isEmpty: false }, { row: 4, column: 252, playerNumber: -5.48, isEmpty: false }]
        let object5: any = [{ row: 30, column: 129, playerNumber: -5.48, isEmpty: true }, { row: 4, column: 250, playerNumber: -5.48, isEmpty: true }, { row: 3.0, column: 250, playerNumber: -5.48, isEmpty: false }, { row: 0, column: 142, playerNumber: 1, isEmpty: true }]
        let object6: any = [object, object2, object3, object4, object5]
        let callFunction: any = () => {
            reducer.default({ cells: object6, currentPlayer: -29.45, isGameOver: false }, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object: any = [{ row: 0, column: 143, playerNumber: -100, isEmpty: true }, { row: 30, column: 142, playerNumber: -100, isEmpty: false }, { row: 0, column: 250, playerNumber: 100, isEmpty: true }]
        let object2: any = [{ row: 10, column: 254, playerNumber: -100, isEmpty: true }, { row: 0, column: 254, playerNumber: -100, isEmpty: false }]
        let object3: any = [{ row: 4, column: 239, playerNumber: 1, isEmpty: false }, { row: 5, column: 159, playerNumber: 1, isEmpty: true }, { row: 5, column: 142, playerNumber: 1, isEmpty: true }]
        let object4: any = [{ row: 5, column: 202, playerNumber: 1, isEmpty: true }, { row: 4, column: 129, playerNumber: 100, isEmpty: false }, { row: 5, column: 135, playerNumber: 0, isEmpty: false }, { row: 10, column: 239, playerNumber: -5.48, isEmpty: false }, { row: 0, column: 202, playerNumber: 1, isEmpty: true }]
        let object5: any = [{ row: 4, column: 135, playerNumber: 0, isEmpty: true }, { row: 10, column: 250, playerNumber: 1, isEmpty: false }, { row: 4, column: 252, playerNumber: -5.48, isEmpty: false }, { row: 30, column: 159, playerNumber: -5.48, isEmpty: true }]
        let object6: any = [object, object2, object3, object4, object5]
        let callFunction: any = () => {
            reducer.default({ cells: object6, currentPlayer: 10.23, isGameOver: true }, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object: any = [{ row: 4, column: 164, playerNumber: 1, isEmpty: true }, { row: 5, column: 196, playerNumber: 100, isEmpty: false }, { row: 3.0, column: 129, playerNumber: -5.48, isEmpty: false }]
        let object2: any = [{ row: 0, column: 143, playerNumber: 100, isEmpty: false }, { row: 3.0, column: 202, playerNumber: -100, isEmpty: true }, { row: 0, column: 129, playerNumber: 0, isEmpty: false }, { row: 0, column: 135, playerNumber: 0, isEmpty: false }, { row: 0, column: 161, playerNumber: 1, isEmpty: false }]
        let object3: any = [{ row: 5, column: 224, playerNumber: 100, isEmpty: false }, { row: 10, column: 254, playerNumber: 0, isEmpty: true }, { row: 30, column: 143, playerNumber: 1, isEmpty: true }]
        let object4: any = [object, object2, object3]
        let callFunction: any = () => {
            reducer.default({ cells: object4, currentPlayer: 1.0, isGameOver: false }, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object: any = [{ row: 10, column: 196, playerNumber: 1, isEmpty: false }]
        let object2: any = [{ row: 4, column: 161, playerNumber: 0, isEmpty: false }, { row: 4, column: 196, playerNumber: 1, isEmpty: true }, { row: 10, column: 196, playerNumber: -100, isEmpty: true }, { row: 10, column: 176, playerNumber: 0, isEmpty: false }, { row: 3.0, column: 164, playerNumber: -100, isEmpty: false }]
        let object3: any = [{ row: 0, column: 254, playerNumber: -5.48, isEmpty: true }, { row: 0, column: 250, playerNumber: -100, isEmpty: false }, { row: 5, column: 161, playerNumber: 0, isEmpty: true }, { row: 4, column: 176, playerNumber: 0, isEmpty: false }, { row: 4, column: 254, playerNumber: 100, isEmpty: false }]
        let object4: any = [{ row: 3.0, column: 135, playerNumber: 0, isEmpty: true }, { row: 10, column: 142, playerNumber: 0, isEmpty: false }, { row: 30, column: 250, playerNumber: -5.48, isEmpty: false }]
        let object5: any = [object, object2, object3, object4]
        let callFunction: any = () => {
            reducer.default({ cells: object5, currentPlayer: -1.0, isGameOver: false }, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            reducer.default({ cells: [], currentPlayer: -Infinity, isGameOver: false }, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
