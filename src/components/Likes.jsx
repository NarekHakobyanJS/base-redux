import React from 'react'
import { connect } from "react-redux"
import { decrementLikes, incrementLikes } from '../redux/actions'

function Likes(props) {
    return (
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}>❤️ {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

let mapStateToProps = (state) => {
    const { likesReducer } = state
    return {
        likes: likesReducer.likes
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)