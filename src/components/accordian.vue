<template>
	<div>
		<div class="accordian">
			<h3 @click="expandAccordian" class="accordian-header">Section 1</h3>
			<div class="accordian-body">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, culpa fuga iste
					ratione non in amet! Deleniti sed fuga voluptatibus!
				</p>
			</div>
		</div>
		<div class="accordian">
			<h3 @click="expandAccordian" class="accordian-header">Section 2</h3>
			<div class="accordian-body">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, culpa fuga iste
					ratione non in amet! Deleniti sed fuga voluptatibus! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Explicabo, culpa fuga iste ratione non in amet! Deleniti sed
					fuga voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
					culpa fuga iste ratione non in amet! Deleniti sed fuga voluptatibus!
				</p>
			</div>
		</div>
		<div class="accordian">
			<h3 @click="expandAccordian" class="accordian-header">Section 3</h3>
			<div class="accordian-body">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, culpa fuga iste
					ratione non in amet! Deleniti sed fuga voluptatibus! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Explicabo, culpa fuga iste ratione non in amet! Deleniti sed
					fuga voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
					culpa fuga iste ratione non in amet! Deleniti sed fuga voluptatibus!
				</p>
			</div>
		</div>
		<div class="accordian">
			<h3 @click="expandAccordian" class="accordian-header">Section 4</h3>
			<div class="accordian-body">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, culpa fuga iste
					ratione non in amet! Deleniti sed fuga voluptatibus! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Explicabo, culpa fuga iste ratione non in amet! Deleniti sed
					fuga voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
					culpa fuga iste ratione non in amet! Deleniti sed fuga voluptatibus!
				</p>
			</div>
		</div>
		<div class="accordian">
			<h3 @click="expandAccordian" class="accordian-header">Section 5</h3>
			<div class="accordian-body">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, culpa fuga iste
					ratione non in amet! Deleniti sed fuga voluptatibus! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Explicabo, culpa fuga iste ratione non in amet! Deleniti sed
					fuga voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
					culpa fuga iste ratione non in amet! Deleniti sed fuga voluptatibus!
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "accordian",
		data() {
			return {
				// expanded: false,
			};
		},
		methods: {
			expandAccordian(e) {
				let accordian = e.target.parentElement;
				let accordian_body = e.currentTarget.nextSibling;
				if (accordian.classList.contains("open")) {
					accordian_body.style.height = accordian_body.scrollHeight + "px";
					accordian.classList.remove("open");
					setTimeout(() => accordian_body.removeAttribute("style"), 2);
				} else {
					accordian_body.style.height = accordian_body.scrollHeight + "px";
					accordian.classList.add("open");
					setTimeout(() => accordian_body.removeAttribute("style"), 250);
				}
			},
		},
	};
</script>

<style scoped>
	.accordian {
		text-align: center;
		background: rgb(206, 227, 245);
		color: rgb(59, 59, 59);
		margin: 12px 1rem;
		border-radius: 5px;
		transition: 0.5s;
	}
	.accordian .accordian-header {
		position: relative;
		display: flex;
		align-items: center;
		padding: 10px 1.25rem;
		border: 2px solid #000;
		border-radius: 5px;
		cursor: pointer;
	}
	.accordian-header::after {
		content: "+";
		font-size: 25px;
		margin-left: auto;
		transition: 0.25s;
	}
	.accordian.open .accordian-header::after {
		transform: rotate(45deg);
	}
	.accordian .accordian-body {
		height: 0;
		overflow: hidden;
		transition: 0.25s ease-out;
	}
	.accordian.open .accordian-body {
		height: auto;
	}
	p {
		padding: 1rem;
		text-align: justify;
	}
</style>
