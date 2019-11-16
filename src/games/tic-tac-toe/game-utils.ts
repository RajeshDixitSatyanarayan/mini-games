const possibilities = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ]
]

export const processInput = (input: Array<string>): Array<number> => {
    let returnPositions: Array<number> = [];
    const isWon: boolean = possibilities.some( (possibility: Array<number>) =>  {
        if (input[ possibility[ 0 ] ] === input[ possibility[ 1 ] ] && input[ possibility[ 1 ] ] === input[ possibility[ 2 ] ]) {
            returnPositions = [ ...possibility ];
            return true;
        }
    },);
    return returnPositions;
}