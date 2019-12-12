<script>
export default {
	name: "Home",
	created() {
		this.$options.components[this.$route.params.id] = require("@/components/" + this.$route.params.id + ".vue").default;
	},
	render(createElement) {
		return createElement(this.$route.params.id);
	}
};
</script>
