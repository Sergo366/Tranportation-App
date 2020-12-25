import React from "react"
import s from "./TextUser.module.css"
import Post from "./Post";


const TextUser = React.memo(props =>{

    return(
        <div className={s.container}>
            <div className={s.flex}>

                <div className={s.firstText}>
                    <div className={s.lineForText}>
                       <p>Отзывы</p>
                       <p>Что люди пишут о нас</p>
                    </div>
                </div>
                <Post posts={props.posts} />
            </div>
        </div>
    )
})
export default TextUser;