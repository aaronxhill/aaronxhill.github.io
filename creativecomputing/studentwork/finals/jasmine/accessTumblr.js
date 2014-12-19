// READ photos from photosofstrangersnyc.tumblr.com

var raw_url = "http://api.tumblr.com/v2/blog/photosofstrangersnyc.tumblr.com/posts/photo?api_key=d4x5ts9xOELVoPczg9IE2WmAFnxMO9snH8CSEKt2c1ACTIEqLY";

photoObject = {};

jQuery(document).ready(function($) {
  $.ajax({
  url : raw_url,
  dataType : "jsonp",
  success : function(parsed_json) {
  photoObject = parsed_json;
  }
  })})

var content = '';

window.onload = function () {

var replaceContent = document.getElementById('fotoContent');

    for (var i = 0; i < photoObject.response.posts.length; i++) {

        for (var j = 0; j < photoObject.response.posts[i].photos.length; j++) {
    
            content = content + '<img src="' + photoObject.response.posts[i].photos[j].original_size.url + '">';
            console.log(photoObject.response.posts[i].photos[j].original_size.url);
        
        }

    }

replaceContent.innerHTML = content; 

}
  



