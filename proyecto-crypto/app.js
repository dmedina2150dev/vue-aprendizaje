new Vue({
    el: '#app',
    data () {
        return {
            name: 'Bitcoin',
            img: './img/bitcoin-btc-logo.png',
            changePercent: -10,
            prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
            pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 8200 },
                { day: 'Jueves', value: 9000 },
                { day: 'Viernes', value: 9400 },
                { day: 'Sabado', value: 10000 },
                { day: 'Domingo', value: 10200 },
            ],
            precio: 8400,
            showPrices: false,
            color: '9b9e9b'
        }
    },
    /** ES UNA PROPIEDAD DE LA INSTANCIA DE VUE, QUE ES UN OBJETO DONDE PUEDO DEFINIR FUNCIONES.   */
    methods: {
        toggleShowPrices () {
            this.showPrices = !this.showPrices;

            this.color = this.color.split('').reverse().join('')
        }
    }
});