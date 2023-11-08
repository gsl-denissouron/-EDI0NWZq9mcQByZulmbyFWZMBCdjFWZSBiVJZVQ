import { Joke } from "@domain/entities/Joke";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortCell,
} from "@react-app/components/common/Table";
import { ArrowDown } from "@react-app/components/ui/ArrowDown";
import { UIButton } from "@react-app/components/ui/Button";
import {
  UITable,
  UITableCell,
  UITableHead,
  UITableRow,
} from "@react-app/components/ui/Table";
import { jokeHooks } from "@react-app/hooks/jokes";
import { useModal } from "@react-app/hooks/useModal";
import { useTranslate } from "@react-app/hooks/useTranslate";

import { DeleteJoke } from "./Modals/DeleteJoke";
import { EditJoke } from "./Modals/EditJoke";

export function JokeTable() {
  const { t } = useTranslate();
  const { openModal, closeModal } = useModal();
  const {
    jokes: rows,
    getActiveSortFor,
    sortJokesBy,
  } = jokeHooks.useGetJokes();
  const { deleteJoke } = jokeHooks.useDeleteJoke();
  const { editJoke } = jokeHooks.useEditJoke();

  const columns = [
    "id",
    "type",
    "setup",
    "punchline",
  ] as const satisfies readonly (keyof Joke)[];

  return (
    <Table as={UITable}>
      <TableHead as={UITableHead}>
        <TableRow as={UITableRow}>
          {columns.map((column) => (
            <TableCell
              key={column}
              as={UITableCell}
              onClick={() => {
                sortJokesBy(column);
              }}
            >
              <TableSortCell
                sort={getActiveSortFor(column)}
                iconComponent={ArrowDown}
              >
                {column.toLocaleUpperCase()}
              </TableSortCell>
            </TableCell>
          ))}
          <TableCell>{"ACTIONS"}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody as={TableBody}>
        {rows.map((row, index) => (
          <TableRow key={row.id} as={UITableRow}>
            {columns.map((column) => (
              <TableCell key={column} as={UITableCell}>
                {row[column]}
              </TableCell>
            ))}
            <TableCell key={"actions"} as={UITableCell}>
              <UIButton
                onClick={() => {
                  openModal(
                    <EditJoke
                      joke={row}
                      onCancel={() => {
                        closeModal();
                      }}
                      onEdit={(joke) => {
                        editJoke(joke)
                          .catch(() => {
                            console.log("cannot edit joke");
                          })
                          .finally(() => {
                            closeModal();
                          });
                      }}
                    />
                  );
                }}
              >
                {t("views.jokes.action.editItem")}
              </UIButton>
              <UIButton
                onClick={() => {
                  openModal(
                    <DeleteJoke
                      onCancel={() => {
                        closeModal();
                      }}
                      onDelete={() => {
                        deleteJoke(index)
                          .catch(() => {
                            console.log("cannot delete joke");
                          })
                          .finally(() => {
                            closeModal();
                          });
                      }}
                    />
                  );
                }}
              >
                {t("views.jokes.action.removeItem")}
              </UIButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
