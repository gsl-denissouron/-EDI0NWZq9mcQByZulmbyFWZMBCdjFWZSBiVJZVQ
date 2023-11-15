import { Paginator } from "@react-app/components/common/Paginator";
import { UIButton } from "@react-app/components/ui/Button";
import { jokeHooks } from "@react-app/data/jokes";
import { useModal } from "@react-app/hooks/useModal";
import { useTranslate } from "@react-app/hooks/useTranslate";

import { CreateJoke } from "./Modals/CreateJoke";

interface JokeHeaderProps {
  pageIndex: number;
  pageSize: number;
  totalElements: number;
  nextPage: () => void;
  previousPage: () => void;
  filterJokesBy: (value: string) => void;
}

export function JokeHeader({
  pageIndex,
  pageSize,
  totalElements,
  nextPage,
  previousPage,
  filterJokesBy,
}: JokeHeaderProps) {
  const { t } = useTranslate();
  const { openModal, closeModal } = useModal();
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
        <span>
          <label>{t("views.jokes.action.filter") + " :"}</label>
          <input
            type="text"
            onChange={(e) => {
              filterJokesBy(e.target.value);
            }}
          />
        </span>
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
          {t("views.jokes.action.addItem")}
        </UIButton>
      </div>
    </div>
  );
}
