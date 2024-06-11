export default function partiallyApply(Component, partialProps) {
  return function (props) {
    return <Component {...partialProps} {...props} />;
  };
}

export function Button({ size, color, text, ...props }) {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "16px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
}

export const PartiallyApplyDangerButton = partiallyApply(Button, {
  color: "red",
});
export const PartiallyApplyBigSuccessButton = partiallyApply(Button, {
  size: "large",
  color: "green",
});
