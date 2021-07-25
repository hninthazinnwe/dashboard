<template>
	<div>
		<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" id="nav">
			<a href="/" class="align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
			<img src="../assets/kopwar_logo.jpg" width="70" />
			<h3 class="fs-4 mt-2">Kopwar</h3>
			</a>
			<hr>
			<ul class="nav nav-pills flex-column mb-auto">
			<li class="nav-item">
				<a href="#" class="nav-link text-white">
					<router-link to="/">Home</router-link>
				</a>
			</li>
			<li>
				<a href="#" class="nav-link text-white">
					<router-link to="/stock">Stock</router-link>
				</a>
			</li>
			</ul>
			<hr>
			<div class="dropdown">
				<a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
					<strong>Setting</strong>
				</a>
				<ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
					<li><a class="dropdown-item" href="#">User Profile</a></li>
					<li><a class="dropdown-item" href="#">Sign out</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'sidebar'
}
</script>

<style>
	#nav {
		width: 150px;
		height: 100%;
		position: fixed;
	}
	#nav > a {
		color: #ffffff !important;
	}
	.bd-placeholder-img {
		font-size: 1.125rem;
		text-anchor: middle;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
	}
</style>