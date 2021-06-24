export const initialState = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: '찬욱',
            },
            content: '첫 번째 게시글 #해시태그 #익스프레스',
            Images: [
                {
                    src: 'https://thebook.io/img/covers/cover_080263.jpg',
                },
                {
                    src: 'https://thebook.io/img/covers/cover_080233.jpg',
                },
                {
                    src: 'https://thebook.io/img/covers/cover_006945.jpg',
                },
            ],
            Comments: [
                {
                    User: {
                        nickname: 'user1',
                    },
                    content: 'comment 1',
                },
                {
                    User: {
                        nickname: 'user2',
                    },
                    content: 'comment 2',
                },
                {
                    User: {
                        nickname: 'user3',
                    },
                    content: 'comment 3',
                },
            ],
        },
    ],
    imagePaths: [],
    postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
};

const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (payload) => ({
    type: ADD_COMMENT,
    payload,
});

const dummyPost = {
    id: 2,
    content: 'dummyContent',
    User: {
        id: 1,
        nickname: 'dummyUser',
    },
    Images: [],
    Comments: [],
};

const dummyComment = {
    User: {
        nickname: 'user1',
    },
    content: 'comment1',
    User: {
        nickname: 'user2',
    },
    content: 'comment2',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        case ADD_COMMENT: {
            console.log(action.payload);
            return {
                ...state,
                mainPosts: state.mainPosts.map((post, idx) => {
                    if (post.id === action.payload) {
                        return {
                            ...state.mainPosts[idx],
                            Comments: [dummyComment, ...state.mainPosts[idx].Comments],
                        };
                    }
                    return state.mainPosts[idx];
                }),
            };
        }

        default:
            return state;
    }
};

export default reducer;
