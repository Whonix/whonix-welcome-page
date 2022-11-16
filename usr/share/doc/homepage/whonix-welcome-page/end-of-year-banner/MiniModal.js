(function() {

	// Functions

	function init( $this ) {
		$this.each( function() {
			if( ! $this.hasClass('mini-modal') || ! $this.attr('id') || $this.hasClass('init-complete') ) {
				return;
			} else {
				$this.addClass('init-complete');
			}

			let content = $this.children();

			$this.empty().append(''
				+ '<div class="underlay"></div>'
				+ '<i class="fas fa-times mm-close"></i>'
				+ '<div class="content"></div>'
			);

			$this.children('.content').append( content );

			// Events

			$this.children('.underlay, .mm-close').on( 'click', function() {
				$this.miniModal('hide');
			});
		});
	}

	// Setup

	$.fn.miniModal = function(command) {
		switch( command ) {
			case 'show':
				init($(this));
				$(this).addClass('active');
				$(this).trigger( 'shown.miniModal' );
			break;
			case 'hide':
				init($(this));
				$(this).removeClass('active');
				$(this).trigger( 'hidden.miniModal' );
			break;
			case 'init':
				init($(this));
			break;
		}
	}

})();

/*
[[Category:MultiWiki]]
*/
