import { cloneElement } from "react";

const List = ({
  indexAsKey,
  itemAsKey,
  itemCallback,
  keyProp = "id",
  list,
}) => (
  <>
    {list.map((item, index) => {
      if (!indexAsKey && !itemAsKey && !Object.hasOwn(item, keyProp))
        console.error("No unique id found for item", item);

      const key = itemAsKey ? item : item[keyProp] ?? index;
      return cloneElement(itemCallback(item), { key });
    })}
  </>
);

export default List;
