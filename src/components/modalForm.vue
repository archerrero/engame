<template>
  <div 
    class="modal--wrapper"
    @click.self="closeModal()">


    <transition name="modal">
      <div
        v-if="shown"
        class="modal">
        <label class="modal--label">
          <span>Перевод</span>
          <input
            class="modal--input"
            type="text"
            name="translate"
            v-model="offeredVerb.translate"/>
        </label>

        <label class="modal--label">
          <span>1я форма</span>
          <input
            class="modal--input"
            type="text"
            name="v1"
            v-model="offeredVerb.v1" />
        </label>

        <label class="modal--label">
          <span>2я форма</span>
          <input
            class="modal--input"
            type="text"
            name="v2"
            v-model="offeredVerb.v2" />
        </label>

        <label class="modal--label">
          <span>3я форма</span>
          <input
            class="modal--input"
            type="text"
            name="v3"
            v-model="offeredVerb.v3" />
        </label>
        
        <button
          class="modal--btn"
          :class="{disabled: isDisabled, done: isSend}"
          :disabled="isDisabled || isSend"
          @click="sendOffer()">

          <template v-if="!isSend">
            Отправить
          </template>

          <template v-else>
            отправлено 
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 512 512" class="svg-inline--fa fa-check fa-w-16 fa-3x"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class=""></path></svg>
          </template>
          </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  props: {
    verb: {
      type: Object,
    }
  },
  data() {
    return {
      text: '',
      shown: false,
      offeredVerb: {},
      isDisabled: true,
      isSend: false,
    }
  },
  mounted() {
    this.shown = true;
    // this.offeredVerb = this.verb;
    this.offeredVerb = Object.assign({}, this.verb);
    
  },
  watch: {
    offeredVerb: {
      deep: true,
      handler: function (val, oldVal) {
        console.log(val, oldVal)
        this.isDisabled = oldVal !== val;
      },
    },
  },
  methods: {
    closeModal(){
      this.$emit('close')
    },
    sendOffer() {
      this.axios({
        method:'post',
        url: 'https://api.github.com/repos/archerrero/engame/issues',
        headers: {
          Accept: 'application/vnd.github.symmetra-preview+json',
          Authorization: 'token b130f9434ad9ddc35b63d29194dc87ccb1194cc0',
        },
        data: {
          "title": `Replace offer for #${this.verb.id}`,
          "body": `Id is ${this.verb.id} \n
            translate: "${this.verb.translate}" to "${this.offeredVerb.translate}" \n
            v1: "${this.verb.v1}" to "${this.offeredVerb.v1}" \n
            v2: "${this.verb.v1}" to "${this.offeredVerb.v2}" \n
            v3: "${this.verb.v3}" to "${this.offeredVerb.v3}" \n
            `,
        }
      }).then((response) => {
        if (response.status === 201) {
          this.isSend = true;
          this.closeAfter(1500);
        }
        // console.log(response)
      })
    },

    closeAfter(time) {
      setTimeout(() => {
        this.closeModal()
      }, time);
    },
  },
}
</script>
