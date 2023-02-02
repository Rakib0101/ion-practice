<template>
	<div class="landing-page">
		<div>
			<CompanyLogo />
		</div>
		<p class="version">v6.63.13</p>
	</div>
</template>
<script setup>
import CompanyLogo from "../components/Icons/CompanyLogo.vue";
</script>
<style>
.landing-page {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	position: relative;
}
.landing-page .version {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
    padding: 24px;
	display: flex;
	align-items: center;
    justify-content: center;
	color: #767676;
    margin: 0px;
}
</style>
