<?php
 
// Make sure SimplePie is included. You may need to change this to match the location of simplepie.inc.
require_once('simplepie.inc');
 
// We'll process this feed with all of the default options.
$feed = new SimplePie('http://feeds.foursquare.com/history/adeec32471a0df6d9bc480d592a611c4.rss');
 
// This makes sure that the content is sent to the browser as text/html and the UTF-8 character set (since we didn't change it).
$feed->handle_content_type();

$i = 0;

foreach ($feed->get_items() as $item) {
	$i++;
	$venue = $item->get_title();
	echo "I'm at <b>".$venue."</b>";
	if ($i>0) {
		break;
	}
}
 
?>

