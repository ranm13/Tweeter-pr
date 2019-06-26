const Tweeter = function(){
    //Array of posts - private
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    //postIdCounter to count the number of total posts
    let postIdCounter  = _posts.length

    //commentIdCounter to count the number of total comments
    let commentIdCounter = 6

    //finds a post by using his ID
    const findPostById = function(postID){
        for(let index in _posts){
            if (_posts[index].id === postID){
                return index
            }
        }
    }

    //function that returns the posts array
    const getPosts = () => _posts

    //function that pushes new post into the posts array
    const addPost = function(text){
        const postID = "p" + (postIdCounter + 1)
        postIdCounter ++
        return _posts.push({text: text, id: postID, comments: []})
    }

    //function that removes a post from the posts array by ID
    const removePost = function(postID){
        let index = findPostById(postID)
        return _posts.splice(index, 1)
    }
        
    //function that pushes a text comment into the comments array of the post with the given ID
    const addComment = function(text, postID){
        commentIdCounter ++
        const commentID = "c" + commentIdCounter
        let index = findPostById(postID)
        return _posts[index].comments.push({id: commentID, text: text})
    }
    
    //function that removes a comment from the comments array of the specific post ID and comment ID
    const removeComment = function(postID, commentID){
        let index = findPostById(postID)
        for(let commentIndex in _posts[index].comments){
            if(_posts[index].comments[commentIndex].id === commentID){
                return _posts[index].comments.splice(commentIndex, 1)
            }  
        }
    }
    
    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}


