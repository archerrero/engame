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

        <div  class="card--back--forms">
          <p>{{verb.v1}}</p>
          <p>{{verb.v2}}</p>
          <p>{{verb.v3}}</p>
        </div>

        <p
          class="card--back--offer"
          @click="offerTranslation()"> Предложить перевод</p>
        
        <div
          class="card--arrows--i left"
          @click="goTrue()">&lsaquo;</div>
        <div
          class="card--arrows--i right"
          @click="goFalse()">&rsaquo;</div>

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
