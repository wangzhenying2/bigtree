<template>
<div class="outer">
	<div class="header part-out">
		<div class="part"><img src="" class="logo"/></div>
		<div class="part">
			<el-menu default-active="juejin" mode="horizontal" @select="onSelect" class="header-menu" active-text-color="#409EFF">
				<el-menu-item index="juejin">
					<span slot="title">菜单一</span>
				</el-menu-item>
				<el-menu-item index="segmentfault">
					<span slot="title">菜单二</span>
				</el-menu-item>
			</el-menu>
		</div>
	</div>
	<div>
		<!-- 图片切换 -->
		<el-carousel indicator-position="outside">
			<el-carousel-item v-for="item in 4" :key="item">
				<h3>{{ item }}</h3>
			</el-carousel-item>
		</el-carousel>
	</div>
	<div class="conts">
		<div>
			<el-divider>关于我们</el-divider>
			<div class="part-out">
				<div class="part">
					Element 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。我们提供了四种方法，可以进行不同程度的样式自定义。
				</div>
				<div class="part">
					<div style="width: 300px"></div>
				</div>
			</div>
		</div>
		<div class="bg1">
			<el-divider>主营业务</el-divider>
			<div class="part-out lay1">
				<div class="part">
					<el-card>
						<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" width="100%">
						<div style="padding: 14px;">
							<span>好吃的汉堡</span>
							<div class="bottom clearfix">
								<time class="time">12344</time>
							</div>
						</div>
					</el-card>
				</div>
				<div class="part">
					<el-card>
						<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" width="100%">
						<div style="padding: 14px;">
							<span>好吃的汉堡</span>
							<div class="bottom clearfix">
								<time class="time">12344</time>
							</div>
						</div>
					</el-card>
				</div>
				<div class="part">
					<el-card>
						<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" width="100%">
						<div style="padding: 14px;">
							<span>好吃的汉堡</span>
							<div class="bottom clearfix">
								<time class="time">12344</time>
							</div>
						</div>
					</el-card>
				</div>
			</div>
		</div>
		
	</div>
</div>
</template>

<script>
export default {
	name: 'index',
	data() {
		return {
			list: [],
			total: 0,
			page: {
				type: 'juejin',
				curPage: 0,
				pSize: 20
			}
		}
	},
	mounted() {
		this.getList()
	},
	methods: {
		getList() {
			this.$ajax.post('/msg', this.page, res => {
				this.list = res.list
				this.total = res.total
			})
		},
		onSelect(val) {
			this.page.type = val
			this.getList()
		}
	}
}
</script>

<style lang="scss">
* {
	padding: 0;
	margin: 0;
}

.outer {
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
}
.bg1 {
	background-color: #ecf5ff;
}
.lay1 {
	padding: 20px;
}
.part-out {
	display: flex;
	justify-content: space-between;
}
.part {}
.header {
	display: flex;
	.logo {
		height: 50px;
		width: 200px;
		margin-right: 10px;
	}
	.header-menu {

	}
}

.conts {
	margin-top: 60px;
}
.art_out {
	border-bottom: 1px solid #f1f1f1;
	padding: 15px;
	line-height: 1.5em;
}
.art_info {
	font-size: 14px;
	color: #b2bac2;
}
.art_info span{
	margin-right: 1em;
}
.art_title a{
	font-size: 16px;
	color: #2e3135;
	font-weight: bold;
	text-decoration: none;
}
.art_title a:hover {
	text-decoration: underline;
}
.menu_img {
	width: 16px;
	height: 16px;
	margin-right: 5px;
}
</style>
