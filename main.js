(function(){
	var freebitcoin = {
		init: function() {
			this.checkBox = $('#play_without_captchas_button');
			this.rollBtn = $('#free_play_form_button');
			this.checkBoxVisible = this.checkBox.is(':visible');
			this.rollBtnVisible = this.rollBtn.is(':visible');

			if(this.checkBoxVisible) {
				this.handleCheckBoxClick();
				this.handleRollBtnClick();
			} else if(this.rollBtnVisible) {
				this.handleRollBtnClick();
			}
		},
		handleCheckBoxClick: function() {
			var self = this;

			setTimeout(function(){
				self.checkBox.click();
			}, 1000);
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
