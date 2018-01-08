/*

This JavaScript file provides following functionality
- Pressing s toggles the side bar [on the left side]

*/
function toggleSidebar()
{
  // we toggle the sidebar
      var sidebar = $('div.sphinxsidebar');
      sidebar.toggle();
      if( sidebar.is(':visible') ) {
          // it's visible, assign left margin to body 
          $('div.bodywrapper').css('margin-left','230px');
          $.cookie('research.sidebar', 'visible');
      }
      else {
          // it's not visible remove left margin of body
          $('div.bodywrapper').css('margin-left','0px');
          $.cookie('research.sidebar', 'hidden');
      }
}

$(document).ready(function() {
    // code to be executed at document load time
    // lets check if the sidebar is visible or not
    var value =  $.cookie('research.sidebar');
    if ('hidden' == value)
    {
      // lets make the sidebar invisible
      toggleSidebar();
    }
    else{
      // nothing to do
    }
});

$.model = {};
$.model.animatingTransition = false;

//alert(s);
$(document).bind('keydown', function(e){
    var w = e.which;
    var b = 66;
    var n = 78;
    var p = 80;
    var s = 83;
    var t = 84;
    if (w != b && w != n && w != p && w != s && w != t)
    {
      return;
    }
    if (w == s)
    {
      toggleSidebar();
      return;
    }
    if ($.model.animatingTransition){
        // another transition is already going on
        return;
    }
    var scrollHeight = $(window).scrollTop();
    console.log('Current height: ', scrollHeight);
    var links = $('a.headerlink');
    var i=0;
    var curLink = null;
    var curLinkTop = 0;
    for (; i < links.length; ++i)
    {
      var curLink = $(links[i]);
      var curLinkTop = curLink.offset().top;
      // We are giving a margin of additional 2 pixels in computation here
      if (curLinkTop < scrollHeight + 2){
        continue;
      }
      // we reached the first link immediately below visible area
      break;
    }
    if(i == links.length)
    {
      //curLinkTop = $(window).height();
      curLinkTop = curLinkTop + 150;
      curLink = null;
    }
    var nextLink = null;
    if (w == t)
    {
      nextLink = $(links[0]);
    }
    else if(w == b){
      nextLink = $(links[links.length -1]);
    }
    else if (i < links.length && w == n)
    {
      // next control
      if (curLinkTop -  scrollHeight > 100){
        // We are in the middle of current slide
        var nextLink = $(links[i]);
      }
      else if (i < links.length - 1){
        // We are at the beginning of next slide
        var nextLink = $(links[i+1]);
      }
      else{
        var nextLink = $(links[i]);
      }
    }
    else if (w == p && i > 0)
    {
      // previous control
      if (curLinkTop -  scrollHeight > 100 && i - 2 >= 0){
        // We are in the middle of current slide
        var nextLink = $(links[i - 2]);
      }
      else {
        // We are at the beginning of next slide
        var nextLink = $(links[i - 1]);
      }
    }
    if(!nextLink)
    {
      return;
    }
    var targetPos = nextLink.offset().top;
    targetPos = targetPos - 10;
    if (targetPos < 0) {
        targetPos = 0;
    }
    if (w == t)
    {
        targetPos = 0;
    }
    /*
    var windowHeight = $(window).height() - 100;
    if (targetPos > windowHeight){
        targetPos = windowHeight;
    }
    */
    $.model.animatingTransition = true;
    $('html, body').animate({ scrollTop: targetPos }, 'slow');
    $.model.animatingTransition = false;

});
