const app = new Vue({
    el: "#app",
		name: 'aselect',
		data: {
			value: 'Select a Fruit',
			list: ["Orange","Apple","Kiwi", "Lemon", "Pineapple"],
      visible: false
		},
		methods: {
			toggle() {
				this.visible = !this.visible;
			},
			select(option) {
			    this.value = option;
			}
		}
	})