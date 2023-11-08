import { Paginator } from "@react-app/components/common/Paginator";
import { UIButton } from "@react-app/components/ui/Button";
import { jokeHooks } from "@react-app/hooks/jokes";
import { useModal } from "@react-app/hooks/useModal";

import { CreateJoke } from "./Modals/CreateJoke";

export function JokeHeader() {
  const { openModal, closeModal } = useModal();
  const { pageIndex, pageSize, totalElements, nextPage, previousPage } =
    jokeHooks.useGetJokes();
  const { createJoke } = jokeHooks.useCreateJoke();

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
        nextPageComponent={UIButton}
        previousPageComponent={UIButton}
        onNext={() => {
          nextPage();
        }}
        onPrevious={() => {
          previousPage();
        }}
      />
      <div>
        <UIButton
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
          {"Add item"}
        </UIButton>
      </div>
    </div>
  );
}
