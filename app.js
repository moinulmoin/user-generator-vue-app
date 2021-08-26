const app = Vue.createApp({
	// template: '<h1>Hello {{framework}}</h1>',
	data() {
		return {
			projectTitle: 'User Generator App with Vue',
			firstName: 'Moinul',
			lastName: 'Moin',
			email: 'moinulmoin101@gmail.com',
			gender: 'male',
			picture: '/moinulmoin.jpg',
		};
	},
	methods: {
		async getUser() {
			const res = await fetch('https://randomuser.me/api/');
			const { results } = await res.json();

			(this.firstName = results[0].name.first),
				(this.lastName = results[0].name.last),
				(this.email = results[0].email),
				(this.gender = results[0].gender),
				(this.picture = results[0].picture.large);
		},
	},
});

app.mount('#app');
