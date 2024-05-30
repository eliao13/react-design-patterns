import SmallPersonListItem from "./people/SmallPersonListItem";

export default function RegularList({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [resourceName]: item }} />
      ))}
    </>
  );
}
