
const ADD_POST = "ADD_POST"

let initialState ={
posts:[
    {id:1, name:"Мери Поппинс", postText:"До этого я летала на зонтике. Но в этот раз подумала, что с меня достаточно этих полетов без шлема и парашута. Решила обратиться “Zaberi-Bus”. Выполнили работу профессионально."},
    {id:2, name:"Козенков Сергей", postText:"Выполнили работу профессионально. Но в этот раз подумала, что с меня достаточно этих полетов без шлема и парашута. Решила обратиться “Zaberi-Bus”.До этого я летала на зонтике."},
    {id:3, name:"Алишер Моргенштерн", postText:"Решил обратиться “Zaberi-Bus”. Выполнили работу профессионально. До этого я летала на зонтике. Но в этот раз подумала, что с меня достаточно этих полетов без шлема и парашута."},
]}

const CustomerReviewsReducer = (state = initialState, action) =>{
    switch (action.type) {

        case ADD_POST:{
            let newPost ={
                id: 4,
                name: action.nameA,
                postText: action.feedBack,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],

            }
        }
        default:
            return state;

    }


}
export const addPostAC = (feedBack, nameA) =>({type:ADD_POST, feedBack, nameA})


export default CustomerReviewsReducer;