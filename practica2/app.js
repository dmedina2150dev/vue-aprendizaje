Vue.component('modal', {

    data () {
        return {
            title: 'Mi Modal'
        }
    },

    methods: {
        closeModal () {
            this.$emit('close-modal');
        }
    },

    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{ this.title }}</h3>
            <div>
                <slot name="body"></slot>
            </div>
            <footer>
              <button
                v-on:click="closeModal">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
})
  
new Vue({
    el: '#app',

    data () {
        return {
            showModal: false
        }
    },

    methods: {
        toggleShowModal () {
            this.showModal = !this.showModal;
        },

        closeModal () {
            this.$emit('close-modal', false);
        }
    }
})