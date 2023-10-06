export function DeleteJoke({ onDelete }: { onDelete: () => void }) {
  return (
    <>
      <button
        onClick={() => {
          onDelete();
        }}
      >
        {"Delete a joke"}
      </button>
    </>
  );
}
