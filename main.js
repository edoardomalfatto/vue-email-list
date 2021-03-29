Vue.config.devtools = true;

var root = new Vue({
    el: '#app',
    data: {
        generatedEmail: []
    },
    mounted() {
        console.log("entered");
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {

                    this.generatedEmail.push(response.data.response);
                    console.log(this.generatedEmail);
                });
        }

    }
});