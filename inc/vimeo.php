<?php
 
// Make sure SimplePie is included. You may need to change this to match the location of simplepie.inc.
require_once('simplepie.inc');
 
// We'll process this feed with all of the default options.
$feed = new SimplePie('http://vimeo.com/user2140400/videos/rss');
 
// This makes sure that the content is sent to the browser as text/html and the UTF-8 character set (since we didn't change it).
$feed->handle_content_type();

$i = 0;

foreach ($feed->get_items() as $item) {
	$i++;
	$video_id = $item->get_link();
	$video_id = substr($video_id, 17);
	
	if ($i>0) {
		break;
	}
}
 
?>

<object width="250" height="200"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=<?php echo $video_id; ?>&amp;autoplay=1&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=<?php echo $video_id; ?>&amp;autoplay=1&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="250" height="200"></embed></object>