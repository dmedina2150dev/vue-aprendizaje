/** ESTA FUNCION REGISTRA Y CREA UN COMPONENTE EN VUE 
 * RECIBE DOS PARAMETRO 
 * 1. NOMBRE DEL COMPONENTE
 * 2. UN OBJETO CON PRACTICAMENTE LAS MISMAS PROPIEDADES QUE LA INSTANCIA DE VUE
*/
Vue.component('CoinDetail', {
    /** PROPIEDAD PARA DEFINIR LAS PROPIEDADES QUE PASARAN DEL COMPONENTE PADRE AL HIJO */
    //props: ['changePercent', 'title', 'img', 'name', 'precio'],// SE PUEDE PASAR PROPIEDAD POR PORPIEDAD O RECIBIR UN OBJETO DEL PADRE CON TODAS LAS PROPIEDADES
    props: ['coin'],
    data () {
        return {
            showPrices: false,
            value: 0
        }
    },
    created() {
        console.log('Created coinDetal...')
    },

    mounted () {
        console.log('Mounted coinDetal...')
    },
    methods: {
        toggleShowPrices () {
            this.showPrices = !this.showPrices;

            // LE DECIMO EL NOMBRE DEL EVENTO
            /**
             * @param
             * 1. NOMBRE DEL EVENTO
             * 2. UN VALOR
             */
            this.$emit('change-color', this.showPrices ? 'FF96C8' : '3D3D3D');
        }
    },
    computed: {
        title () {
            return `${this.coin.name} - ${this.coin.symbol}`;
        },
        convertedValue () {
            if(!this.value) {
                return 0;
            }

            return this.value / this.coin.precio;
        }
    },
    /** ESTA PROPIEDAD NOS PERMITE DEFINIR LA PLATILLA QUE USARA EL COMPONENTE */
    template: `
        <div>
            <img
                v-on:mouseover="toggleShowPrices"
                v-on:mouseout="toggleShowPrices"
                v-bind:src="coin.img"
                v-bind:alt="coin.name">
            <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
                {{ title }}

                <!-- ESTAS DIRECTIVAS REMUEVEN EL ELEMENTOS DEL DOM -->
                <span v-if="coin.changePercent > 0">🤑</span>
                <span v-else-if="coin.changePercent < 0">🥲</span>
                <span v-else>😀</span>

                <span v-on:click="toggleShowPrices">
                    {{ showPrices ? '❌' : '👁️'}}
                </span>
            </h1>
            
            <input type="number" v-model="value">
            <span>{{ convertedValue }}</span>

            <slot name="text"></slot>
            <slot name="link"></slot>
            
            <ul v-show="showPrices">
            <li
                class="uppercase"
                v-bind:class="{ orange: p.value == coin.precio, red: p.value < coin.precio, green: p.value > coin.precio }"
                v-for="(p, i) in coin.pricesWithDays"
                v-bind:key="p.day">
                {{ i }} - {{ p.day }} - {{ p.value }}
            </li>
        </ul>
        </div>
    `
})

/** SIEMPRE EXISTIRA UNA SOLA INSTANCIA DE VUE 
 *  Y EL RESTO DE COMPONENTS DEPENDERA DE ESTA INSTANCIA */
new Vue({
    el: '#app',

    data () {
        return {
            eth: {
                name: 'ethereum',
                symbol: 'ETH',
                img: './img/ethereum.webp',
                changePercent: 10,
                precio: 10000,
                pricesWithDays: [
                    { day: 'Lunes', value: 8400 },
                    { day: 'Martes', value: 7900 },
                    { day: 'Miercoles', value: 8200 },
                    { day: 'Jueves', value: 9000 },
                    { day: 'Viernes', value: 9400 },
                    { day: 'Sabado', value: 10000 },
                    { day: 'Domingo', value: 10200 },
                ]
            },
            name: 'Bitcoin',
            symbol: 'BTC',
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
            color: 'f4f4f4',
            value: 0
        }
    },
    created() {
        console.log('Created...')
    },

    mounted () {
        console.log('Mounted...')
    },
    
    /** PROPIEDADES COMPUTADAS (Computed Properties)*/
    computed: {
        title () {
            return `${this.name} - ${this.symbol}`;
        },
        convertedValue () {
            if(!this.value) {
                return 0;
            }

            return this.value / this.precio;
        }
    },

    /** WATCHERS
     * El nombre de la funcion debe corresponder a una propiedad de data
     * Recibe dos valores:
     * $ newValue
     * $ oldValue
    */
    watch: {
        showPrices (newValue, oldValue) {
            console.log(newValue, oldValue);
        }
    },

    /** ES UNA PROPIEDAD DE LA INSTANCIA DE VUE, 
     * QUE ES UN OBJETO DONDE PUEDO DEFINIR FUNCIONES.
     */
    methods: {
        changeColor (color) {
            this.color =  color || this.color
                .split('')
                .reverse()
                .join('');
        },
        toggleShowPrices () {
            this.showPrices = !this.showPrices;

            this.color = this.color.split('').reverse().join('');
        }
    }
});