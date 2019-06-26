const t = Tweeter()
const r = Renderer()

r.renderPosts(t.getPosts())

// uploading posts from the input by using the twit button
const post = function(){
   const postInput = $("#input").val()
   t.addPost(postInput)
   r.renderPosts(t.getPosts())
}

//removes posts from the page when clicking the delete button
$("#posts").on("click", ".delete", function(){
    const postId = $(this).closest(".post").attr("id")
    t.removePost(postId)
    r.renderPosts(t.getPosts())
})

//add comments from the comment input by using the comment button
$("#posts").on("click", ".comment-submit", function(){
    const commentInput = $(this).closest(".user-comment").find(".comment-input").val()
    const postId = $(this).closest(".post").attr("id")
    t.addComment(commentInput, postId)
    r.renderPosts(t.getPosts())
})

//remove comments from the page when clicking the delete-comment "X" button
$("#posts").on("click", ".delete-comment", function(){
    const postId = $(this).closest(".post").attr("id")
    const commentID = $(this).closest(".comments").attr("id")
    t.removeComment(postId, commentID)
    r.renderPosts(t.getPosts())
})
