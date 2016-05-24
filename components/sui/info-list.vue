<template>
    <div class="content">
        <div class="list-block media-list">
            <ul>
                <li v-for="i in dataList" v-touch:tap="stopAndGo">
                    <a href="#" class="item-link item-content">
                        <div class="item-media"><img v-bind:src="i.infoImgUrl" style='width: 4rem;'></div>
                        <div class="item-inner">
                            <!--<div class="item-title-row">-->
                                <!--<div class="item-title" v-text="i.infoTitle">标题</div>-->
                                <!--<div class="item-after">$15</div>-->
                            <!--</div>-->
                            <div class="item-subtitle" v-text="i.infoTitle"></div>
                            <div class="item-text" v-text="i.infoSummary"></div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style src="./resource/sm.min.css"></style>
<style>
.list-block {
    margin: 0 0;
}
</style>
<script>
    import {incrementCounter} from '../../vuex/actions'
    export default{
//        data: function () {
//            return {dataList: []}
//        },
        props: {
            dataList: {
                default: []
            }
        },
        methods: {
            stopAndGo: function(){
                event.preventDefault()
                this.increment()
            }
        },
        vuex: {
            actions: {
                increment: incrementCounter
            }
        }
    }
</script>