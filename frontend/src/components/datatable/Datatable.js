import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

// import { userColumns, userRows } from "../../datatablesource";

import { userColumns } from "./datatablesource";

import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Datatable = () => {
    const [data, setData] = useState({});

    const [listItems, setListItems] = useState([]);
    const getAPI = "http://localhost:5003/admin";

    useEffect(() => {
        console.log("in effect");
        axios.get(getAPI).then((req) => {
            console.log("res", JSON.stringify(req.data));
            setData(req.data);
            console.log(data);
        })
    }, []);

    const handleDelete = (id) => {
        const getAPI_delete = "http://localhost:5003/delete";
        axios.post(getAPI_delete, {id}).then((res,req) => {
            console.log(req.body);
        })
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/view" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">

            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
            />
        </div>
    );
};

export default Datatable;
