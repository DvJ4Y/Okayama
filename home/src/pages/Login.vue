<template>
  <q-page class="flex flex-center row">
    <div class="col-xs-6">
    	<div class="row justify-center">
    		<span class="col-xs-7" style="margin-bottom: 50px">
    			Login to continue using <span class="text-primary">Rajasthan GCC</span>
    		</span>
    		<q-radio class="col-xs-7" val="admin" v-model="values.type" label="GCC Admin" style="margin-bottom: 10px" />
    		<q-radio class="col-xs-7" val="vendor" v-model="values.type" label="Vendor" style="margin-bottom: 10px" />
    		<q-field class="col-xs-7" :helper="hintI[values.type]">
    			<q-input placeholder="your username" float-label="Username" v-model="values.username" />
    		</q-field>
    		<q-field class="col-xs-7" helper="hint: password">
    			<q-input placeholder="enter your password" float-label="Password" v-model="values.password" style="margin-top: 20px" />
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
  			type: 'admin'
  		},
  		hintI: {
  			admin: 'gcc@admin',
  			vendor: 'vendor@okayama'
  		}
  	}
  },
  methods: {
  	send () {

  		const o = this.values

  		this.$axios.post('/api/users/login', o).then((res) => {
  			this.$router.push("/")
  			setTimeout(() => {
  				window.location.reload()
  			}, 1000)
  		}).catch((err) => {
  			console.error(err)
  		})
  	}
  }
}
</script>

<style>
</style>
