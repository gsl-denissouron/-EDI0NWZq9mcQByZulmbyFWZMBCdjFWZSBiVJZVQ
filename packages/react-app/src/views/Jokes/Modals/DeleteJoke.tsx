import { UIButton } from "@react-app/components/ui/Button";

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
        <UIButton
          variant="text"
          onClick={() => {
            onCancel();
          }}
        >
          {"X"}
        </UIButton>
      </div>
      <div>
        <p>{"Are you sure you want to delete this joke ?"}</p>
      </div>
      <div css={{ display: "flex", justifyContent: "flex-end" }}>
        <UIButton
          variant="outlined"
          onClick={() => {
            onCancel();
          }}
        >
          {"Cancel"}
        </UIButton>
        <UIButton
          onClick={() => {
            onDelete();
          }}
        >
          {"Delete a joke"}
        </UIButton>
      </div>
    </>
  );
}
