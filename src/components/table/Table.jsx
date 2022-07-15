import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
    const rows = [
        {
            id: 1143155,
            product: "Nike AirMax",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VtnIRld9ZXIzm8n4YdGDIjj9YJ1nn7OItA&usqp=CAU",
            customer: "Shivam",
            date: "1 May",
            amount: 400,
            method: "Pay at Door",
        },
        {
            id: 2235235,
            product: "Playstation 5",
            img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Nirav",
            date: "10 May",
            amount: 1000,
            method: "Online",
        },
        {
            id: 2342353,
            product: "Apple MacBook Pro 14",
            img: "data:image/jpeg;base64,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",
            customer: "Radhey",
            date: "11 May",
            amount: 3500,
            method: "Online",
        },
        {
            id: 2357741,
            product: "Apple 13 Pro",
            img: "data:image/jpeg;base64,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",
            customer: "Jenish",
            date: "30 May",
            amount: 1200,
            method: "Online",
        },
        {
            id: 2342355,
            product: "Jordan Sneakers",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0GM6NB18KIUDvoat1Kwbwrutu62xFpuThg&usqp=CAU",
            customer: "Meet",
            date: "1 June",
            amount: 700,
            method: "Pay at Door",
        },
    ];
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Payment Method</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;
