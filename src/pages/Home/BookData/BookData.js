import React from 'react'
import { GroupDiv, P1, P2, Img } from '../styledHome';

function row(props) {
    return (
        <GroupDiv>
            <Img src={props.img} alt="book_image" />
            <P1>{props.name}</P1>
            <P2>Owned By: {props.owner}</P2>
        </GroupDiv>

    )
}

export default row
