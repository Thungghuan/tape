<template>
  <div class="btn-wrapper">
    <div class="text" :style="{ color: publicTextColor }">
      {{ publicStatus }}
    </div>
    <input type="checkbox" id="public" v-model="isPublic" />
    <label for="public">
      <div class="label-btn"></div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPublic: this.isPublicProp
    };
  },
  props: {
    isPublicProp: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  computed: {
    publicStatus() {
      return this.isPublic ? "公开" : "未公开";
    },
    publicTextColor() {
      return this.isPublic ? "blue" : "red";
    }
  },
  created() {
    console.log(this.isPublicProp);
  },
  mounted() {
    console.log(this.isPublicProp);
  }
};
</script>

<style scoped>
.btn-wrapper {
  width: 80px;
  max-width: 30vw;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.btn-wrapper .text {
  font-family: "宋体";
  font-size: 14px;
}
.label-btn {
  width: 54px;
  height: 30px;
  border-radius: 25px;
  background-color: #e9e9e9;
  position: relative;
}
.label-btn::after {
  content: "";
  width: 24px;
  height: 24px;
  border-radius: 12px;
  position: absolute;
  background-color: #ffffff;
  top: 50%;
  transform: translate(-24px, -50%);
}
.btn-wrapper input {
  display: none;
}
.btn-wrapper input:checked + label .label-btn {
  background-color: #30d158;
}
.btn-wrapper input:checked + label .label-btn::after {
  transform: translate(0px, -50%);
}
</style>
