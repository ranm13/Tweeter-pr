const Renderer = function(){
   
    const renderPosts = function(posts){
        $("#posts").empty()
        for(let post of posts){
            let postText = $(`<div class="post" id=${post.id}><h1 class="posts">${post.text}</h1></div>`)
            $("#posts").append(postText)
            for(let comment of post.comments){
                let commentText = $(`<div class="comments" id=${comment.id}><span class="delete-comment"> X </span>${comment.text}</div>`)
                $(`#${post.id}`).append(commentText)
            }
            let userIntercationBlock = $(`<div class="user-comment"><input type="text" class="comment-input" placeholder="Got something to say?">
            <button class="comment-submit">Comment</button><br></div><div class="delete">Delete post</div>`)
            $(`#${post.id}`).append(userIntercationBlock)
        }
    }
    return{
        renderPosts
    }
}