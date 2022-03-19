<template>
    <li>
        <img src="../assets/office-building.png" />
        <hr>
        <slot name="card-header"></slot>
        <slot name="card-button"></slot>
        <slot name="card-content"></slot>
    </li>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    li{
        font-family: 'Times New Roman', Times, serif;
        margin: 1rem 0;
        font-size: 1.5rem;
        font-weight: bold;
        background: #4ad1e9;
        padding: 0.5rem;
        color: rgb(168, 120, 15);
        border-radius: 25px;
    }
    img{
        width: 100px;
        height: 100px;
    }
</style>