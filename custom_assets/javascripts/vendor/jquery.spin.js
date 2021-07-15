$.fn.spin = function(opts) {
	this.each(function() {
		var $this = $(this),
				spinner = $this.data('spinner');

		if (spinner) spinner.stop();
		if (opts !== false) {
			opts = $.extend({color: $this.css('color')}, opts);
			spinner = new Spinner(opts).spin(this);
			$this.data('spinner', spinner);
		}
	});
	return this;
};

/* to use

 spinner = $('#middle-area .explorer-full').first().spin(main.spinner_opts);
 or to stop
 spinner.spin(false)
*/
;
