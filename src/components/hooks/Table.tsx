import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Table = ({data}) => {

    const columns = Object.keys(data[0]).map((key) => (
        <Column key={key} field={key} header={key} sortable/>
    ));

    return (
        <div>
            <DataTable value={data} tableStyle={{ minWidth: '10rem' }} className="w-80">
                {columns}
            </DataTable>
        </div>
    );
};

export default Table;
