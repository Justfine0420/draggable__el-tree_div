<template>
    <div>
        <div class="content-header">
            <div class="header-button">
                <!-- <el-button type="primary">搜索</el-button>
                <el-button type="primary">重置</el-button>
                <el-button type="primary">新增规则</el-button> -->
                <el-button type="primary">下发</el-button>
            </div>
        </div>
        <div class="main">
            <el-row :gutter="20">
                <el-col :span="4">
                    <!-- 拖放源 -->
                    <div class="content-siadeNav">
                        <div class="title">相机列表：</div>
                        <el-tree :data="data" ref="tree1" node-key="id" draggable default-expand-all
                            :allow-drop="returnFalse" @node-drag-start="handleDragstart" @node-drag-end="handleDragend">
                            <span class="custom-tree-node" slot-scope="{node,data}"
                                :style="{cursor: data.path ? 'move' : 'not-allowed'}">
                                <!-- style="cursor: 'move'" -->
                                {{data.label}}
                            </span>
                        </el-tree>
                    </div>
                </el-col>
                <!-- 拖放位置 -->
                <el-col :span="20">
                    <div class="content">
                        <div id="frame_13">
                            <div style="width: 640px; height: 360px; position:relative">
                                <div draggable="true" class="main_frame" ref="main_frame_0" id="main_frame_0"
                                    @dragstart="ondragstart($event, 'main_frame_0', videoStream[0].path)"
                                    @dragenter="ondragenter($event)" @dragover="ondragover($event)"
                                    @dragleave="ondragleave($event)" @drop="ondrop($event, item)"
                                    style="width: 640px; height: 360px; position:relative">
                                    <div class='popContainer_main' id="frame_mask_0">{{ videoStream[0] }}</div>
                                </div>
                            </div>

                            <div class="secondary_frame_right">
                                <div v-for=" (element, index) in videoStream_1"
                                    style="width: 320px; height: 180px; position: relative">
                                    <div draggable="true" class="secondary_frame" :id="'secondary_frame_' + (index + 1)"
                                        :ref="'secondary_frame_' + (index + 1)" :key="index"
                                        @dragstart="ondragstart($event, 'secondary_frame_' + (index + 1), videoStream_1[index].path)"
                                        @dragenter="ondragenter($event)" @dragover="ondragover($event)"
                                        @dragleave="ondragleave($event)" @drop="ondrop($event, item)">
                                        <div class="popContainer_secondary" :id="'frame_mask_' + (index + 1)">{{ element
                                        }}</div>
                                        <!-- {{ element }} -->
                                    </div>
                                </div>
                            </div>
                            <div v-for=" (element, index) in videoStream_2"
                                style="width: 320px; height: 180px; position: relative">
                                <div draggable="true" class="secondary_frame" :id="'secondary_frame_' + (index + 5)"
                                    :ref="'secondary_frame_' + (index + 5)" :key="index"
                                    @dragstart="ondragstart($event, 'secondary_frame_' + (index + 5), videoStream_2[index].path)"
                                    @dragenter="ondragenter($event)" @dragover="ondragover($event)"
                                    @dragleave="ondragleave($event)" @drop="ondrop($event, item)">
                                    <!-- {{ element }} -->
                                    <div class="popContainer_secondary" :id="'frame_mask_' + (index + 5)">{{ element }}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="content-button">
                            <el-button type="primary">大屏画面</el-button>
                            <el-button type="primary">十三画面</el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import Player from 'xgplayer';
import FlvJsPlayer from 'xgplayer-flv.js';

export default {
    data() {
        return {
            query: '',
            //定义要被拖拽对象的数组
            data: [{
                id: 1,
                label: "一级 1",
                children: [{
                    id: 4,
                    label: "二级 1-1",
                    children: [{ id: 9, label: "三级 1-1-1", path: "//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4", }]
                },
                {
                    id: 6,
                    label: "二级 1-1",
                    path: "rtsp://admin:tct123456@172.48.0.212",
                }],
            },
            {
                id: 2,
                label: "一级 1",
                children: [{
                    id: 5,
                    label: "二级 1-1",
                    children: [{ id: 11, label: "三级 1-1-1", path: "rtsp://admin:tct123456@172.48.0.213", }]
                }],
            }],
            videoStream: [
                {
                    id: 0,
                    path: '',
                },
                {
                    id: 1,
                    path: '',
                },
                {
                    id: 2,
                    path: '',
                },
                {
                    id: 3,
                    path: '',
                },
                {
                    id: 4,
                    path: '',
                },
                {
                    id: 5,
                    path: '',
                },
                {
                    id: 6,
                    path: '',
                },
                {
                    id: 7,
                    path: '',
                },
                {
                    id: 8,
                    path: '',
                },
                {
                    id: 9,
                    path: '',
                },
                {
                    id: 10,
                    path: '',
                },
                {
                    id: 11,
                    path: '',
                },
                {
                    id: 12,
                    path: '',
                },
            ],
            temp: [
                { path: '' },
                { path: '' },
                { path: '' },
                { path: '' },
                { path: '' },
                { path: '' },
                { path: '' },
                { path: '' },
                { path: '' },
                { path: '' },
                { path: '' },
                { path: '' },
                { path: '' },
            ],
            videoStream_1: [],
            videoStream_2: [],
            sourceId: '',
            item: '',
        };
    },
    mounted() {
        if (this.videoStream.length > 2) {
            if (this.videoStream.length > 5) {
                for (var i = 1; i < 5; i++) {
                    this.videoStream_1.push(this.videoStream[i])
                }
                for (var i = 5; i < this.videoStream.length; i++) {
                    this.videoStream_2.push(this.videoStream[i])
                }
            } else {
                for (var i = 1; i < this.videoStream.length; i++) {
                    this.videoStream_1.push(this.videoStream[i])
                }
            }
        }
    },
    methods: {
        // 树状结构 开始拖动事件
        handleDragstart(node, event) {
            if (node.data.path) {
                this.item = node.data.path;
            }
        },
        // 树状结构 结束拖动事件
        handleDragend(draggingNode, endNode, position, event) {
            // 插入一个空节点用于占位
            let emptyData = { id: (+new Date), children: [] };
            this.$refs.tree1.insertBefore(emptyData, draggingNode);
            this.$nextTick(() => {
                // 如果是移动到了当前树上，需要清掉空节点
                if (this.$refs.tree1.getNode(draggingNode.data)) {
                    this.$refs.tree1.remove(emptyData);
                }
            })
        },
        // 允许拖动
        returnTrue() {
            return true;
        },
        // 不允许拖动
        returnFalse() {
            return false;
        },
        // 开始拖动事件
        ondragstart(e, tagId, path) {
            let id = parseInt(tagId.split('_')[2])
            // console.log(path);
            this.item = path
            this.sourceId = id
        },
        // 鼠标进入当前dom
        ondragenter(e) {
            e = e || event;
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            console.log('元素进入');
        },
        // 鼠标在当前dom中移动
        ondragover(e) {
            e = e || event;
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            console.log('元素移动');
        },
        // 鼠标离开当前区域
        ondragleave() {
            console.log('元素离开目标区域');
        },
        // 鼠标落下
        ondrop(e, item) {
            let index = parseInt(e.target.id.split('_')[2])         // 目标div索引
            let sourceid = this.sourceId                            // 源div索引
            // 对 目标div 进行新建视频组件并赋值
            if (sourceid === '') {
                // 树状结构向div元素拖动
                if ( index === 0 ) {
                    var targetRef = 'main_frame_0'                          // 目标div id ref
                    var targetDom = document.getElementById(targetRef)      // 目标div dom节点
                } else {
                    var targetRef = 'secondary_frame_' + index
                    var targetDom = document.getElementById(targetRef)
                }
                // 若目标div有视频流 则清空
                if (targetDom.querySelector(".xgplayer-enter") !== null) {
                    if ( index === 0 ) {
                        var scanHtml = '<div style="width: 640px; height: 360px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_0">111</div>'
                    } else {
                        var scanHtml = '<div style="width: 320px; height: 180px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_' + index + '"></div>'
                    }
                    targetDom.innerHTML = scanHtml
                }
                // 对目标div赋予新视频流
                if ( index === 0 ) {
                    this.getVideo(this.$refs[targetRef], item)
                } else {
                    this.getVideo(this.$refs[targetRef][0], item)
                }
                this.temp[index].path = item
                this.videoStream[index].path = item
            } else if (sourceid !== '' && item === '') {
                if ( index === 0 ) {
                    var targetRef = 'main_frame_0'     // 目标div id ref
                    var targetDom = document.getElementById(targetRef)   // 目标div dom节点
                } else {
                    var targetRef = 'secondary_frame_' + index
                    var targetDom = document.getElementById(targetRef)
                }
                if ( targetDom.querySelector(".xgplayer-start") !== null ) {
                    // 源div有视频流 目标div无视频流
                    // 缓存地址切换
                    this.temp[sourceid].path = this.temp[index].path
                    this.temp[index].path = ''
                    // 定义源div Ref
                    if ( sourceid === 0 ) {
                        var sourceRef = 'main_frame_0'
                        // 更新页面显示地址
                        this.videoStream[sourceid].path = this.temp[sourceid].path
                        // 生成视频组件
                        this.getVideo(this.$refs[sourceRef], this.temp[sourceid].path)
                    } else if ( sourceid > 0 && sourceid < 5 ) {
                        var sourceRef = 'secondary_frame_' + sourceid
                        // 更新页面显示地址
                        this.videoStream_1[sourceid - 1].path = this.temp[sourceid].path
                        // 生成视频组件
                        this.getVideo(this.$refs[sourceRef][0], this.temp[sourceid].path)
                    } else {
                        var sourceRef = 'secondary_frame_' + sourceid
                        // 更新页面显示地址
                        this.videoStream_2[sourceid - 5].path = this.temp[sourceid].path
                        // 生成视频组件
                        this.getVideo(this.$refs[sourceRef][0], this.temp[sourceid].path)
                    }
                    // 目标div置空
                    if ( index === 0 ) {
                        var scanHtml = '<div style="width: 640px; height: 360px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_0"></div>'
                        this.videoStream[0].path = ''
                    } else if ( index > 0 && index < 5) {
                        var scanHtml = '<div style="width: 320px; height: 180px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_' + index + '"></div>'
                        this.videoStream_1[index - 1].path = ''
                    } else {
                        var scanHtml = '<div style="width: 320px; height: 180px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_' + index + '"></div>'
                        this.videoStream_2[index - 5].path = ''
                    }
                    targetDom.innerHTML = scanHtml
                }
            } else if (sourceid !== '' && item !== '') {
                if ( index === 0 ) {
                    var targetRef = 'main_frame_0'     // 目标div id ref
                    var targetDom = document.getElementById(targetRef)   // 目标div dom节点
                } else {
                    var targetRef = 'secondary_frame_' + index
                    var targetDom = document.getElementById(targetRef)
                }
                if ( targetDom.querySelector(".xgplayer-start") !== null ) {
                    // 目标div 源div均有视频流
                    // console.log('目标div 源div均有视频流');
                    if ( sourceid === 0 ) {
                        var sourceRef = 'main_frame_0'     // 源div id ref
                        var sourceDom = document.getElementById(sourceRef)   // 源div dom节点
                    } else {
                        var sourceRef = 'secondary_frame_' + sourceid
                        var sourceDom = document.getElementById(sourceRef)
                    }
                    // 缓存地址切换
                    let tempPath = this.temp[index].path
                    this.temp[index].path = this.temp[sourceid].path
                    this.temp[sourceid].path = tempPath
                    // 定义源div Ref
                    if ( sourceid === 0 ) {
                        var scanHtml = '<div style="width: 640px; height: 360px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_0"></div>'
                        sourceDom.innerHTML = scanHtml
                        var sourceRef = 'main_frame_0'
                        // 更新页面显示地址
                        this.videoStream[sourceid].path = this.temp[sourceid].path
                        // 生成视频组件
                        this.getVideo(this.$refs[sourceRef], this.temp[sourceid].path)
                    } else if ( sourceid > 0 && sourceid < 5 ) {
                        var scanHtml = '<div style="width: 320px; height: 180px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_' + sourceid + '"></div>'
                        sourceDom.innerHTML = scanHtml
                        var sourceRef = 'secondary_frame_' + sourceid
                        // 更新页面显示地址
                        this.videoStream_1[sourceid - 1].path = this.temp[sourceid].path
                        // 生成视频组件
                        this.getVideo(this.$refs[sourceRef][0], this.temp[sourceid].path)
                    } else {
                        var scanHtml = '<div style="width: 320px; height: 180px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_' + sourceid + '"></div>'
                        sourceDom.innerHTML = scanHtml
                        var sourceRef = 'secondary_frame_' + sourceid
                        // 更新页面显示地址
                        this.videoStream_2[sourceid - 5].path = this.temp[sourceid].path
                        // 生成视频组件
                        this.getVideo(this.$refs[sourceRef][0], this.temp[sourceid].path)
                    }
                    // 定义目标div Ref
                    if ( index === 0 ) {
                        var scanHtml = '<div style="width: 640px; height: 360px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_0"></div>'
                        targetDom.innerHTML = scanHtml
                        var targetRef = 'main_frame_0'
                        // 更新页面显示地址
                        this.videoStream[index].path = this.temp[index].path
                        // 生成视频组件
                        this.getVideo(this.$refs[targetRef], this.temp[index].path)
                    } else if ( index > 0 && index < 5 ) {
                        var scanHtml = '<div style="width: 320px; height: 180px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_' + sourceid + '"></div>'
                        targetDom.innerHTML = scanHtml
                        var targetRef = 'secondary_frame_' + index
                        // 更新页面显示地址
                        this.videoStream_1[index - 1].path = this.temp[index].path
                        // 生成视频组件
                        this.getVideo(this.$refs[targetRef][0], this.temp[index].path)
                    } else {
                        var scanHtml = '<div style="width: 320px; height: 180px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_' + sourceid + '"></div>'
                        targetDom.innerHTML = scanHtml
                        var targetRef = 'secondary_frame_' + index
                        // 更新页面显示地址
                        this.videoStream_2[index - 5].path = this.temp[index].path
                        // 生成视频组件
                        this.getVideo(this.$refs[targetRef][0], this.temp[index].path)
                    }
                } else {
                    // 目标div无视频流 源div有视频流
                    // console.log('目标div无视频流 源div有视频流');
                    if ( sourceid === 0 ) {
                        var sourceRef = 'main_frame_0'     // 源div id ref
                        var sourceDom = document.getElementById(sourceRef)   // 源div dom节点
                    } else {
                        var sourceRef = 'secondary_frame_' + sourceid
                        var sourceDom = document.getElementById(sourceRef)
                    }
                    // 源div生成视频组件
                    // 缓存地址切换
                    this.temp[index].path = this.temp[sourceid].path
                    this.temp[sourceid].path = ''
                    // 定义源div Ref
                    if ( index === 0 ) {
                        var targetRef = 'main_frame_0'
                        // 更新页面显示地址
                        this.videoStream[index].path = this.temp[index].path
                        // 生成视频组件
                        this.getVideo(this.$refs[targetRef], this.temp[index].path)
                    } else if ( index > 0 && index < 5 ) {
                        var targetRef = 'secondary_frame_' + index
                        // 更新页面显示地址
                        this.videoStream_1[index - 1].path = this.temp[index].path
                        // 生成视频组件
                        this.getVideo(this.$refs[targetRef][0], this.temp[index].path)
                    } else {
                        var targetRef = 'secondary_frame_' + index
                        // 更新页面显示地址
                        this.videoStream_2[index - 5].path = this.temp[index].path
                        // 生成视频组件
                        this.getVideo(this.$refs[targetRef][0], this.temp[index].path)
                    }
                    // 源div置空
                    if ( sourceid === 0 ) {
                        var scanHtml = '<div style="width: 640px; height: 360px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_0"></div>'
                        this.videoStream[0].path = ''
                    } else if ( sourceid > 0 && sourceid < 5) {
                        var scanHtml = '<div style="width: 320px; height: 180px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_' + sourceid + '"></div>'
                        this.videoStream_1[sourceid - 1].path = ''
                    } else {
                        var scanHtml = '<div style="width: 320px; height: 180px; position: absolute; background: rgba(0, 0, 0, 0); z-index: 999; top: 0; left: 0; right: 0; bottom: 0; color: #fff" id="frame_mask_' + sourceid + '"></div>'
                        this.videoStream_2[sourceid - 5].path = ''
                    }
                    sourceDom.innerHTML = scanHtml
                }
            }
            // 清空及销毁
            this.item = ''
            this.sourceId = ''
            console.log('元素落在目标区域');
        },
        getVideo(dom, url) {
            // console.log(dom);
            var videoPlayer = new FlvJsPlayer({
                el: dom,
                url: url,
                videoInit: true, // 显示首帧
                lang: 'zh-cn',
                autoplay: true,
                autoplayMuted: true,
                isLive: true,
                preloadTime: 30,
                minCachedTime: 5,
                fluid: true,
                cors: true,
            });
        },
    },
    destroyed() {
        // this.videoPlayer.destroy(true);
    },
};
</script>
<style lang="scss">
/* 框架样式 */
.content-header {
    display: inline-block;
    width: 95%;
    margin: 10px 20px 0 10px;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #fdfdfd;

    .header-search {
        float: left;
    }

    .header-button {
        float: right;
    }
}

.main {
    width: 97%;
    margin: 10px;

    .content-siadeNav {
        background-color: #fdfdfd;
        height: 83vh;

        .title {
            padding: 10px;
            background-color: #FAFAFA;
        }
    }

    .content {
        background-color: #fdfdfd;
        height: 83vh;
    }

    .content-button {
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }
}

.tree {
    display: inline-block;
    vertical-align: top;
    width: 30%;
    height: 400px;
    border: 1px solid #999;
}

/*定义要拖拽元素的样式*/
#frame_13 {
    width: 1280px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 40px;
    padding-top: 5px;

    .main_frame {
        display: block;
        background-color: aqua;
        width: 640px;
        height: 360px;
    }

    .secondary_frame_right {
        display: flex;
        flex-wrap: wrap;
        width: 640px;
        height: 360px;
    }

    .secondary_frame {
        display: block;
        background-color: rgb(138, 135, 135);
        width: 320px;
        height: 180px;
    }
}

.popContainer_main {
    color: #FAFAFA;
    width: 640px;
    height: 360px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 999;
}

.popContainer_secondary {
    color: #FAFAFA;
    width: 320px;
    height: 180px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 999;
}
</style>