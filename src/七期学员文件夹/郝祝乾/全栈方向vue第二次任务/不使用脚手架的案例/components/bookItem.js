import { addMoneySymbol, addBookSymbol } from "../hooks/index.js";

export default {
  template: `
  <tr :class="{active:current == index}"
  @click.stop="select(index)">
  <td>{{ index + 1 }}</td>
  <td>{{ addBookSymbol(item.name) }}</td>
  <td>{{ item.date }}</td>
  <td>{{ addMoneySymbol(item.price) }}</td>
  <td>
      <button :disabled="item.count <= 1" @click.stop="del(index)">-</button>
      {{ item.count }}
      <button @click.stop="add(index)">+</button>
  </td>
  <td>
      <button @click.stop="remove(index)">移除</button>
  </td>
</tr>`,
  props: {
    index: Number,
    item: Object,
    current: Number,
  },
  methods: {
    del() {
      this.$emit("del", this.index);
    },
    add() {
      this.$emit("add", this.index);
    },
    remove() {
      this.$emit("remove", this.index);
    },
    select() {
      this.$emit("select", this.index);
    },
    addBookSymbol,
    addMoneySymbol,
  },
  emits: ["del", "add", "remove", "select"],
};
