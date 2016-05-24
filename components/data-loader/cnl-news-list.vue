<template>
    <list-view v-bind:data-list="myDataList"></list-view>
</template>
<style></style>
<script>
//    import sAgent from 'superagent'
    import listView from '../sui/info-list.vue'
    export default{
        data: function () {
            return{
                myDataList: [
                    {infoTitle:'测试1', infoSummary:'描述1', infoImgUrl:'http://image02.jiupaicn.com/uploadfile/2016/0517/20160517064517928.jpg'},
                    {infoTitle:'测试2', infoSummary:'描述2', infoImgUrl:'http://image02.jiupaicn.com/uploadfile/2016/0517/20160517101533656.jpg'}
                ]
            }
        },
        components:{
            listView
        },
        compiled: function () {
//            this.myDataList.push({infoTitle:'测试3', infoSummary:'描述3', infoImgUrl:'http://image02.jiupaicn.com/uploadfile/2016/0517/20160517064517928.jpg'});
//            this.myDataList.push({infoTitle:'测试4', infoSummary:'描述4', infoImgUrl:'http://image02.jiupaicn.com/uploadfile/2016/0517/20160517064517928.jpg'});
//            this.myDataList.push({infoTitle:'测试5', infoSummary:'描述描述描述描述描述描述', infoImgUrl:'http://image02.jiupaicn.com/uploadfile/2016/0517/20160517064517928.jpg'});

            this.loadData(0, 20)
        },
        methods: {
            loadData: function (start, len) {
                let reqUrl= [
                    'http://app.jiupaicn.com/indexapp.php?m=content&c=wap&a=lists&json[secCode]=&json[reqType]=cnl',
                    '&json[channelId]=sypd',
                    '&json[columnId]=',
                    '&json[refreshId]=',
                    '&json[refreshDrec]=flip',//refresh
                    '&json[startRowNum]=', start,
                    '&json[pageRowLength]=', len,
                    '&json[orderBy]=pubDate&json[orderAsc]=desc&rdnum=', Math.random()
                ];

//                sAgent.get(reqUrl.join('')).end(this.resolveServData)
            },
            resolveServData: function (err, res) {
                console.log(JSON.stringify(err))
                if (err || !res.ok) {
                    alert('Oh no! error');
                } else {
                    alert('yay got ' + JSON.stringify(res.body));
                }
            }
        }
    }
</script>