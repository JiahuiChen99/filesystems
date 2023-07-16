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
    data: EXT2.Struct[] | EXT2.ConstValueDesc[];
    clickCallback$?: PropFunction<(index: number) => void>;
  }) => {
    useStylesScoped$(styles);
    const isStruct = $((d: any): d is EXT2.Struct => {
      return typeof d.offset === "number" && typeof d.size === "number";
    });

    const generateNoClikcDescription = $((description: string) => (
      <span>{description}</span>
    ));

    const generatePropDescription = $(
      async (data: EXT2.Struct | EXT2.ConstValueDesc, index: number) => {
        if (
          (await isStruct(data)) &&
          (data as EXT2.Struct).info !== undefined
        ) {
          return (
            <a href={`#${data.id}`} onclick$={() => clickCallback$!(index)}>
              {data.description}
            </a>
          );
        } else {
          return generateNoClikcDescription(data.description);
        }
      }
    );

    // Probe data first object and determine Table headers
    const tableHeaders = useResource$(async () => {
      if (await isStruct(data[0])) {
        return ["Offset (bytes)", "Size (bytes)", "Description"];
      } else {
        return ["Constant Name", "Value", "Description"];
      }
    });

    const tableColKeys = useResource$(async () => {
      if (await isStruct(data[0])) {
        return ["offset", "size", "description"];
      } else {
        return ["name", "value", "description"];
      }
    });

    const tableSkeleton = (
      <div
        style={{
          display: "flex",
          backgroundColor: "lightgrey",
          width: "35%",
          minHeight: "30rem",
          justifyContent: "center",
        }}
      >
        Loading...
      </div>
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
                  <Resource
                    value={tableColKeys}
                    onResolved={(colKeys) => (
                      <>
                        {colKeys.map((key) => {
                          if (key === "description") {
                            return (
                              <td key={key}>
                                {generatePropDescription(d, index)}
                              </td>
                            );
                          }
                          return (
                            <td>
                              {
                                d[
                                  key as keyof (
                                    | EXT2.Struct
                                    | EXT2.ConstValueDesc
                                  )
                                ]
                              }
                            </td>
                          );
                        })}
                      </>
                    )}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        )}
      />
    );
  }
);
