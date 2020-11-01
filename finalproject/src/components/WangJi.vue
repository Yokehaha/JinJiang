<template>
    <div class="div1">
      <div class="div2">
        <h1>比赛时间：{{time}}s</h1>
        <h2>直播播报：{{result}}</h2>
      </div>
      <div class='team'>
          <div>
              <p>中国队进球数：{{team.china}}</p>
              <button @click='team.china++'>点击中国队进一球</button>
          </div>
          <div>
              <p>韩国队进球数：{{team.korea}}</p>
              <button @click='team.korea++'>点击韩国队进一球</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  created() {
    const time = setInterval(() => {
      this.time = this.time + 1;
      if (this.time === 90) {
        clearInterval(time);
      }
    }, 1000);
  },
  data() {
    return {
      time: 0,
      team: {
        china: 0,
        korea: 0,
      },
    };
  },
  computed: {
    result() {
      if (this.time < 90) {
        if (this.team.china > this.team.korea) {
          return '中国队领先';
        } else if (this.team.china < this.team.korea) {
          return '韩国队领先';
        }
        return '双方僵持';
      }
      if (this.team.china > this.team.korea) {
        return '中国队赢';
      } else if (this.team.china < this.team.korea) {
        return '韩国队赢';
      }
      return '平局';
    },
  },
};
</script>

<style scoped>
.div1{
  background-image: url('../assets/picture/football.jpg');
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}
.div2{
  margin-top: 12%;
  color: rgb(70, 5, 100);
}
.team {
  display: flex;
  justify-content: center;
}
button {
  padding: 15px 60px;
  outline: none;
  background-color: rgb(70, 5, 100);
  display: block;
  font-size: 1rem;
  color: white;
  margin: 10px;
}
</style>