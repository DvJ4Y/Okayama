<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row justify-center text-right" style="margin-top: 5px; padding-bottom: 5px; border-bottom: solid 1px rgb(180, 180, 180)">
        <span class="col-xs-11">
          <q-btn @click="$router.push('/')" label="Home" color="primary" flat />
          <q-btn @click="$router.push('login')" label="Login" color="primary" flat />
          <q-btn @click="$router.push('new')" label="New Partner registration" flat style="margin-left: 5px" />
        </span>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>

 * {
  font-size: 12px;
 }

</style>
