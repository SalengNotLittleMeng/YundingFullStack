{
  /* <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>; */
}
const app = Vue.createApp({
  template: `
            <input v-model.trim = "message" placeholder="请输入一个单词" />

            <h4>你要输入的单词是{{ message }}</h4>
            
            <button @click = "add" @keyup.enter="add">添加</button>
            <button @click = "delete_vue" @keyup.delete="delete_vue" >删除</button>

            <div :class="warn ? 'turnRed' :'' ">

            <h2  v-if="warn" class='turnRed'>别加了，受不鸟了</h2>

            <h2>单词列表</h2>

            <ul>
                <li v-for = "item in list">{{item}}</li>
            </ul>
            </div>
            `,
  data: function () {
    return {
      message: "",
      list: [],
      count: 0,
      warn: false,
    };
  },
  methods: {
    add: function () {
      this.list.push(this.message);
      this.count++;
      if (this.count > 5) {
        this.warn = true;
      }
    },
    delete_vue: function () {
      this.list.pop();
      this.count--;
      if (this.count <= 5) {
        this.warn = false;
      }
    },
  },
});
app.mount("#app");
