const { createApp } = Vue;
const app = createApp({
    data(){
        return{
            emails: [],
            loading: false,
        }
    },
    methods: {
        generateEmails(){
            this.loading = true;
            const requests = [];
            for(let i=0 ;i < 10; i++ ){
                requests.push(axios.get('https://flynn.boolean.careers/exercises/api/random/mail'));
            };
            axios
            .all(requests)
            .then(responses => {
            this.emails = responses.map(response => response.data.response);
            this.loading = false;
            })
            .catch(error => {
            console.error(error);
            this.loading = false;
            });
        }
    }
});app.mount('#app')