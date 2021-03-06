import * as React from 'react';
import { processInput } from './game-utils';
// import '../../styles/tic-tac-toe'

export interface ITileInputMap {
	label: string;
	className?: string;
	onSelect: Function;
}

/**
 * Pending stuff
 * 1. processInput to not validate blank strings. -- Done
 * 2. disable actions post success -- Done
 * 3. Make selection and then show alert -- Done
 * 4. Draw strike-through for choosen pair
 * 5. Restart and score card (Player 1 win/ Draw/ Player 2)
 * 6. Size, animation and UI feedback ( Win/ Draw message) -- Done
 */


const { useState, useEffect } = React;

const TileComponent: React.FunctionComponent<ITileInputMap> = (props: ITileInputMap) => {
	return (
		<div className={props.className} onClick={ () => !props.label ? props.onSelect() : undefined }> { props.label } </div>
	);
}

export const TicTacToeComponent: React.FC<{}> = (props: {}) => {
	const [ choices, setChoices ] = useState( Array.from({ length: 9 }, () => '') );
	const [ choiceIndex, setChoiceIndex ] = useState(0);
	const [ status, setStatus ] = useState('');

	useEffect(() => {
		if (choiceIndex > 4 ) {
			const output: Array<number> = processInput(choices);
			if (output.length) {
				setStatus(`Game Won by ${ choices[ output[ 0 ] ] }`);
			}
		}
	}, [ choiceIndex ]);
	
	function getTileText(): string {
		return choiceIndex % 2 === 0 ? 'X' : '0';
	}
	function createTileGrid(): Array<React.ReactNode> {
		const changeSelector = (pos: number) => () => {
			if (status !== '') { return }
			const value: string = getTileText();
			const updatedArray: Array<string> = [ ...choices ];
			updatedArray[pos] = value;
			setChoices(updatedArray);
			setChoiceIndex( choiceIndex + 1 );
		}
		return Array.from(
			{ length: 9 },
			(_, index: number) => <TileComponent className='choice-tile' label={ choices[ index ] } key={ `tile_${index}` } onSelect={ changeSelector(index) } />
		)
	}

	return (
		<div className="tic-tac-toe-container">
			{ status !== '' ? <div className='game-status-bar'>{ status }</div> : null }
			{ createTileGrid() }
		</div>
	);
}