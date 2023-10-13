import { Paginator } from "@react-app/components/common/Paginator";
import { useJokes } from "@react-app/hooks/useJokes";
import { useModal } from "@react-app/hooks/useModal";

import { CreateJoke } from "./Modals/CreateJoke";

export function Header() {
  const { openModal, closeModal } = useModal();
  const {
    pageIndex,
    pageSize,
    totalElements,
    nextPage,
    previousPage,
    createJoke,
  } = useJokes();

  return (
    <div
      css={{
        margin: "25px 0",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Paginator
        pageIndex={pageIndex}
        pageSize={pageSize}
        totalElements={totalElements}
        onNext={() => {
          nextPage();
        }}
        onPrevious={() => {
          previousPage();
        }}
      />
      <div>
        <button
          onClick={() => {
            openModal(
              <CreateJoke
                onCancel={() => {
                  closeModal();
                }}
                onCreate={(joke) => {
                  createJoke(joke)
                    .catch(() => {
                      console.log("cannot create joke");
                    })
                    .finally(() => {
                      closeModal();
                    });
                }}
              />
            );
          }}
        >
          {"add item"}
        </button>
      </div>
    </div>
  );
}
