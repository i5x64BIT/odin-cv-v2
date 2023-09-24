import ListItem from "./ListItem";

export default function List({ type, items }) {
  const listItems = [];
  if (typeof items === Array) {
    items.forEach((i) =>
      listItems.push(
        <ListItem
          key={`${type}-item-${listItems.length - 1}`}
          type={type}
          content={i}
        />
      )
    );
  } else {
    for (let i in items) {
      listItems.push(
        <ListItem
          key={`${type}-item-${listItems.length - 1}`}
          type={type}
          content={items[i]}
        />
      );
    }
  }
  return <ul className={`list ${type}-list`}>{...listItems}</ul>;
}
