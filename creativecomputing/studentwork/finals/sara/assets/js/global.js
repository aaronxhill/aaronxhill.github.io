var * = jQuery("*");

jQuery("#*").click(function(){
for(var i = 0; i < 5; i++){
    var random_color = Math.floor( Math.random() * (colors.length ) );
    jQuery(  squares[i] ).css({ 'background-color' : colors[random_color] });
}
})

jQuery('#awesome').dblclick(function(){
     jQuery(this).css({ 'opacity' : '0.5'});
})
