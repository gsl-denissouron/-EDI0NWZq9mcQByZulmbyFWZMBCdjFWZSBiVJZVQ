import { Paginator } from "@react-app/components/common/Paginator";
import { useCreateJoke } from "@react-app/hooks/useJokes/createJoke";
import { useGetJokes } from "@react-app/hooks/useJokes/getJokes";
import { useModal } from "@react-app/hooks/useModal";

import { CreateJoke } from "./Modals/CreateJoke";

export function JokeHeader() {
  const { openModal, closeModal } = useModal();
  const { pageIndex, pageSize, totalElements, nextPage, previousPage } =
    useGetJokes();
  const { createJoke } = useCreateJoke();

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
