(function(){
	var freebitcoin = {
		init: function() {
			this.checkBox = $('#play_without_captchas_button');
			this.rollBtn = $('#free_play_form_button');
			this.checkBoxVisible = this.checkBox.is(':visible');
			this.rollBtnVisible = this.rollBtn.is(':visible');

			if(this.checkBoxVisible) {
				this.handleCheckBoxClick();
			} else {
				this.handleRollBtnClick();
			}
		},
		handleCheckBoxClick: function() {
			this.checkBox.click();
			this.handleRollBtnClick();
		},
		handleRollBtnClick: function() {
			var self = this;

			setTimeout(function(){
				self.rollBtn.click();
			}, 1000);
		}
	};

	setTimeout(function(){
		freebitcoin.init();
	}, 5000);
})();
