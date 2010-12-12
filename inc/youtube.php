<?php
 
// Make sure SimplePie is included. You may need to change this to match the location of simplepie.inc.
require_once('simplepie.inc');
 
// We'll process this feed with all of the default options.
$feed = new SimplePie('http://gdata.youtube.com/feeds/base/users/netspencer/uploads');
 
// This makes sure that the content is sent to the browser as text/html and the UTF-8 character set (since we didn't change it).
$feed->handle_content_type();

$i = 0;

foreach ($feed->get_items() as $item) {
	$i++;
	$video_id = $item->get_id();
	$video_id = substr($video_id, 43);
	
	if ($i>0) {
		break;
	}
}
 
?>

<object width="250" height="200"><param name="movie" value="http://www.youtube.com/v/<?php echo $video_id; ?>&autoplay=1&hl=en_US&fs=1&rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/<?php echo $video_id; ?>&autoplay=1&hl=en_US&fs=1&rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="250" height="200"></embed></object>

