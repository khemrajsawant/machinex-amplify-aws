import React from "react";

import * as React from "react";
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
} from "../redux/tableStateGenForm/master/masterAction";
import { Checkbox } from "@mui/material";

function EditToolbar(props) {
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

export default function DataGridTest(props) {
  const initialRows = [];

  const [rows, setRows] = React.useState(initialRows);
  const dispatch = useDispatch();

  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const role = useSelector((state) =>
  state.master.AUTH_DATA.ROUTES
    ? state.master.AUTH_DATA.ROUTES.label[1].ROLE
    : 'Guest'
);
const dateColumns = useSelector((state) => state.master.APP_DATA[props.formName].metaData.filter((c) => c.date === true)).map((column) => column.name);

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    ////console.log(id);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    // //console.log(id);
    dispatch(deleteMaster({ id: id, isDeleted: true }, props.formName));
    props.onChange();
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false, isModified: true };
        // Parse date field if type is 'date'
        props.columns.forEach(column => {
          if (dateColumns.includes(column.field)) {
              updatedRow[column.field] = formatDate(updatedRow[column.field]);
          }
      });
    props.onChange();
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));

    console.log("updatedRow", updatedRow);
    dispatch(updateMaster(updatedRow, props.formName));
    console.log("updatedRow", updatedRow);
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const [dataClicked, setDataClicked] = React.useState({});

  const isMaster = props.isMaster;
  const pathname = props.pathname;

  const onRowClickHandler = (clickedRow, e) => {
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

    columns.forEach((col) => {
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

  columns.forEach((col) => {
    col.editable = true
    if(col.field == 'Is_Scrap_Applicable'){
      col.type='boolean'
    }else{
      col.editable = true  
    }
});



columns.forEach((col) => {
  col.editable = true

  if(dateColumns.includes(col.field)){
    col.type='date'
    col.valueGetter = (params) => {
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
          (c) => c.ID == indexToIdMapping[id]
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
          var isDisabled = false;
          var linkStyles = {
            textDecoration: "none",
            color: "red",
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
                  to={generatePath(id)}
                  relative="path"
                  style={linkStyles}
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
