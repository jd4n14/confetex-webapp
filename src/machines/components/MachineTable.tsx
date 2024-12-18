import { Table } from "@mantine/core";
import { UserAvatar } from "../../core/components/UserAvatar";
import { ChipButton } from "../../core/components";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Machine } from "../types";
interface MachineTableProps {
  machines: Machine[] | undefined;
}
export const MachineTable = (props: MachineTableProps) => {
  return (
    <Table verticalSpacing="xs" horizontalSpacing="sm" highlightOnHover>
      <thead>
        <tr>
          <th>Identifier</th>
          <th>Model</th>
          <th>Brand</th>
          <th>Operator</th>
          <th>Go</th>
        </tr>
      </thead>
      <tbody>
        {props.machines?.map((machine) => (
          <tr key={machine.id}>
            <td>{machine.identifier}</td>
            <td>{machine.model}</td>
            <td>{machine.brand}</td>
            <td>
              {machine.operator && (
                <UserAvatar
                  label={machine.operator}
                  color="blue"
                  to={`/users/${machine.operator}`}
                />
              )}
            </td>
            <td>
              <ChipButton
                text="Ver"
                color="blue"
                to={`/machines/${machine.id}`}
                rightIcon={<ChevronRightIcon />}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
