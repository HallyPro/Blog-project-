# Blog-project-
Basic Blog project using NodeJs(express)/GraphQL API

* About 

  This is a work in progress project, it is inspired by blog posts applications like posting a short content(article), commenting on the article...

* Install all dependencies

  $npm install 

* Start Application 

  $npm start 
  
 
Queries

  * fetching all blogs 
  
        Blogs {  
  
        user {
      
        id
      
        name
      
            }
        
        content {
    
        topic
      
        post
        
        comment
      
        views
      
        likes
      
        postDate 
            }
    
         }
    
* fetching single user blogs 
  
      userBlog(id: userID) {
  
      user {
    
        id
      
        name
      
      }
    
      content {
      
        topic
      
        post
      
        comment
      
        views
      
        likes
      
        postDate 
          }
  
        }
  
 * Getting your user data
  
         myAccount(userID: id, password ) {
    
          id
       
          name 
       
           }

Mutations

 * Creating new user
  
         addUser(id: userID, name: userName, password) {
    
          id,
    
          name /* response
    
        }
    
 * send comment
  
         addComment (topic: specificBlogID, userID: senderID, text: comment) {
    
          userID,
    
          text   /* response
    
          }
    
    
Validation 
    
      * userBlog
      
        - Check if userID exist 
        
      * myAccount 
      
        - Check id userID exist 
        
        - Compare query password with in memory password 
        
      * addComment 
      
        - Check if senderID exist 
        
        - Check if BlogID exist 
        
Conclusion

  - This is my very first project using graphql api, there might be some lapses, if there are kindly let me know on how things should be done better,
  your opinion is really appreciated. Thank you.
