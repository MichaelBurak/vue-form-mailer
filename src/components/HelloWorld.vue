<template>
  <div>
    <ol>
      <li v-for="(notification, idx) in notifications" :key="idx">
        {{notification.name}}
      </li>
      </ol>
</div>
</template>

<script>
import { db } from "../main";
export default {
  name: "HelloWorld",
  data() {
    return {
      notifications: [],
      name: ""
    };
  },
  firestore() {
    return {
      notifications: db.collection("notifications")
    };
  },
  methods: {
    addNotification(name) {
      const date = new Date();
      db.collection("notifications").add({ name, date });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
