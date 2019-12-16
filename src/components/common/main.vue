<template>
    <div class="outer">
        <headers></headers>
        <router-view></router-view>
        <footers></footers>
	</div>
</template>

<script>
import headers from '@c/common/headers'
import footers from '@c/common/footers'
export default {
	name: 'mains',
	components: {
		headers,
		footers
    }
}
</script>
<style lang="scss">
.outer {
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
}
</style>