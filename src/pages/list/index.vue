<template>
    <div>
        <list-card :keyWorld="keyWorld"></list-card>
    </div>
</template>

<script>
import listCard from '@/components/list'
export default {
    data(){
        return {
            keyWorld:null
        }
    },
    components:{
        listCard
    },
    onLoad(){
        this.keyWorld=this.$root.$mp.query.keyWorld;
        console.log(this.$root.$mp.query.keyWorld)
    }
}
</script>

<style>

</style>
