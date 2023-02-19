function gerRandomValue(min, max) {
  return (attackValue = Math.floor(Math.random() * (max - min)) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = gerRandomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = gerRandomValue(15, 8);
      this.playerHealth -= attackValue;
    },
  },
});

app.mount("#game");
