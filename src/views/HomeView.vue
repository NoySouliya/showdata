<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <load-data v-for="data in dataa" :key="data.address_id" :data="data" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoadData from '../components/LoadData.vue'
import dataRecieve from '../components/dataRecieve.vue'
export default {
  name: 'HomeView',
  components: {
    LoadData,
  },
  computed:{
  dataa(){
      return this.$store.state.dataa
    }
  },
  mounted(){
    this.$store.dispatch('getDataa')
  }
}
</script>
