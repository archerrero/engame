<template>
  <div
    class="card"
    :class="{checked:isBackShown}"
    :style="sizes">

    <transition name="card--front">

      <div
        class="card--front"
        v-if="!isBackShown"
        @click="check()">
        {{verb.translate}}
      </div>
    </transition>

    <transition name="card--back">

      <div
        class="card--back"
        v-if="isBackShown">

        <span class="card--back--translate">
          {{verb.translate}}          
        </span>

        <div class="card--back--forms">
          <p>{{verb.v1}}</p>
          <p>{{verb.v2}}</p>
          <p>{{verb.v3}}</p>
        </div>

        <div class="card--back--footer">

          <div
            class="card--arrows--i left"
            @click="goTrue()">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-check fa-w-16 fa-3x">
              <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class=""></path>
            </svg>
          </div>

          <p
            class="card--back--offer"
            @click="offerTranslation()"> Предложить перевод</p>

          <div
            class="card--arrows--i right"
            @click="goFalse()">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="svg-inline--fa fa-times fa-w-11 fa-3x">
              <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class=""></path>
            </svg>  
          </div>
        </div>

        

      </div>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'Verbs',
  props: {
    verb: Object,
  },
  data() {
    return {
      isBackShown: false,
      sizes: {
        width: 0,
        height: 0,
      },
      GAP: 20,
    };
  },
  created() {
    this.sizes.width = this.getMinDocumentSize();
    this.sizes.height = this.getMinDocumentSize();
  },
  methods: {
    check() {
      this.isBackShown = !this.isBackShown;
      this.$emit('opened')
    },

    goTrue() {
      this.$emit('true');
      this.isBackShown = !this.isBackShown;
    },

    goFalse() {
      this.$emit('false', this.verb);
      this.isBackShown = !this.isBackShown;
    },

    getMinDocumentSize() {
      return (document.body.offsetHeight > document.body.offsetWidth)
        ? `${document.body.offsetWidth - this.GAP}px`
        : `${document.body.offsetHeight - this.GAP}px`;
    },
    offerTranslation() {
      this.$emit('offerTranslation')
    },
  },
};
</script>
