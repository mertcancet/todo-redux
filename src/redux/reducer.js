import I from "immutable";

const initialStore = I.fromJS({
  columnList: [{ id: 1, text: "" }],
  cardText: "",
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
      return console.log("card eklendi");
    default:
      return store;
  }
}
