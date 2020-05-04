<template>
	<div class="home">
		<div class="text-center py-3">
			<h1 class="font-weight-bold">Appruve</h1>
			<h5 class="text-muted">Coding Challenge</h5>
		</div>
		<section class="pricing py-5">
			<div class="container">
				<div class="row">
					<div class="col-lg-4" v-for="plan in plans" :key="plan.id">
						<div class="card mb-5 mb-lg-0">
						<div class="card-body">
							<h5 class="card-title text-muted text-uppercase text-center">{{ plan.name }}</h5>
							<h6 class="card-price text-center">${{ plan.price }}<span class="period">/month</span></h6>
							<hr>
							<ul class="fa-ul">
								<li v-for="(feature, index) in plan.features" :key="index">
									<span class="fa-li"><i class="fa fa-check"></i></span>
									{{ feature }}
								</li>
							</ul>
							<a href="javascript:void(0);" class="btn btn-block btn-primary text-uppercase" @click="subscribe(plan)">Subscribe</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "Home",
	computed: {
		plans() {
			return this.$store.getters['plans']
		}
	},
	methods: {
		subscribe(plan) {
			this.$Progress.start()

			this.$store
				.dispatch('testSubscribe', plan)
				.then(() => {
					this.$Swal.fire({
						icon: 'success',
						title: 'Subscription was successful',
						text: `Subscribed to ${plan.name}`
					})
						.then(() => {
							this.$router.push({
								name: 'Dashboard'
							})
						})
				})
				.catch(error => {
					this.$Progress.fail()
					this.$Swal.fire({
						icon: 'success',
						title: 'Subscription was unsuccessful',
						text: error.response.data.message
					})
				})
				.finally(() => {
					this.$Progress.finish()
				})
		}
	},
	created() {
		// This fetches all the plans from the GET API
		// this.$store.dispatch('fetchPlans')
	}
};
</script>
