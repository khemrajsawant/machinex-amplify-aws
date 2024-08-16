import { jsx as _jsx } from "react/jsx-runtime";
import Box from "@mui/material/Box";
// import { DataGrid } from "@mui/x-data-grid";
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DataGridTest from "./DataGridTest";
function DataGridCustomComponent(props) {
    // const dispatch = useDispatch();
    // // const [clickedRow, setClickedRow] = React.useState();
    // const onButtonClick = (e, row) => {
    //   e.stopPropagation();
    //   ////console.log("delete", row.id);
    //   // setClickedRow(row);
    //   dispatch(deleteTutorial(row.id));
    // };
    try {
        const test1 = props.columns.filter((c) => c.showcolumnInTable !== false);
    }
    catch {
        //console.log("test_1","something went wrong")
    }
    try {
        const test2 = props.data.filter((c) => c.isDeleted !== true);
        ;
    }
    catch {
        //console.log("test_2","something went wrong")
    }
    const columns = props.columns.filter((c) => c.showcolumnInTable !== false);
    // const rows = props.data.filter((c:any) => c.isDeleted !==true);;
    ////console.log(rows)
    const formName = props.formName;
    const isMaster = props.isMaster;
    const pathname = props.pathname;
    return (_jsx(Box, { sx: [{ height: "100%", width: "100%" }, { marginTop: "1rem" },
            { borderRadius: "15px" },
            { padding: '1rem' },
            { border: 1 },
            { marginBottom: '0.5rem' },
            { marginTop: '0.5rem' },
            // { borderRight: 1 },
            { borderColor: "white" },
            //  { background: "#f3e5f5" },
            { transition: "background 1s, color 1s" },
            { "&:hover": { backgroundColor: "white", borderRadius: "15px" } },
        ], children: _jsx(DataGridTest, { columns: columns, rows: props.data, formName: formName, isMaster: isMaster, pathname: pathname, onChange: props.onChange, isLoading: props.isLoading }) })
    // clickedRow: {clickedRow ? `${clickedRow.id}` : null}
    );
}
export default DataGridCustomComponent;
