(function(){
	var freebitcoin = {
		init: function() {
			this.checkBox = $('#play_without_captchas_button');
			this.rollBtn = $('#free_play_form_button');
			this.checkBoxVisible = this.checkBox.is(':visible');
			this.rollBtnVisible = this.rollBtn.is(':visible');

			if(this.checkBoxVisible && this.rollBtnVisible) {
				this.handleClick();
			}
		},
		handleClick: function() {
			var self = this;

			this.checkBox.click();
			setTimeout(function(){
				self.rollBtn.click();
			}, 1000);
		}
	};

	setTimeout(function(){
		freebitcoin.init();
	}, 5000);
})();
