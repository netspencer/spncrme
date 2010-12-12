<?php
 
// Make sure SimplePie is included. You may need to change this to match the location of simplepie.inc.
require_once('simplepie.inc');
 
// We'll process this feed with all of the default options.
$feed = new SimplePie('http://blippy.com/netspencer/atom');
 
// This makes sure that the content is sent to the browser as text/html and the UTF-8 character set (since we didn't change it).
$feed->handle_content_type();

$i = 0;

foreach ($feed->get_items() as $item) {
	$i++;
	$purchase = $item->get_title();
	$purchase = str_replace('netspencer', '', $purchase);
	echo $purchase;
	if ($i>0) {
		break;
	}
}
 
?>

