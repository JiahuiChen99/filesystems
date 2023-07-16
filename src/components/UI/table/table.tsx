import {
  type PropFunction,
  component$,
  useStylesScoped$,
  useResource$,
  $,
  Resource,
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

    const isStruct = $((d: any): boolean => {
      return typeof d.offset === "number" && typeof d.size === "number";
    });

    // Probe data first object and determine Table headers
    const tableHeaders = useResource$(async () => {
      if (await isStruct(data[0])) {
        return ["Offset (bytes)", "Size (bytes)", "Description"];
      } else {
        return ["Constant Name", "Value", "Description"];
      }
    });

    const tableSkeleton = (
      <div style={{ backgroundColor: "lightgrey", width: "35%" }}>Loading</div>
    );

    return (
      <Resource
        value={tableHeaders}
        onPending={() => tableSkeleton}
        onResolved={(headers) => (
          <table>
            <thead>
              <tr>
                {headers.map((th: string) => (
                  <th>{th}</th>
                ))}
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
        )}
      />
    );
  }
);
