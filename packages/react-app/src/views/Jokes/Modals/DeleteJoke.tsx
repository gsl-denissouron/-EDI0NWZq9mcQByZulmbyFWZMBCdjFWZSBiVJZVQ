export function DeleteJoke({
  onCancel,
  onDelete,
}: {
  onCancel: () => void;
  onDelete: () => void;
}) {
  return (
    <>
      <div css={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          css={{
            backgroundColor: "white",
            color: "#009879",
            border: "1px solid #009879",
          }}
          onClick={() => {
            onCancel();
          }}
        >
          {"X"}
        </button>
      </div>
      <div>
        <p>{"Are you sure you want to delete this joke ?"}</p>
      </div>
      <div css={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          css={{
            backgroundColor: "white",
            color: "#009879",
            border: "1px solid #009879",
          }}
          onClick={() => {
            onCancel();
          }}
        >
          {"Cancel"}
        </button>
        <button
          onClick={() => {
            onDelete();
          }}
        >
          {"Delete a joke"}
        </button>
      </div>
    </>
  );
}
