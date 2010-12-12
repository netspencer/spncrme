/* Copyright (c) 2010 Spencer Schoeben (spencer@netspencer.com)
 * MIT (http://www.opensource.org/licenses/mit-license.php) licensed.
 *
 * Version: 1.0
 *
 * Requires:
 *   jQuery 1.2+
 */

(function($) {
	
	$.extend({
        vcard: {
            version: 1.0,
            defaults: {
                domain: 'spncr.me'
            }
        }
    });

	$.fn.extend({
		vcard: function(say) {
			return this.alert(say);
		}
	});
	
})(jQuery);