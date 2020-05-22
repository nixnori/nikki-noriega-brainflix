import React from 'react';
import './Comments.scss';

const Comments = props => {

    return (
        <div className="comments">
            {
                props.comments.map(comment => {
                    return (
                    <div className="comments__card" key={comment.id}>
                        <img className="comments__pic" src={comment.pic}/>
                        <div className="comments__item">
                            <ul className="comments__list">
                                <li className="comments__name">{comment.name}</li>
                                <li className="comments__date">{comment.date}</li>
                            </ul>
                            <p className="comments__text">{comment.comment}</p>
                        </div>

                    </div>
                    )
                })
            }
        </div>
    )
}

export default Comments;