<template>
  <div class="greeter--wrapper">
    <h2 class="greeter--header">Приветствую, друг!</h2>
    <div class="greeter--content">
      <ul class="greeter--list">
        <li class="greeter--list--i">Взгдяни на русские глаголы на карточке</li>
        <li class="greeter--list--i">Попробуй вспомнить 3 формы неправильного глагола на английском</li>
        <li class="greeter--list--i">Нажми на карточку для проверки</li>
        <li class="greeter--list--i"><i class="green">Правильно?</i> Здорово! Жми на зеленую стрелку</li>
        <li class="greeter--list--i"><i class="red">Ошибся?</i> Ничего страшного, жми на красную стрелку, эти слова будут появляться чаще)</li>
        <li class="greeter--list--i">Нашел ошибку? Или есть перевод лучше? Жми "Предложить перевод"</li>
      </ul>
    </div>
    <button
      class="button"
      @click="close()">я все понял!</button>
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$emit('close');
      localStorage.greeter = false;
    },
  }
}
</script>