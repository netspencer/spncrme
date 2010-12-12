/*
 * Main Javascript File for http://spncr.me
 * http://netspencer.com
 *
 * Copyright (c) 2010 Spencer Shcoeben
 *
 */

$(document).ready(function(){
	
	$('ul#nav li').ahover();
		
	var queryhash = window.location.hash;
	
	homeBubbles();
	
	expand_list();
			
	hideAll();
	
	switch (queryhash) {
		case "#home":
			showHome();
			break;
		case "#about":
			showAbout();
			break;
		case "#projects":
			showProjects();
			break;
		case "#things":
			showThings();
			break;
		case "#friends":
			showFriends();
			break;
		case "#contact":
			showContact();
			break;
		default:
			showHome();
			break;
	}
	
	$("div#main h1").click(showHome);
	$("ul#nav li.about").click(showAbout);
	$("ul#nav li.projects").click(showProjects);
	$("ul#nav li.things").click(showThings);
	$("ul#nav li.friends").click(showFriends);
	$("ul#nav li.contact").click(showContact);
});

function expand_list() {
	$("ul.img_list.expand li").click(function() {
		$("ul.img_list.expand li div.details").hide();
		$(this).find("div.details").show();
	});
}

function setHash(hash) {
	window.location.hash = hash;
}

function hideAll() {
	$("div#main div.content div.page").not(".current").hide();
}

function treatCurrent() {
	$("div#main div.content div.page").slideUp(500);
	$("#footer").fadeOut(500);
	$("div#main div.content div.page").filter(".current").removeClass("current");
	$("ul#nav li").filter(".current").removeClass("current");
}

function slideNext(section) {
	setTimeout("showSection('"+section+"');", 500);
}

function showSection(section) {
	$('div#main div.content div.page').filter(section).slideDown();
	$("#footer").fadeIn(500);
}

function homeBubbles() {
	$("ul#networks li").each(function(){
		item = $(this).attr("class");
		dynamic_url = "inc/"+item+".php";
				
		if ($("ul#networks_hover ."+item)) {
			hover_item = $("ul#networks_hover ."+item);
			if (hover_item.attr("rel")=="dynamic") {
				buildBubble(this, {url: dynamic_url, prerender: true});
			} else if (hover_item.html()) {
				text = hover_item.html();
				buildBubble(this, {text: text, prerender: true});
			}
		} else {
			buildBubble(this, {text: "Uh oh", prerender: true});
		}
						
	});
}

function buildBubble(element, content) {
		$(element).qtip({
			content: content,
			style: {
				name: "light",
				color: "white",
				font: "Helvetica",
				tip: 'bottomMiddle',
				background: '#FF3432',
				padding: 0,
				width: {
					min: 0,
					max:300
				},
				border: {
			    	width: 7,
			        radius: 5,
			   		color: '#FF3432'
				},
			},
			position: {
		      corner: {
		         target: 'topMiddle',
		         tooltip: 'bottomMiddle'
		      }
			}
	   });
	
}

function loadLifestream() {
	$("#things").text("Loading...");
	$("#things").load("inc/lifestream.php #activity_list");
}

function showHome() {
	setHash("#home");
	treatCurrent();
	document.title = "Spencer Schoeben - Home";
	slideNext("#home");
	$("div#main div.content div.page").filter("#home").addClass("current");
}

function showAbout() {
	setHash("#about");
	treatCurrent();
	document.title = "Spencer Schoeben - About";
	slideNext("#about");
	$("div#main div.content div.page").filter("#about").addClass("current");
	$("ul#nav li").filter(".about").addClass("current");
}

function showProjects() {
	setHash("#projects");
	treatCurrent();
	document.title = "Spencer Schoeben - Projects";
	slideNext("#projects");
	$("div#main div.content div.page").filter("#projects").addClass("current");
	$("ul#nav li").filter(".projects").addClass("current");
}

function showThings() {
	setHash("#things");
	treatCurrent();
	document.title = "Spencer Schoeben - Things";
	slideNext("#things");
	$("div#main div.content div.page").filter("#things").addClass("current");
	$("ul#nav li").filter(".things").addClass("current");
}

function showFriends() {
	setHash("#friends");
	treatCurrent();
	document.title = "Spencer Schoeben - Friends";
	slideNext("#friends");
	$("div#main div.content div.page").filter("#friends").addClass("current");
	$("ul#nav li").filter(".friends").addClass("current");
}

function showContact() {
	setHash("#contact");
	treatCurrent();
	document.title = "Spencer Schoeben - Contact";
	slideNext("#contact");
	$("div#main div.content div.page").filter("#contact").addClass("current");
	$("ul#nav li").filter(".contact").addClass("current");
}