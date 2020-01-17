<template>
    <div class="footer">
		<p class="company">浙江大树环保科技有限公司</p>
		<p>
		联系人：陈峻<br/>
		手机：13958112604<br/>
		邮箱：214355031@qq.com<br/>
		微信：chenjun72
		</p>
		<p>
		联系人：李忠军<br/>
		手机：13969179639
		</p>
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
	p {
		margin-bottom: 1rem;
	}
	.company {
		font-size: 1rem;
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