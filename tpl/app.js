jQuery(document).ready(function($) {

	if ( $('.lorem-ajax').length ) {
		// bt options
		$('body').on('click', '.opt-lorem', function() {
			$(this).hasClass('sel') ? $(this).removeClass('sel btn-dark').addClass('btn-outline-dark') : $(this).addClass('sel btn-dark').removeClass('btn-outline-dark');
			getLorem();
		});
		// input options
		$('input[data-opt="prnb"]').on('input', function() {
			getLorem();
		});
		// display type
		$('body').on('click', '.show-lorem', function() {
			$('.show-lorem').removeClass('sel btn-secondary').addClass('btn-outline-secondary');
			$(this).addClass('sel btn-secondary').removeClass('btn-outline-secondary');
			showLorem( $(this).data('opt') );
		});
		// regen
		$('body').on('click', '.regen-lorem', function() {
			getLorem();
		});
		// show/hide lorem
		function showLorem(o) {
			$('.lorem-v-html, .lorem-v-tags, .lorem-v-text').hide();
			switch(o) {
				case 1 : $('.lorem-v-tags').fadeIn(); break;
				case 2 : $('.lorem-v-text').fadeIn(); break;
				default : $('.lorem-v-html').fadeIn(); break;
			}
		}
		// ajax
		function getLorem() {
			var opt_r = 0, opt_pnb = 5, opt_h = 0, opt_b = 0, opt_i = 0, opt_l = 0, opt_u = 0, opt_o = 0, opt_c = 0;
			if( $('input[data-opt="prnb"]').val() > 0 ) { opt_pnb = $('input[data-opt="prnb"]').val(); }
			if( $('button[data-opt="head"]').hasClass('sel') ) { opt_h = 1; } // title
			if( $('button[data-opt="bold"]').hasClass('sel') ) { opt_b = 1; } // bold
			if( $('button[data-opt="itlc"]').hasClass('sel') ) { opt_i = 1; } // italic
			if( $('button[data-opt="lien"]').hasClass('sel') ) { opt_l = 1; } // link
			if( $('button[data-opt="ulli"]').hasClass('sel') ) { opt_u = 1; } // list ul
			if( $('button[data-opt="olli"]').hasClass('sel') ) { opt_o = 1; } // list ol
			if( $('button.show-lorem[data-opt="0"]').hasClass('sel') ) { opt_c = 0; } // html
			if( $('button.show-lorem[data-opt="1"]').hasClass('sel') ) { opt_c = 1; } // html tags
			if( $('button.show-lorem[data-opt="2"]').hasClass('sel') ) { opt_c = 2; } // text
			$.ajax({
				url: 'ajax-lorem.php',
				type: 'POST',
				data: {a: 'opt', pnb: opt_pnb, h: opt_h, h: opt_h, b: opt_b, i: opt_i, l: opt_l, u: opt_u, o: opt_o, c: opt_c},
				success: function(data) {
					$('.lorem-ajax').html(data);
					showLorem( opt_c );	
				},
				error: function(e) {
					$('.lorem-ajax').html(e);
				}
			});
		}
		getLorem(); // first load
		function fallbackCopyTextToClipboard(text) {
			var textArea = document.createElement("textarea");
			textArea.value = text;
			
			// Avoid scrolling to bottom
			textArea.style.top = "0";
			textArea.style.left = "0";
			textArea.style.position = "fixed";
		
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();
		
			try {
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			console.log('Fallback: Copying text command was ' + msg);
			} catch (err) {
			console.error('Fallback: Oops, unable to copy', err);
			}
		
			document.body.removeChild(textArea);
		}
		function copyTextToClipboard(text) {
			if (!navigator.clipboard) {
			fallbackCopyTextToClipboard(text);
			return;
			}
			navigator.clipboard.writeText(text).then(function() {
			console.log('Async: Copying to clipboard was successful!');
			}, function(err) {
			console.error('Async: Could not copy text: ', err);
			});
		}
		$('.lorem-cc').click(function () {
			var html = '', o = $('.show-lorem.sel').data('opt');
			if( o == 2 ) {
				html = $('.lorem-v-text').text();
			} else {
				html = $('.lorem-v-html').html();
			}

			copyTextToClipboard(html);
			$(this).addClass('bg-success text-white');
			setTimeout( function() { $('.lorem-cc').removeClass('bg-success text-white'); }, 5000 ); // 5s
		});
	}

});