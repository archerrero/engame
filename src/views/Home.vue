<template>
  <div class="home">
    <verbs
      :verb="verb"
      @true="doTrueEvent($event)"
      @false="doFalseEvent($event)" />

  </div>
</template>

<script>
// @ is an alias to /src
import verbs from '@/components/verbs.vue';

export default {
  name: 'home',
  components: {
    verbs,
  },
  data() {
    return {
      verb: '',
    };
  },
  created() {
    this.getNew();
  },
  computed: {
    verbs() {
      return this.$store.state.verbs;
    },
  },
  methods: {
    random() {
      return Math.floor(Math.random() * (this.verbs.length));
    },
    getVerb() {
      return this.verbs[this.random()];
    },
    doTrueEvent() {
      this.getNew();
    },
    doFalseEvent(event) {
      this.verbs.push(event);
      this.getNew();
    },
    getNew() {
      this.verb = this.getVerb();
      console.log(this.verb);
    },
  },
};
</script>
