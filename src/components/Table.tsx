import { superClassNames } from "@/utils/superClassname";
import Title from "./Title";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    className?: string;
    data: Array<{
        header: string;
        rows: string[];
    }>
}

export default function Table(props: TableProps) {
    return (
        <div className="my-20" hidden={props.hidden}>
            <Title size="h3">Resultados</Title>

            <table className={superClassNames(props.className, 'table-auto w-full')}>
                <thead className="bg-[#111111] text-white">
                    <tr>
                        {
                            props.data.map((item, index) => (
                                <th className="px-4 py-2 font-medium" key={index}>
                                    {item.header}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className="text-[#1A1A1A] bg-[#F2F2F2]">
                    <tr className="hover:bg-[#E5E5E5]">
                        {
                            props.data.map((item, index) => (
                                <td className="px-4 py-2 text-center hover:bg-[#DDDDDD]" key={index}>
                                    {item.rows[0]}
                                </td>
                            ))
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

