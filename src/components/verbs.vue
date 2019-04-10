<template>
  <div
    class="card"
    :class="{checked:isBackShown}"
    :style="sizes">

    <transition name="card--front">

      <div
        class="card--front"
        v-if="!isBackShown"
        @click="check()"
        v-html="verb.translate">
      </div>
    </transition>
    <transition name="card--back">
      <div
        class="card--back"
        v-if="isBackShown">
        {{verb.v1}} <br>
        {{verb.v2}} <br>
        {{verb.v3}}

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
    };
  },
  created() {
    this.sizes.width = this.getMinDocumentSize();
    this.sizes.height = this.getMinDocumentSize();
  },
  methods: {
    check() {
      this.isBackShown = !this.isBackShown;
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
        ? `${document.body.offsetWidth}px`
        : `${document.body.offsetHeight}px`;
    },
  },
};
</script>
