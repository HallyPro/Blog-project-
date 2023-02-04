const blogs = [
    {
        user : {
            id: 'hallyPro',
            name: 'Hally'
        },
        content: [ 
        { 
            topic: 'criticalMatter',
            post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            views: 300,
            likes: 150,
            comment: [],
            postDate: '26-01-2023' 
        }],
    },

    {
        user : {
            id: 'BigFish',
            name: 'Abbey Fisher'
        },
        content: [{
            topic: 'thinkingOutLoud',
            post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            views: 200,
            likes: 100,
            comment: [],
            postDate: '24-01-2023'
        }]
    },
]

const users = [
    {
        id: 'BigFish', 
        name: 'Abbey Fisher',
        password: 'Secret'
    },
    {
        id: 'hallyPro',
        name: 'Hally',
        password: 'Secret'
    }
]

const fetchAllBlogs = () => {
    return blogs; 
}

const fetchUserBlog = (id) => {
    return blogs.find((user) => {
        return user.user.id === id;
    });
}

const fetchUserDetail = (userID, password) => {
    const currentUser = users.find((user) => {
        return user.id === userID
    });

    if (currentUser.password === password) {
        return currentUser;
    }
}

const addUser = (id, name, password) => {
    const newUser = {
        id, 
        name,
        password
    }
    users.push(newUser);
    return newUser;
}

const addComment = ( topic, userID, text) => {
    const isUser = users.find((user) => {
        return user.id === userID;
    });

    if(isUser) {
        const isTopic = blogs.find((blog) => {
             const blogContent = blog.content
             return blogContent.find((match) => {
                return match.topic === topic;
             })
        });

        if(isTopic) {
            const newComment = {
                userID, 
                text
            }
            console.log(newComment)
            const { content: [{comment}]} = isTopic
            comment.push(newComment);
            return newComment;
        }
    }
}

module.exports = {
    fetchAllBlogs,
    fetchUserBlog,
    fetchUserDetail,
    addUser,
    addComment
}