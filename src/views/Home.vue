<template>
  <div class="home">
    <verbs
      :verb="verb"
      @opened="isCardOpened = true"
      @true="doTrueEvent($event)"
      @false="doFalseEvent($event)"
      @offerTranslation="offerTranslation()" />

    <modal
      v-if="offer"
      :verb="verb"
      @close="modalClose()" />

    <greeter
      v-if="isGreeterShown"
      @close="closeGreeter()"/>
  </div>
</template>

<script>
// @ is an alias to /src
import verbs from '@/components/verbs.vue';
import modal from '@/components/modalForm.vue';
import greeter from '@/components/greeter.vue';

export default {
  name: 'home',
  components: {
    verbs,
    modal,
    greeter
  },
  data() {
    return {
      verb: '',
      storage: {
        falsedVerbs: [],
        truedVerbs: [],
      },
      applyingVerbs: null,
      isCardOpened: false,
      offer: false,
      isGreeterShown: false,
    };
  },
  created() {
    this.getNew();
    // this.createIssue();

    if (typeof localStorage.greeter === 'undefined') this.isGreeterShown = true


    this.storage.falsedVerbs = this.getStorage('falsedVerbs');
    this.aplyFailedVerbs();
  },
  computed: {
    verbs() {
      return this.applyingVerbs || this.$store.state.verbs;
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
      const key = 'falsedVerbs';

      this.storage[key].push(event.id)
      this.verbs.push(event);

      this.getNew();
      this.setStorage(key);
    },

    getNew() {
      this.verb = this.getVerb();
    },
    
    modalClose() {
      this.offer = false;
    },
    setStorage(key) {
      localStorage[key] = JSON.stringify(this.storage[key]);
    },

    getStorage(key) {
      return (typeof localStorage[key] !== 'undefined')
        ? JSON.parse(localStorage[key])
        : [];
    },

    aplyFailedVerbs() {
      let falsedVerbs = this.verbs.filter((item) => {
        // console.log(item)
        return this.storage.falsedVerbs.includes(item.id)
      })
      this.verbs.forEach(element => {
        if (this.storage.falsedVerbs.includes(element.id)) {
          this.verbs.push(element)
        }
      });

      this.verbs.push(falsedVerbs)
      // this.applyingVerbs = Object.assign({}, this.verbs, falsedVerbs)
    },

    offerTranslation() {
      this.offer = true;
    },
    closeGreeter() {
      this.isGreeterShown = false;
    },

    createIssue() {

      // this.axios('https://api.github.com/authorizations').then((response) => {
      //   console.log(response)
      // })
      

      // this.axios({
      //   method:'post',
      //   mode: 'no-cors',
      //   url:'https://api.github.com/repos/archerrero/engame/issues',
      //   headers: { 
      //     Authorization: '5894fd789edb57dc05ad',
      //     'Access-Control-Allow-Origin': '*',
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      //     withCredentials: true,
      //     credentials: 'same-origin',
      //   },
      //   useCredentails: true,
      //   option: {
      //     crossDomain: true,
      //   },
      //   body: {
      //     "title": "Found a bug",
      //     "body": "I'm having a problem with this.",
      //   },
      // }).then((response) => {
      //   console.log(response)
      // })
    },
  },
};
</script>
