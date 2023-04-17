export default {
  template: `
  <tr>
    <td>{{index+1}}</td>
    <td><input type="text" v-model="newbook.name"></td>
    <td><input type="date" v-model="newbook.date"></td>
    <td><input type="number" v-model="newbook.price"></td>
    <td>
        <button :disabled="newbook.count <= 1" @click.stop="del()">-</button>
        {{ newbook.count }}
        <button @click.stop="add()">+</button>
    </td>
    <td><button @click="addBook">确认</button></td>
  </tr>
`,
  props: {
    index: Number,
  },
  data() {
    return {
      newbook: { name: "", date: "", price: 0, count: 1 },
    };
  },
  emits: ["add-book"],
  methods: {
    addBook() {
      if (this.newbook.name !== "") {
        if (this.newbook.date !== "") {
          if (this.newbook.price > 0) {
            console.log(this.index);
            this.$emit("addBook", this.newbook);
          } else {
            alert("价格应当是正数");
            return;
          }
        } else {
          alert("出版日期不能为空");
        }
      } else {
        alert("书名不能为空");
        return;
      }
      this.reset();
    },
    reset() {
      this.newbook = { name: "", date: "", price: 0, count: 1 };
    },
    del() {
      this.newbook.count--;
    },
    add() {
      this.newbook.count++;
    },
  },
};
