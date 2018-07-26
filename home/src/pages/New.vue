<template>
  <q-page class="flex flex-center row">
    <div class="col-xs-6">
    	<div class="row justify-center">
    		<span class="col-xs-7" style="margin-bottom: 10px">
    			Register yourself at <span class="text-primary">Rajasthan GCC</span>
    		</span>
    		<span class="col-xs-7" style="margin-bottom: 40px">
    			Register here, in order to join as our partner and collect waste from houseold of rajasthan
    		</span>
    		<q-input placeholder="your preferred username" class="col-xs-7" float-label="Username" v-model="values.username" />
    		<q-input placeholder="enter your password" class="col-xs-7" float-label="Password" v-model="values.password" style="margin-top: 20px" />
    		<q-field class="col-xs-7" helper="name of state where your prefered location exist">
    			<q-select :options="states" float-label="State" v-model="values.state" style="margin-top: 20px" />
    		</q-field>
    		<q-field class="col-xs-7" helper="name of city you want to serve">
    			<q-select :options="cities" float-label="City" v-model="values.city" style="margin-top: 20px" />
    		</q-field>
    	</div>
    	<div class="row justify-center text-right" style="margin-top: 30px">
    		<span class="col-xs-6">
    			<q-btn @click="send" outline label="send" color="primary" />
    		</span>
    	</div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
  	return {
  		values: {
  			username: '',
  			password: '',
  			city: '',
  			state: 'rajasthan'
  		},
  		states: [
  			{
  				label: 'Rajasthan',
  				value: 'rajasthan'
  			}
  		],
  		cities: [
  			{
  				label: 'Bikaner',
  				value: 'jaipur'
  			},
  			{
  				label: 'Jaipur',
  				value: 'jaipur'
  			},
  			{
  				label: 'Jaisalmer',
  				value: 'jaipur'
  			},
  			{
  				label: 'Jodhpur',
  				value: 'jaipur'
  			},
  			{
  				label: 'Udaipur',
  				value: 'jaipur'
  			},
  		]
  	}
  },
  methods: {
  	send () {

  		const o = this.values

  		this.$axios.post('/api/users/new', o).then((res) => {
  			alert("Request submitted")
  			this.$router.push("/login")
  		}).catch((err) => {
  			console.error(err)
  		})
  	}
  }
}
</script>

<style>
</style>
