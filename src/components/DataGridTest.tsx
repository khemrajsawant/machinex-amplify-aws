import React from "react";

import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import LinkIcon from "@mui/icons-material/Link";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { title } from "../utils/cardsMetaData";
import { RootState,useAppDispatch } from "../redux/tableStateGenForm/store";

import {
  GridRowModes,
  DataGrid,
  GridToolbar,
  GridToolbarQuickFilter,
  // GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomId,
//   randomArrayItem,
// } from "@mui/x-data-grid-generator";

import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import {
  deleteMaster,
  updateMaster,
  getSelectedItem,
} from "../redux/tableStateGenForm/master/masterReducer";
import { Checkbox } from "@mui/material";

function EditToolbar(props:any) {
  const { setRows, setRowModesModel } = props;

  // const handleClick = () => {
  //   const id = randomId();
  //   setRows((oldRows) => [...oldRows, { id, name: "", age: "", isNew: true }]);

  //   dispatch(createMaster(data,formName));

  //   setRowModesModel((oldModel) => ({
  //     ...oldModel,
  //     [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
  //   }));
  // };

  return (
    <Stack direction="row">
      {/* <GridToolbarContainer>
        <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
          Add record
        </Button>
      </GridToolbarContainer> */}
      <GridToolbar />
      <GridToolbarQuickFilter sx={{ marginLeft: "15rem" }} />
    </Stack>
  );
}

export default function DataGridTest(props:any) {
  const initialRows:any = []

  const [rows, setRows] = React.useState(initialRows);
  const dispatch = useAppDispatch();

  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params:any, event:any) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const role = useSelector((state:RootState) =>
  state.master.AUTH_DATA.ROUTES
    ? state.master.AUTH_DATA.ROUTES.label[1].ROLE
    : 'Guest'
);
const dateColumns = useSelector((state: RootState) => state.master.APP_DATA[props.formName].metaData.filter((c:any) => c.date === true)).map((column) => column.name);

  const handleEditClick = (id:any) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id:any) => () => {
    ////console.log(id);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id:any) => () => {
    // //console.log(id);
    dispatch(deleteMaster({payload:{ id: id, isDeleted: true }, headerName:props.formName}));
    props.onChange();
  };

  const handleCancelClick = (id:any) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row:any) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row:any) => row.id !== id));
    }
  };

  const formatDate = (date:any) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const processRowUpdate = (newRow:any) => {
    const updatedRow = { ...newRow, isNew: false, isModified: true };
        // Parse date field if type is 'date'
        props.columns.forEach(column => {
          if (dateColumns.includes(column.field)) {
              updatedRow[column.field] = formatDate(updatedRow[column.field]);
          }
      });
    props.onChange();
    setRows(rows.map((row:any) => (row.id === newRow.id ? updatedRow : row)));

    console.log("updatedRow", updatedRow);
    dispatch(updateMaster({payload:updatedRow, headerName:props.formName}));
    console.log("updatedRow", updatedRow);
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel:any) => {
    setRowModesModel(newRowModesModel);
  };
  const [dataClicked, setDataClicked] = React.useState({});

  const isMaster = props.isMaster;
  const pathname = props.pathname;

  const onRowClickHandler = (clickedRow:any, e) => {
    e.defaultMuiPrevented = true;
    //console.log("isMaster", isMaster);
    if (isMaster) {
      setDataClicked(clickedRow);
      dispatch(getSelectedItem(clickedRow.row));
    }
  };
  // let columns = {EARNING_DETAILS.columnsData};

  function generatePath() {
    // let string = dataClicked.row ? dataClicked.row.Drawing_Number : "test";
    // //console.log(`${pathname}/item`)
    return `${pathname}/item`;
  }
  let columns = props.columns;

  console.log("props.columns",props.columns)

  props.formName == "DAILY_WORK_REPORT" &&

    columns.forEach((col:any) => {
      col.editable = false
      if(col.field == 'Approval' && role=='Admin'){
        col.type='boolean'
        col.editable = true
      }else if(col.field == 'Approval' || col.field == 'Worker_No'){
       if (col.field == 'Approval'){
          col.type='boolean'
        }

        col.editable = false
      }else{
        col.editable = true  
      }
  });


  props.formName == "BILL_OF_PROCESS" &&

  columns.forEach((col:any) => {
    col.editable = true
    if(col.field == 'Is_Scrap_Applicable'){
      col.type='boolean'
    }else{
      col.editable = true  
    }
});



columns.forEach((col:any) => {
  col.editable = true

  if(dateColumns.includes(col.field)){
    col.type='date'
    col.valueGetter = (params:any) => {
      // Your custom transformation logic for the "Date" column
      // For example, if the value is a string, convert it to a Date object
      return new Date(params.value);
    }
  }
});

  // //console.log("test_rows", dataClicked);

  columns = [
    ...columns,
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      editable: false,
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        const indexToIdMapping = {};
        props.rows.map((item, index) => {
          let temp = index + 1;
          indexToIdMapping[temp] = item.ID;
        });
        //console.log("testing", id, indexToIdMapping[id]);
        let selected_row = props.rows.filter(
          (c:any) => c.ID == indexToIdMapping[id]
        );
        console.log("selected_row", selected_row);
        if (selected_row.length > 0) {
          //console.log("selected rows > 0");
          let isServer = selected_row[0].isServer;
          let isModified = selected_row[0].isModified;
          var isDeleted = selected_row[0].isDeleted;
          var isDisabled = isDeleted;
          var linkStyles = {
            textDecoration: "none",
            color: isDeleted
              ? "yellow"
              : !isServer || isModified
              ? "gray"
              : "green",
            cursor: isDeleted
              ? "not-allowed"
              : !isServer
              ? "not-allowed"
              : "pointer",
            pointerEvents: isDeleted ? "none" : !isServer || isModified ? "none" : "auto",
          };
        } else {
          var isDisabled:any = false;
          var linkStyles = {
            textDecoration: "none",
            color: "red",
            cursor: "not-allowed",
            pointerEvents: "none",
          };
        }

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
            disabled={isDisabled}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
            disabled={isDisabled}
          />,
          <>
            {isMaster === true && props.rows.length > 0 && (
              <>
                {/* {//console.log("props.rows", id, props.rows[id - 1])} */}
                <Link
                  // to={props.rows[id-1].isServer?generatePath(id):alert("save before")}
                        // @ts-ignore
                  to={generatePath(id)}
                  relative="path"
                        // @ts-ignore
                  style={linkStyles} // to disable the link
                >
                  <LinkIcon />
                </Link>
              </>
            )}
          </>,
        ];
      },
    },
  ];
  //console.log("props.rows length", props.rows.length, props.rows);
  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        rows={props.rows}
        columns={columns}
        density="compact"
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        onRowClick={onRowClickHandler}
        loading={
          props.isLoading === true
            ? true:false
        }
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
                // @ts-ignore
          toolbar1: {
            showQuickFilter: true,
          },
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}
2;
