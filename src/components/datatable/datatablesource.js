import React from 'react';
export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: "Shivam",
        email: "Shivam@gmail.com",
    },
    {
        id: 2,
        username: "jenish",
        email: "jenish@gmail.com",
    },
    {
        id: 3,
        username: "Radhey",
        email: "Radhey@gmail.com",
    },
    {
        id: 4,
        username: "Meet",
        email: "Meet@gmail.com",
    },
    {
        id: 5,
        username: "Dharmay",
        email: "Dharmay@gmail.com",
    },
    {
        id: 6,
        username: "Nirav",
        email: "Nirav@gmail.com",
    },
    {
        id: 7,
        username: "Harshil",
        email: "Harshil@gmail.com",
    },
    {
        id: 8,
        username: "Bhargav",
        email: "Bhargav@gmail.com",
    }
];