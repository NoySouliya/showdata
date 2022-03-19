<template>
<ul>
    <LoadData
                v-for="item in dataa"
                :data="data"
                :key="item.zone_id"
                :name="item.zone_name"
                :branch_name="item.branch_name"
                :code_branch="item.code_branch"
                :tel="item.tell"
    />
</ul>
</template>

<script>
import LoadData from './LoadData.vue'
export default {
    components:{
        LoadData
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

<style>

</style>