(function(){
	var freebitcoin = {
		init: function() {
			this.userRewardPoints = this.getNumber('.user_reward_points');

			this.rewardBonusBox = $('#bonus_container_free_points p');
			this.rewardBonusPrice = this.getNumber($('#free_points_rewards .effect2 .large-6')[0]);
			this.rewardBonusBtn = $('#free_points_rewards .effect2 .large-3:last-child button')[0];

			this.btcBonusBox = $('#bonus_container_fp_bonus p');
			this.btcBonusPrice = this.getNumber($('#fp_bonus_rewards .effect2 .large-6')[0]);
			this.btcBonusBtn = $('#fp_bonus_rewards .effect2 .large-3:last-child button')[0];

			this.checkBox = $('#play_without_captchas_button');
			this.rollBtn = $('#free_play_form_button');
			this.checkBoxVisible = this.checkBox.is(':visible');
			this.rollBtnVisible = this.rollBtn.is(':visible');

			this.checkForRewardBonusBox();
			this.checkForBtcBonusBox();
			this.checkForCheckBox();
		},
		checkForRewardBonusBox: function() {
			if (this.rewardBonusBox.length === 0 && this.userRewardPoints > 0) {
				if (this.userRewardPoints >= this.rewardBonusPrice) {
					this.handleClick(this.rewardBonusBtn);
				}
			}
		},
		checkForBtcBonusBox: function() {
			if (this.btcBonusBox.length === 0 && this.userRewardPoints > 0) {
				if (this.userRewardPoints >= (this.btcBonusPrice + this.rewardBonusPrice)) {
					this.handleClick(this.btcBonusBtn);
				}
			}
		},
		checkForCheckBox: function() {
			if (this.checkBoxVisible) {
				this.handleClick(this.checkBox);
				this.handleClick(this.rollBtn);
			} else if(this.rollBtnVisible) {
				this.handleClick(this.rollBtn);
			}
		},
		handleClick: function(elem) {
			setTimeout(function(){
				elem.click();
			}, 1000);
		},
		getNumber: function(elem) {
			return +$(elem).text().split(' ')[0].split(',').join('');
		}
	};

	setTimeout(function(){
		freebitcoin.init();
	}, 5000);
})();
