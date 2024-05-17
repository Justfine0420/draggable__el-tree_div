# draggable

当前应用场景为 跨组件元素拖拽并传递数据（element el-tree与div元素）

H5 原生的drag&drop

#### 拖动源

- draggable=true（必需）(当为元素设置draggable属性后，普通元素也可以拖动)

- ondragstart：拖动开始时触发

- ondrag：拖动过程中触发

- ondragend：拖动结束触发

#### 拖动目标

- ondragenter ：被拖动元素进入到目标区域时触发

- ondragover ：被拖动元素在目标区域移动时触发

- ondragleave ：被拖动元素离开目标区域时触发

- ondrop ：释放鼠标时触发

### 应用在Vue中

``` vue
<template>
    <div class="box" @drop="drop($event)"
        @dragover="allowDrop($event)">
        <el-tag v-for="(tag, index) in targetList">{{tag.name}}</el-tag>
    </div>
    <div>
      <el-tag type="success" effect="dark" style="margin-right: 6px;"
        v-for="(item, idx) in list"
        :key="idx"
        draggable="true"
        @dragstart.native="dragStart($event, item)">{{item.name}}</el-tag>
    </div>
</template>
```

注意：

1. 在vue中使用时事件名的变化
2. 如果在第三方组件中使用拖拽事件时，需要加.native

#### 拖动源

- draggable=true（必需）

- ondragstart：拖动开始时触发 ===> dragstart

- ondrag：拖动过程中触发 ===> drag

- ondragend：拖动结束触发 ===> dragend

#### 拖动目标

- ondragenter ：被拖动元素进入到目标区域时触发 ===> dragenter

- ondragover ：被拖动元素在目标区域移动时触发 ===> dragover

- ondragleave ：被拖动元素离开目标区域时触发 ===> dragleave

- ondrop ：释放鼠标时触发 ===> drop

代码：可实现tree拖拽元素至div元素；div 元素之间可互相拖拽并清空上一div元素path数据 （即贴即用）

``` vue
<template>
    <div>
        <div class="main">
            <el-row :gutter="20">
                <el-col :span="4">
                    <!-- 拖拽源 -->
                    <div class="content-siadeNav">
                        <div class="title">tree列表：</div>
                        <el-tree 
                            :data="data" 
                            ref="tree1" 
                            node-key="id" 
                            draggable 
                            default-expand-all
                            :allow-drop="returnFalse" 
                            @node-drag-start="handleDragstart" 
                            @node-drag-end="handleDragend"
                        >
                            <span 
                                class="custom-tree-node" 
                                slot-scope="{node,data}" 
                                :style="{cursor: data.path ? 'move' : 'not-allowed'}"
                            >
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
                            <div 
                                draggable="true"
                                class="main_frame" 
                                ref = "main_frame_0"
                                @dragstart = "ondragstart($event, 'main_frame_0', videoStream[0].path)"
                                @dragenter = "ondragenter($event)"
                                @dragover = "ondragover($event)"
                                @dragleave = "ondragleave($event)"
                                @drop = "ondrop($event, item)"
                            >
                                {{ videoStream[0] }}
                            </div>
                            <div class="secondary_frame_right">
                                <div 
                                    draggable="true"
                                    class="secondary_frame" 
                                    :id="'secondary_frame_' + (index + 1)"
                                    :ref="'secondary_frame_' + (index + 1)"
                                    v-for=" (element, index) in videoStream_1" 
                                    :key="index"
                                    @dragstart = "ondragstart($event, 'secondary_frame_' + (index + 1), videoStream_1[index].path)"
                                    @dragenter = "ondragenter($event)"
                                    @dragover = "ondragover($event)"
                                    @dragleave = "ondragleave($event)"
                                    @drop = "ondrop($event, item)"
                                >
                                    {{ element }}
                                </div>
                            </div>
                            <div 
                                draggable="true"
                                class="secondary_frame" 
                                :id="'secondary_frame_' + (index + 5)"
                                :ref="'secondary_frame_' + (index + 5)"
                                v-for=" (element, index) in videoStream_2" 
                                :key="index"
                                @dragstart = "ondragstart($event, 'secondary_frame_' + (index + 5), videoStream_2[index].path)"
                                @dragenter = "ondragenter($event)"
                                @dragover = "ondragover($event)"
                                @dragleave = "ondragleave($event)"
                                @drop = "ondrop($event, item)"
                            >  
                                {{ element }}
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //定义要被拖拽对象的数组
            data: [{
                id: 1,
                label: "一级 1",
                children: [{
                    id: 4,
                    label: "二级 1-1",
                    children: [{ id: 9, label: "三级 1-1-1", path: "test://111.222.333.444:8000", }]
                },
                {
                    id: 6,
                    label: "二级 1-1",
                    path: "test://111.222.333.444:8000",
                }],
            },
            {
                id: 2,
                label: "一级 1",
                children: [{
                    id: 5,
                    label: "二级 1-1",
                    children: [{ id: 11, label: "三级 1-1-1", path: "test://111.222.333.444:8000", }]
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
            videoStream_1: [],
            videoStream_2: [],
            currentId: '',
            item: '',
        };
    },
    mounted() {
        if (this.videoStream.length > 2) {
            if (this.videoStream.length > 5) {
                for(var i = 1; i < 5; i ++) {
                    this.videoStream_1.push(this.videoStream[i])
                }
                for(var i = 5; i < this.videoStream.length; i ++) {
                    this.videoStream_2.push(this.videoStream[i])
                }
            } else {
                for(var i = 1; i < this.videoStream.length; i ++) {
                    this.videoStream_1.push(this.videoStream[i])
                }
            }
        }
    },
    methods: {
        // 树状结构 开始拖动事件
        handleDragstart(node, event) {
            if ( node.data.path ) {
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
                    console.log('清空节点');
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
        // dom开始拖动事件
        ondragstart(e, tagId, path) {
            let id = parseInt(tagId.split('_')[2]) 
            this.currentId = id
        },
        // 鼠标进入当前dom
        ondragenter(e){
            e = e || event;
            if(e.preventDefault){
                e.preventDefault();
            }else{
                e.returnValue = false;
            }
            console.log('元素进入');
        },
        // 鼠标在当前dom中移动
        ondragover(e){
            e = e || event;
            if(e.preventDefault){
                e.preventDefault();
            }else{
                e.returnValue = false;
            }
            console.log('元素移动');
        },
        // 鼠标离开当前区域
        ondragleave(){
            console.log('元素离开目标区域');
        },
        // 鼠标落下
        ondrop(e, item) {
            let index = e.target.id.split('_')[2]
            let currentRef = e.target.ref
            if ( !index ) {
                this.videoStream[0].path = item
            } else {
                this.videoStream[index].path = item
            }
            if ( this.currentId !== '' ) {
                if ( this.currentId === 0 ) {
                    this.videoStream[0].path = ''
                } else if ( this.currentId > 0 && this.currentId < 5) {
                    this.videoStream_1[this.currentId - 1].path = ''
                } else {
                    this.videoStream_2[this.currentId - 5].path = ''
                }
                this.currentId = ''
            }
            console.log('元素落在目标区域');
        },
    },
};
</script>
<style scoped lang="scss">
/* 框架样式 */
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

</style>
```

参考：

[深入理解javascript原生拖放 - 小火柴的蓝色理想 - 博客园](https://www.cnblogs.com/xiaohuochai/p/5886618.html)


