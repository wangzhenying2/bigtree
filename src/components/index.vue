<template>
	<div class="conts">
		<!-- 图片切换 -->
		<div>
			<el-carousel indicator-position="outside" :height="height">
				<el-carousel-item v-for="item in flash" :key="item">
					<img :src="item" width="100%"/>
				</el-carousel-item>
			</el-carousel>
		</div>

		<!-- part -->
		<div class="layer">
			<el-divider>关于我们</el-divider>
			<div class="param">
				<p>浙江大树环保科技有限公司：创立于2018年，注册资金叁仟万，坐落在风景优美的浙江杭州，西子之畔，主营环保类产品：家庭分布式取暖、水热座垫、水热毯、竹木纤维装饰板、生活用水水箱自动清洗消毒设备等环保业务，公司自成立以来经过辛勤耕耘和不懈努力，浙江大树环保科技有限公司不断发展壮大，已被业内外所认可和推崇，目前，公司已形成了以环保产品数据、行业分析报告等形式雄厚并极具潜力的环保服务品牌，公司发展逐步扩大，业务遍布各大省会及一、二线城市，已覆盖浙江、北京、上海、山东、杭州、南京、等多个城市，对接多家代理机构，为客户提供个性化综合服务方案。</p>
				<p>公司以高标准、高起点的标准严格按照现代化企业的管理要求，对人力资源配置及机构设置进行了优化组合，着力将公司打造成一个管理规范、经营专业的现代化创新企业；并始终为客户提供最好的产品、优质的技术支持、健全的售后服务，同时为企业及个人提供“量体裁衣”一站式个性化服务。</p>
				<p>浙江大树环保科技有限公司下设:总经办、办公室、销售部、财务中心、售后服务部、5大管理职能中心。</p>
				<p>浙江大树环保科技有限公司以“追求环保，树立品牌价值”的核心思想，“以环保与服务求生存”的核心价值观，“恪尽职守，求知进取，稳健谨慎”的使命。不断创新，适应千变万化市场环境，以成为卓越的国际化企业为目标，努力铸造社会信赖的公司。</p>
			</div>
		</div>
		<!-- part -->
		<div class="bg1">
			<el-divider>主营业务</el-divider>
			<div class="prods">
				<div class="part">
					<el-card>
						<img :src="prods[0]" width="100%">
						<div style="padding: 0.1rem">
							<strong>德耐姆板材</strong>
							<div class="bottom">
								主要研发生产 A 级不燃——无机纤维生态板，无机纤维抗菌板，等几大系列产品。系列产品均通过国家权威部门鉴定，被认定为“绿色建材选用产品”，被医院 , 学校，酒店等公共场所广泛应用。
							</div>
						</div>
					</el-card>
				</div>
				<div class="part">
					<el-card>
						<img :src="prods[1]" width="100%">
						<div style="padding: 0.5rem">
							<strong>宜人热被窝</strong>
							<div class="bottom">
								“宜人热被窝”牌各种产品，经国家质检中心监测，各项技术符合国家Q/1400LH标准，并获得多项专利,公司产品由中国平安保险公司承保，“德州市知名商标”“守合同重信用企业”2014央视CCTV影响力对话产品推荐单位。
							</div>
						</div>
					</el-card>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import flash1 from 'public/image/flash1.jpg'
import flash2 from 'public/image/flash2.jpg'
import flash3 from 'public/image/flash3.jpg'
import flash4 from 'public/image/flash4.jpg'
import snd from 'public/image/snd_1.jpg'
import yr from 'public/image/yr_1.jpg'
export default {
	name: 'index',
	data() {
		return {
			height: '',
			flash: [ flash1, flash2, flash3, flash4 ],
			prods: [ snd, yr ],
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
		// 默认设置图片的高度是宽度的1/3
		this.height = document.body.clientWidth / 3 + 'px'
		// this.getList()
	},
	methods: {
	}
}
</script>

<style lang="scss" scoped>
.bg1 {
	background-image: linear-gradient(#ecf5ff, #ecf5ff, #fff);
}
.conts {
	font-size: 0.8rem;
	.el-divider__text {
		font-size: 1.2rem;
		padding: 0.2rem 0.5rem;
		color: #004774;
	}
	.part-out {
		.part {
			width: 50%;
		}
	}
	.prods {
		.part {
			margin: 2rem;
		}
		strong {
			line-height: 2em;
		}
		.bottom {
			line-height: 1.5em;
		}
	}
	.param {
		padding: 1rem;
	}
}
</style>
