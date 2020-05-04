import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
const options = {
	color: '#007fff',
	failedColor: '#bf0000',
	thickness: '3px',
	transition: {
		speed: '0.2s',
		opacity: '0.6s',
		termination: 300
	},
	autoRevert: true,
	location: 'top',
	inverse: false,
	autoFinish: false
}

Vue.use(VueProgressBar, options)
