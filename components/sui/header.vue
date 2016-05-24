<template>
    <header class="bar bar-nav">
        <a class="icon icon-left pull-left"></a>
        <a class="icon icon-refresh pull-right"></a>
        <h1 class="title">{{titleTxt+ counterValue}}</h1>
    </header>
</template>
<style src="./resource/sm.min.css"></style>
<script>
    import {getCount} from '../../vuex/getters'
    export default{
        data: function () {
            return {titleStr:'hello'}
        },
        props: ['titleTxt'],
        vuex: {
            getters: {
                // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
                counterValue: getCount
            }
        }
    }
</script>