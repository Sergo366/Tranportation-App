import React, {useState} from "react"
import s from "./TextUser.module.css"
import kivitski from "../../../Images/Reviews/kovitski_.png"
import left from "../../../Images/Reviews/ArrowLeft.svg"
import right from "../../../Images/Reviews/ArrowRight.svg"


const Post = props => {
    return (
        <div>
            <div className={s.flex}>
                <div>
                    <div>
                        <img src={kivitski} alt=""/>
                    </div>

                    <div >





                        {props.posts.map((post) =>
                            <div key={post.id}>
                                <div className={s.name} >
                                    <p>{post.name}</p>
                                </div>
                                <div  className={s.text}>
                                    {post.postText}
                                </div>
                            </div>
                        )}

                    </div>
                    <div className={s.arrow}>
                        <div className={s.arrowLeft}>
                            <img src={left} alt=""/>
                        </div>
                        <div className={s.arrowRight}>
                            <img src={right} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;

