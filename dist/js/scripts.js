$(document).ready(function () {

	// MatchHeight
	if ($('.initiatives-nv__col').length) {
		$('.initiatives-nv__col').matchHeight({
			byRow: false,
		});
	}

	// Селекты
	function formStyleSelect() {
		if ($('.form-dc__select select').length) {
			var _dropdown;
			var settings = { autoReinitialise: true };
			$('.form-dc__select select').styler({
				selectPlaceholder: '',
				selectVisibleOptions: 8,
				onFormStyled: function () {
					_dropdown = $('.jq-selectbox__dropdown');
					_dropdown.find('ul').wrap('<div class="scroll-pane" />');
				},
				onSelectOpened: function () {
					var _ul = $(this).find('.jq-selectbox__dropdown ul');
					var height = _ul.height();
					var _srollPane = _dropdown.find('.scroll-pane');
					_srollPane.height(height);
					_ul.css('max-height', 'none');
					_srollPane.jScrollPane(settings);
				}
			});
		}
	}
	formStyleSelect();

	// if ($('.form-dc__select select').length) {
	// 	$('.form-dc__select select').select2({
	// 		minimumResultsForSearch: Infinity,
	// 	})
	// 	.on("select2:open", function () {
	// 		$('.select2-results__options').wrap('<div class="scrollbar-inner"></div>');
	// 		$('.scrollbar-inner').scrollbar();
	// 	});
	// }

	// Табы
	function tabs(tabs) {
		if (tabs.length) {
			tabs.each(function() {
				var trigger = $(this).find('#tabs_triggers').children(),
						content = $(this).find('#tabs_content').children(),
						time = 300;
				trigger.click(function () {
					var $this = $(this),
							index = $this.index();
					if (!$this.hasClass('active')) {
						trigger.removeClass('active');
						$this.addClass('active');
						content.removeClass('open').hide();
						content.eq(index).fadeIn(time, function () {$(this).addClass('open')});
					}else {
						return false;
					}
					$('.form-dc__select select').styler('destroy');
					formStyleSelect();
				});
			});
		}
	}
	tabs($('.js-tabs'));

});