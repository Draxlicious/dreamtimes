<template>
    <div class="modal">

    </div>
</template>

<script>
export default {
    emit: ['showModal'],
    data(){
        return{
            showModal: null
        }
    },
    methods:{
        select(){
            this.$emit('modal', this.name)
        }
    }
}
</script>

<style>
.modal{
    background:black;
    height:50vh;
    width:50vh;
    display: none;
}
</style>