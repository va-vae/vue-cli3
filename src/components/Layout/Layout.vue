<template>
  <div>
    <ul>
      <li>
        <router-link v-for="(item, index) in menuList" :key="index">{{item.children}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getStore } from "@/utils/store";
  import website from "@/config/website";

  export default {
    name: "Layout",
    data() {
      return  {

      }
    },
    computed: {
      menuList() {
        const data = getStore({name: website.key + 'menuList'} )
        return data.children
      }
    }
  }
</script>

<style scoped>

</style>
