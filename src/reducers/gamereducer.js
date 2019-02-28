export default (state = {}, action) => {
    let newState;
    const { history, current, winner, moves, id, formattedWaitTime } = action;

    switch (action.type) {
        case 'ADD_GAME':
            newState = Object.assign({}, state, {
                [id]: {
                    history: history,
                    current: current,
                    winner: winner,
                    moves: moves,
                    id: id
                }
            });
            return newState;

        case 'UPDATE_GAME':
            const newGame = Object.assign({}, state[id], { formattedWaitTime });
            newState = Object.assign({}, state, {
                [id]: newGame
            });
            return newState;
    }
};