import I, { update } from "immutable";
import { act } from "@testing-library/react";

const initialStore = I.fromJS({
  columnList: [{ id: 0, text: "pazartesi" }],
  cardList: [{ id: 0, cardText: "", cardColumn: "" }],
});

export default function reducer(store = initialStore, action) {
  const data = I.fromJS(action.data);

  switch (action.type) {
    case "ADD_COLUMN":
      return store.set(
        "columnList",
        store.get("columnList", I.List()).unshift(data)
      );

    case "ADD_CARD":
      return store.set(
        "cardList",
        store.get("cardList", I.List()).unshift(data)
      );
    case "DELETE_TODO":
      return store.set(
        "cardList",
        store.get("cardList", I.List()).delete(action.data)
      );
    case "DELETE_COLUMN":
      return store.set(
        "columnList",
        store.get("columnList", I.List()).delete(action.data)
      );
    case "UPDATE_COLUMN":
      console.log("action", typeof action.data.id);
      const newColumnList = store.get("columnList").map((column) => {
        if (column.get("id") === action.data.id) {
          console.log("action data text", action.data.text);
          column.text = action.data.text;
        }
        console.log("column text", column.text);
        return column;
      });
      console.log("new column list", newColumnList.toJS());
      return store.set("columnList", newColumnList);
    default:
      return store;
  }
}
