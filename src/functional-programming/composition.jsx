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

export function DangerButton(props) {
  return <Button color="red" {...props} />;
}

export function BigSuccessButton(props) {
  return <Button size="large" color="green" {...props} />;
}
