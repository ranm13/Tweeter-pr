const Renderer = function(){
   
    const renderPosts = function(posts){
        $("#posts").empty()
        for(let post of posts){
            $("#posts").append(`<div class="post" id=${post.id}><h1 class="posts">${post.text}</h1></div>`)
            for(let comment of post.comments){
                $(`#${post.id}`).append(`<div class="comments" id=${comment.id}>${comment.text}</div>`)
            }
            $(`#${post.id}`).append(`<div class="user-comment"><input type="text" class="comment-input" placeholder="Got something to say?">
            <button class="comment-submit">Comment</button><br></div><div class="delete">Delete post</div>`)
        }
    }
    return{
        renderPosts
    }
}