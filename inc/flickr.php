<?php
 
// Make sure SimplePie is included. You may need to change this to match the location of simplepie.inc.
require_once('simplepie.inc');
 
// We'll process this feed with all of the default options.
$feed = new SimplePie('http://pipes.yahoo.com/pipes/pipe.run?_id=518f0f75017c40443c54ed7c8568c2bf&_render=rss');
 
// This makes sure that the content is sent to the browser as text/html and the UTF-8 character set (since we didn't change it).
$feed->handle_content_type();

$i = 0;

foreach ($feed->get_items() as $item) {
	$i++;
	echo $item->get_title();
	if ($i>0) {
		break;
	}
}
 
?>