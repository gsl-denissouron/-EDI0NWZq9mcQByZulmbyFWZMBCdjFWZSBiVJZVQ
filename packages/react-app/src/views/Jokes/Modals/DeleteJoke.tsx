import { UIButton } from "@react-app/components/ui/Button";
import { useTranslate } from "@react-app/hooks/useTranslate";

export function DeleteJoke({
  onCancel,
  onDelete,
}: {
  onCancel: () => void;
  onDelete: () => void;
}) {
  const { t } = useTranslate();

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
        <p>{t("views.jokes.modals.deleteWarning")}</p>
      </div>
      <div css={{ display: "flex", justifyContent: "flex-end" }}>
        <UIButton
          variant="outlined"
          onClick={() => {
            onCancel();
          }}
        >
          {t("views.jokes.modals.cancel")}
        </UIButton>
        <UIButton
          onClick={() => {
            onDelete();
          }}
        >
          {t("views.jokes.modals.delete")}
        </UIButton>
      </div>
    </>
  );
}
