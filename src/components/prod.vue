<template>
    <div>
        <div class="btns">
            <el-radio-group v-model="tabIndex" size="small">
                <el-radio-button label="denamore">德耐姆板材</el-radio-button>
                <el-radio-button label="1">宜人热被窝</el-radio-button>
            </el-radio-group>
        </div>
        
        <div v-if="tabIndex === 'denamore'" class="contact-info">
            <el-card class="box-card">
                <el-divider content-position="left">产品介绍</el-divider>
                <div>
                    <p>无机纤维抗菌板是以高硅石英砂、矿物纤维水泥和进口原生木浆纤维为增加材料，经制浆混配高温蒸压成型，并添加抗菌剂，面层经特殊处理。从而使板材表面细菌繁殖受到抑制，达到大肠杆菌、金黄色葡球菌、克雷白氏杆菌等常见病菌，抗菌率＞99.99，耐用易清洁，可耐冲击、耐刮、耐磨、耐潮湿。达到A级防火等多项卓越性能，是学校、医院、机场等公共场所的专用饰面板材。</p>
                </div>
                <el-divider content-position="left">应用范围</el-divider>
                <div>
                    <p>★学校走廊、大 厅、教室</p>
                    <p>★医院ICU病房，急诊室、门诊室、病房、手术室墙面</p>
                    <p>★**写字楼</p>
                    <p>★大型商场、KTV</p>
                    <p>★地铁站、地下空间、隧道</p>
                    <p>★**酒店、装饰内墙、护壁</p>
                    <p>★其他功能区墙面</p>
                </div>
                <el-divider content-position="left">产品展示</el-divider>
                
                <el-tabs v-model="tabIndexProd" class="prod-list">
                    <el-tab-pane :label="item.type" :name="item.type" v-for="item in prodsList" :key="item.type">
                        <div class="part-out">
                            <div v-for="item1 in item.val" :key="item1.id" class="part">
                                <img :src="item1.url"/>
                                <p>{{item1.name}}</p>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
                
            </el-card>
        </div>
        <div v-if="tabIndex === '1'">
            
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            prodsList: [],
            tabIndex: 'denamore',
            tabIndexProd: '',
            loading: false,
            form: {
                name: '',
                company: '',
                tel: '',
                email: '',
                title: '',
                desc: ''
            },
            rules: {
                name: { required: true, message: '请输入姓名'},
                email: [
                    { required: true, message: '请输入邮箱' },
                    { type: 'email', message: '邮箱格式不正确' }
                ],
                title: { required: true, message: '请输入主题'},
                desc: { required: true, message: '请输入内容'}
            }
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
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
        toAdd() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.loading = true
                    this.$ajax.post('msg/add', this.form, () => {
                        this.loading = false
                        this.$message.success('留言提交成功！')
                        this.$refs.form.resetFields()
                    })
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.prod-list {
    .part-out {
        flex-flow: wrap;
        .part {
            width: 20%;
            padding: 1rem;
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
</style>