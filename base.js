console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // sets up a variable for the number of posts
  var numPosts=0;

/*  establishes functions for when the "Post" button is clicked   */

  $('#create-post-form').submit(function(e) {
  	e.preventDefault();
  	//console.log('Prevent default is working.');

/*   detects if creat a post is empty  */
  	if ($('#create-post').val().trim().length > 0) {
  		var postInput = $('#create-post').val();
      // console.log(postInput);
      var newPost = '<p class="list-group-item">' + postInput + '</p>';
      $('#create-post').val('');
      $('#post-list').append(newPost);
      
/* 	keeps track of how many posts there are 	*/

      numPosts++;
      // console.log(numPosts);

/* 	creates a button to clear posts after the first post is created 	*/

      if (numPosts===1) {
      	$('#post-list').after('<button class="btn btn-default pull-right" id="clear-posts">Clear Posts</button>');
      }

  	}

/*  gives the clear button function. Clears the posts, hides the clear button, and sets the number of posts back to 0   */

    $('#clear-posts').click(function(e){
      $('#post-list').empty();
      $('#clear-posts').hide();
      numPosts = 0;
    });

  });


});
