const app = new Vue({

    el: '#container',

    data: {

        newTodo: {
            text: '',
            done: false,
        },

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

        funzioneAddTodo() {
            if (this.newTodo.text.trim() != '') {
                this.arrayTodo.unshift({ ...this.newTodo });
            }
        },

        funzioneDone(index) {
            if (this.arrayTodo[index].done) {
                this.arrayTodo[index].done = false;
            } else {
                this.arrayTodo[index].done = true;
            }
        }
    }




});