import { TileData } from "../../core/components";
import {
  MdAccessTime,
  MdOutlineCallToAction,
  MdOutlineConfirmationNumber,
  MdPerson,
} from "react-icons/md";
import { useQuery } from "react-query";
import { getMachineDetail } from "../api";
import { LoadingOverlay } from "@mantine/core";

interface MachineInfoProps {
  id: number;
}

export const MachineInfo = (props: MachineInfoProps) => {
  const { data, error, isFetching } = useQuery(`machine${props.id}`, () =>
    getMachineDetail(props.id)
  );

  if (isFetching) return <LoadingOverlay visible={isFetching} />;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      <TileData
        color="blue"
        text={data!.identifier}
        icon={<MdOutlineConfirmationNumber />}
      />
      <TileData
        color="cyan"
        text={data!.model}
        icon={<MdOutlineCallToAction />}
      />
      <TileData
        color="grape"
        text={data!.brand}
        icon={<MdOutlineCallToAction />}
      />
      <TileData color="green" text={data!.operator} icon={<MdPerson />} />
      <TileData color="indigo" text="Requests" icon={<MdAccessTime />} />
      <TileData color="lime" text="Repairs" icon={<MdAccessTime />} />
      <TileData
        color="orange"
        text="Average repair time"
        icon={<MdAccessTime />}
      />
    </div>
  );
};
