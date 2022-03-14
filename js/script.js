const app = new Vue({

    el: '#container',

    data: {

        arrayTodo: [

            {
                text: 'fare i compiti',
                done: true,
            },

            {
                text: 'sistemare la casa',
                done: false,
            },

            {
                text: 'scrivere codice',
                done: true,
            },

            {
                text: 'portare a spasso il cane',
                done: true,
            },

            {
                text: 'andare a fare la spesa',
                done: false,
            },

            {
                text: 'scrivere altro codice',
                done: false,
            },

        ],
    },

    methods: {

        funzioneDelete(index) {

            this.arrayTodo.splice(index, 1);
        },

    }




});