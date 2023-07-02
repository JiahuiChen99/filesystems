import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "~/components/UI/table/table.css?inline";
import { superblockDataProps } from "~/routes/ext2/superblock/superblockData";

export const EXT2Table = component$(
  ({
    data,
    clickCallback,
  }: {
    data: superblockDataProps[];
    clickCallback: CallableFunction;
  }) => {
    useStylesScoped$(styles);
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
              <td>
                <a
                  href={`#${data[index].id}`}
                  onclick$={() => clickCallback(index)}
                >
                  {d.description}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
);
