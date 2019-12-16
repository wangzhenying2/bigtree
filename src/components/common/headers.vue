<template>
    <div class="header part-out">
		<!-- <div class="part"><img src="@/assets/logo.jpg" class="logo"/></div> -->
		<div class="part">
			<el-menu :default-active="this.$route.path" mode="horizontal" class="header-menu" active-text-color="#409EFF" >
				<el-menu-item index="/">
					<router-link to="/">首页</router-link>
				</el-menu-item>
				<el-menu-item index="/prod">
					<router-link to="/prod">产品</router-link>
				</el-menu-item>
				<el-menu-item index="/word">
					<router-link to="/word">联系我们</router-link>
				</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>
<script>
export default {
	name: 'headers',
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>
<style lang="scss" scoped>
.header {
	padding: 0.5rem 0;
	.logo {
		height: 4rem;
		margin: 0 1rem;
	}
	.header-menu.el-menu--horizontal {
		border-bottom: solid 1px #fff;
	}
	.header-menu a {
		text-decoration: none;
		font-size: 1rem;
		color: #333;
	}
	.el-menu--horizontal>.el-menu-item {
		height: 3rem;
		line-height: 3rem;
	}
}

</style>