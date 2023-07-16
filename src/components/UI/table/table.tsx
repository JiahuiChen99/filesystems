import {
  type PropFunction,
  component$,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "~/components/UI/table/table.css?inline";
import { EXT2 } from "~/typings/ext2";

export const EXT2Table = component$(
  ({
    data,
    clickCallback$,
  }: {
    data: EXT2.Struct[];
    clickCallback$: PropFunction<(index: number) => void>;
  }) => {
    useStylesScoped$(styles);

    const generatePropDescription = (data: EXT2.Struct, index: number) => {
      return data.info === undefined ? (
        <span>{data.description}</span>
      ) : (
        <a href={`#${data.id}`} onclick$={() => clickCallback$(index)}>
          {data.description}
        </a>
      );
    };

    return (
      <table>
        <thead>
          <tr>
            <th>Offset (bytes)</th>
            <th>Size (bytes)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={d.id}>
              <td>{d.offset}</td>
              <td>{d.size}</td>
              <td>{generatePropDescription(d, index)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
);
