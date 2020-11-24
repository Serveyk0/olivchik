<template>
  <div>
    <label for="name">Название</label>
    <input name="name" type="text" v-model="name" />
    <label for="href">Ссылка</label>
    <input name="href" type="text" v-model="href" />
    <button v-on:click="newMenu">Добавить</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: "catalog",
  head: {
    title: "Добавить категорию",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Добавить категорию",
      },
    ],
  },
  data: () => ({
    name: "",
    href: "",
  }),
  methods: {
    newMenu() {
      let form = {
        name: this.name,
        href: this.href,
      };
      axios.post(`http://localhost:3001/api/category`, form);
      this.name = "",
      this.href = ""
    },
  },
};
</script>
