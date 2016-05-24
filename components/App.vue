<template>
    <header-c v-bind:title-txt= "titleTxt"></header-c>
    <content-c></content-c>
    <footer-c></footer-c>
</template>

<script>
    import store from '../vuex/store.js'
    import headerC from './sui/header.vue'
    import contentC from './data-loader/cnl-news-list.vue'
    import footerC from './sui/footer.vue'

    export default {
        data(){
            return {
                titleTxt: 'new beijing'
            }
        },
        components: {
            headerC, contentC, footerC
        },
        store
    }
</script>