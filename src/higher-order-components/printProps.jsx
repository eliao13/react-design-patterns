export default function printProps(Component) {
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
}
