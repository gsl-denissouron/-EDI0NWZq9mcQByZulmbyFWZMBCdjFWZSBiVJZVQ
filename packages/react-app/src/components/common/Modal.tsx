import { ComponentPropsWithoutRef, ElementType } from "react";

export function Modal({
  onClose,
  as,
  backdrop,
  ...props
}: ComponentPropsWithoutRef<"div"> & {
  as?: ElementType;
  backdrop?: ElementType;
  onClose: () => void;
}) {
  const Component = as ?? "div";
  const Backdrop = backdrop ?? "div";
  return (
    <>
      <Backdrop
        onClick={() => {
          onClose();
        }}
      />
      <Component {...props} />
    </>
  );
}
