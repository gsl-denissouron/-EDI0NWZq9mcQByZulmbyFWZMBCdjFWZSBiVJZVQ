import { Joke } from "@domain/entities/Joke";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortCell,
} from "@react-app/components/common/Table";
import { ArrowDown } from "@react-app/components/ui";
import { UITableCell } from "@react-app/components/ui/Table/UICell";
import { UITableHead } from "@react-app/components/ui/Table/UIHead";
import { UITableRow } from "@react-app/components/ui/Table/UIRow";
import { UITable } from "@react-app/components/ui/Table/UITable";
import { useDeleteJoke } from "@react-app/hooks/useJokes/deleteJoke";
import { useEditJoke } from "@react-app/hooks/useJokes/editJoke";
import { useGetJokes } from "@react-app/hooks/useJokes/getJokes";
import { useModal } from "@react-app/hooks/useModal";

import { DeleteJoke } from "./Modals/DeleteJoke";
import { EditJoke } from "./Modals/EditJoke";

export function JokeTable() {
  const { openModal, closeModal } = useModal();
  const { jokes: rows, getActiveSortFor, sortJokesBy } = useGetJokes();
  const { deleteJoke } = useDeleteJoke();
  const { editJoke } = useEditJoke();

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
              <button
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
                {"edit item"}
              </button>
              <button
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
                {"remove item"}
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
