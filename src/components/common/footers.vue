<template>
    <div class="footer">
		<p class="company">浙江大树环保科技有限公司</p>
		<p>联系人：陈峻</p>
		<p>手机号：13958112604</p>
		<p>邮箱：214355031@qq.com</p>
		<p>微信号：chenjun72</p>
		<p>技术支持：eagleWang</p>
		<img src="@/assets/image/weixin.jpg" class="weixin"/>
	</div>
</template>
<script>
export default {
    name: 'footers'
}
</script>
<style lang="scss" scoped>
.footer {
	position: relative;
	background-color: #004774;
	color: #fff;
	padding: 1rem;
	line-height: 1.5rem;
	.company {
		font-size: 1rem;
		margin-bottom: 1rem;
	}
	.weixin {
		position: absolute;
		right: 1rem;
		top: 1rem;
		width: 5rem;
		height: 5rem;
	}
}
</style>