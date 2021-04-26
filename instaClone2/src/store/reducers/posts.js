import { ADD_POST, ADD_COMMENT } from "../actions/actionsTypes";
const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Antonio Pereira',
        email: 'Pereira@email.com',
        image: require('../../assets/img/fence.jpg'),
        comments: [{
            nickname: 'Jhon Ray Sheldon',
            comment: 'Stinnunig!'
        }, {
            nickname: 'Jax Riggs',
            comment: 'Vou equalizar sua cara'
        }]
    }, {
        id: Math.random(),
        nickname: 'Antonio Pereira',
        email: 'Pereira@email.com',
        image: require('../../assets/img/bw.jpg'),
        comments: [
            {
                nickname: 'Creusa',
                comment: 'Lindo da tia!'
            },
            {
                nickname: 'Joana',
                comment: 'Manda um abraço pra mãe'
            },
        ]
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {

                            post.comments = post.comments.concat(action.payload.comment)
                        }
                        else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state
    }
}

export default reducer;