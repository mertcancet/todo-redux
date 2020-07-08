import I from "immutable";

const initialStore = I.fromJS({
  columnList: [{ id: 1, text: "" }],
  cardList: [{ id: 1, cardText: "", cardColumn: "" }],
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

    default:
      return store;
  }
}
