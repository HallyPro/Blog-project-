const blogModel = require('./blogs.model');

module.exports = {
    Query: {
        blogs: () => {
            return blogModel.fetchAllBlogs();
        },
        userBlog: (_, args) => {
            return blogModel.fetchUserBlog(args.id);
        },
        myAccount: (_, args) => {
            return blogModel.fetchUserDetail(args.userID, args.password);
        }
    },
    Mutation: {
        addUser : (_, args) => {
            return blogModel.addUser(args.id, args.name, args.password);
        },
        addComment : (_, args) => {
            return blogModel.addComment(args.topic, args.userID, args.text);
        }
    }
}