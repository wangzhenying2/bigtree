<template>
    <div>
        <div class="btns">
            <el-radio-group v-model="tabIndex" size="small">
                <el-radio-button label="0">在线留言</el-radio-button>
            </el-radio-group>
        </div>
        <div v-if="tabIndex === '0'" class="msg-form">
            <el-form :model="form" :rules="rules" ref="form" >
                <el-form-item prop="name">
                    <el-input v-model="form.name">
                        <template slot="prepend">姓名</template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.company">
                        <template slot="prepend">公司</template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.tel">
                        <template slot="prepend">手机</template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input v-model="form.email">
                        <template slot="prepend">邮箱</template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="title">
                    <el-input v-model="form.title">
                        <template slot="prepend">标题</template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="desc">
                    <el-input type="textarea" placeholder="请输入留言内容" v-model="form.desc" rows="5rem"></el-input>
                </el-form-item>
                <div class="btns">
                    <el-button type="primary" @click="toAdd" :loading="loading">{{ loading ? '提交中 ...' : '提交留言' }}</el-button>
                </div>
            </el-form>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            tabIndex: '0',
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
    methods: {
        toAdd() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.loading = true
                    this.$ajax.post('yrrbw/add', this.form, () => {
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
.btns {
    text-align: center;
    padding: 1rem 0;
}
.msg-form {
    padding: 1rem;
    margin: 0 auto;
    max-width: 600px;
}
</style>