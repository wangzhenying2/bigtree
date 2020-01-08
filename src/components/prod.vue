<template>
    <div>
        <div class="btns">
            <el-radio-group v-model="tabIndex" size="small" @change="typeChange">
                <el-radio-button label="denamore">德耐姆板材</el-radio-button>
                <el-radio-button label="yrrbw">宜人热被窝</el-radio-button>
            </el-radio-group>
        </div>
        
        <div v-if="tabIndex === 'denamore'">
            <el-card class="box-card">
                <el-divider content-position="left">产品介绍</el-divider>
                <div class="param">
                    <p>无机纤维抗菌板是以高硅石英砂、矿物纤维水泥和进口原生木浆纤维为增加材料，经制浆混配高温蒸压成型，并添加抗菌剂，面层经特殊处理。从而使板材表面细菌繁殖受到抑制，达到大肠杆菌、金黄色葡球菌、克雷白氏杆菌等常见病菌，抗菌率＞99.99，耐用易清洁，可耐冲击、耐刮、耐磨、耐潮湿。达到A级防火等多项卓越性能，是学校、医院、机场等公共场所的专用饰面板材。</p>
                </div>
                <el-divider content-position="left">应用范围</el-divider>
                <div class="param">
                    <p>★学校走廊、大 厅、教室</p>
                    <p>★医院ICU病房，急诊室、门诊室、病房、手术室墙面</p>
                    <p>★写字楼</p>
                    <p>★大型商场、KTV</p>
                    <p>★地铁站、地下空间、隧道</p>
                    <p>★酒店、装饰内墙、护壁</p>
                    <p>★其他功能区墙面</p>
                </div>
                <el-divider content-position="left">产品展示</el-divider>
                
                <el-tabs v-model="tabIndexProd" class="prod-list denamore">
                    <el-tab-pane :label="sets.denamoreConf[item.type]" :name="item.type" v-for="item in prodsList" :key="item.type">
                        <div class="part-out">
                            <div v-for="item1 in item.val" :key="item1.id" class="part" @click="toPreview(item1.url)">
                                <div>
                                    <img :src="item1.url"/>
                                    <p>{{item1.name}}</p>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
                
            </el-card>
        </div>
        <div v-if="tabIndex === 'yrrbw'">
            <el-card class="box-card">
                <el-divider content-position="left">选择宜人热被窝的六大因素</el-divider>
                <div class="param">
                    <p>安全 :床上水循环，无任何电源，在任何情况下不会漏电，不会着火。</p>
                    <p>健康：独有的水电分离设计，毯体没有辐射，对孕妇、老人、婴儿更适合，睡后不口干、不上火。</p>
                    <p>节能:  本产品采用了热能循环利用高科技技术，每10个小时一度电，这不是口号，绝对经得起考验。</p>
                    <p>温暖：本产品采用温度调节控温功能，尤其是体弱怕寒、妇女，老年人以及需要热敷疗的人群。</p>
                    <p>一机多功能：本品既是冬季取暖用品，又是一台夏季电子式晒被机，在南方的梅雨季节以及北方持续连阴的天气下，被子潮湿，容易滋生细菌，这是本产品更新换代后新开发的功能，每天只需10-15分钟，为您的被褥杀菌、除螨、除潮。给你一个温暖，舒适，干爽的睡眠环境，尤其适合居住环境晒被子不方便便或者没有时间晒被子的人群。</p>
                    <p>方便：本品体积小便于携带，体积只有手提包大小，不用繁琐的安装。</p>
                </div>
                <el-divider content-position="left">产品展示</el-divider>
                
                <el-tabs v-model="tabIndexProd" class="prod-list">
                    <el-tab-pane :label="sets.yrrbwConf[item.type]" :name="item.type" v-for="item in prodsList" :key="item.type">
                        <div class="part-out">
                            <div v-for="item1 in item.val" :key="item1.id" class="part" @click="toPreview(item1.url)">
                                <img :src="item1.url"/>
                                <p>{{item1.name}}</p>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
                
            </el-card>
        </div>
        <el-dialog :visible.sync="showPreview" class="preview" width="90%">
            <div><img :src="previewImg"/></div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showPreview: false,
            previewImg: '',
            sets: {
                denamoreConf: {
                    '25': '学校专用',
                    '26': '商业公共专用',
                    '27': '家庭装饰专用'
                },
                yrrbwConf: {
                    '17': '内热毯',
                    '18': '外热毯',
                    '20': '水暖床垫',
                    '22': '外热坐垫',
                    '23': '水疗护腰护膝',
                    '24': '水暖炕',
                    '26': '空调凉垫',
                    '27': '汽车用品',
                    '28': '主机',
                    '30': '玉石床垫'
                }
            },
            prodsList: [],
            tabIndex: 'denamore',
            tabIndexProd: '',
            loading: false
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.prodsList = []
            this.$ajax.post('prods/get', { type: this.tabIndex }, res => {
                let obj = res.reduce((obj, item) => {
                    if (!obj[item.typeSec]) {
                        obj[item.typeSec] = []
                    }
                    obj[item.typeSec].push(item)
                    return obj
                }, {})
                Object.keys(obj).forEach(item => {
                    this.prodsList.push({
                        type: item,
                        val: obj[item]
                    })
                })
                this.tabIndexProd = this.prodsList[0]['type']
            })
        },
        toPreview(url) {
            this.previewImg = url
            this.showPreview = true
        },
        typeChange(val) {
            this.init()
        }
    }
}
</script>
<style lang="scss" scoped>
.denamore {
    .part-out {
        align-items: flex-start;
    }
}
.prod-list {
    .part-out {
        flex-flow: wrap;
        justify-content: flex-start;
        align-items: flex-end;
        .part {
            cursor: pointer;
            width: 25%;
            div {
                padding: 0.5rem;
            }
            img {
                width: 100%;
            }
            .type {
                font-size: 1.5rem;
            }
        }
    }
    
} 
.btns {
    text-align: center;
    padding: 1rem 0;
}
.preview {
    div {
        text-align: center;
    }
    img {
        width: 100%;
        max-width: 400px;
    }
}
</style>