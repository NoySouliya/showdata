<template>
    <data-card >
        <template v-slot:card-header>
           <h1>zone_id: {{data.zone_id}}, zone_name: {{data.zone}}</h1>
       </template>
        <template v-slot:card-content>
            <p>branch_name: {{data.branch_name}}, code_branch: {{data.code_branch}}</p>
            <p>tel: {{data.tell}} </p>
        </template>
    </data-card>
</template>

<script>
import dataCard from './dataCard.vue'
export default {
    components:{
        dataCard
    },
    props: ["data"]
}
</script>

<style>

</style>