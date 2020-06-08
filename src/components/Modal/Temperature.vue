<template>
  <div class="weather">
    <img v-bind:src="this.iconUrl" />
    <p>London Temperature: {{temperature | decimalTemperature}}&deg;</p>
  </div>
</template>

<style lang="postcss" scoped>
</style>

<script>
import axios from "axios";
export default {
  name: "Temperature",
  data() {
    return {
      temperature: null,
      icon: null,
      iconUrl: null
    };
  },
  async mounted() {
    try {
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&id=524901&appid=${process.env.VUE_APP_API_KEY}`
        )
        .then(res => {
          this.temperature = res.data.main.temp;
          this.icon = res.data.weather[0].icon;
          this.iconUrl = `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
        });
    } catch (err) {
      console.log(err);
    }
  },
  filters: {
    decimalTemperature(value) {
      return value.toFixed(1);
    }
  }
};
</script>