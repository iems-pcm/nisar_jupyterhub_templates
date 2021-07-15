(function($) {
	$.fn.unequalHeights = function() {
		this.each(function() {
			$(this).css({"min-height" : 0});
		});
	}
})(jQuery);
