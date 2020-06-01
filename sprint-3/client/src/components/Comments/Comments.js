import React from 'react';
import './Comments.scss';

const Comments = ({comments}) => {

    return (
        <div className="comments">
            {
                comments 
                ? comments.map(comment => {
                    return (
                    <div className="comments__card" key={comment.id}>
                        <div className="comments__pic"></div>
                        <div className="comments__item">
                            <ul className="comments__list">
                                <li className="comments__name">{comment.name}</li>
                                <li className="comments__date">
                                    {new Intl.DateTimeFormat('en-US').format(new Date(comment.timestamp))}
                                </li>
                            </ul>
                            <p className="comments__text">{comment.comment}</p>
                        </div>

                    </div>
                    )
                })
                : "Loading..."
            }
        </div>
    )
}

export default Comments;