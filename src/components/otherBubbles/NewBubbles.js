import React from 'react';
import './NewBubbles.scss';
import makeNullsArray from './makeNullsArray';
import Bubble from './Bubble';
import BubblesContainer from './BubblesContainer';

export default function NewBubbles(props) {
    const array = makeNullsArray(props.numberOfBubbles);

    const bubbles = array.map((_, i) =>
        <Bubble key={i} num={i} />
    )

    return (
        <BubblesContainer>
            {bubbles}
        </BubblesContainer>
    )
}
