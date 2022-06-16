import { useState } from 'react';
import OrderCard from './card';

const Search = ({ orderJson }) => {
    if ({ orderJson } !== []) {
        console.log(orderJson)
    }

    const [searchField, setSearchField] = useState("");
    // const [filteredOrders, setfilteredOrders] = useState("");

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    // useEffect(() => {
    //     setfilteredOrders(orderJson);
    // }, []);

    const filteredOrders = orderJson.filter(
        order => {
            return (
                order
                    .Title
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                order
                    .Number
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );
    function searchList() {
        return (
            <OrderCard orderJson={filteredOrders}></OrderCard>
        );
    }
    return (
        <>
            <div className="pa2">
                <input
                    className="pa3 bb br3 grow b--none bg-lightest-grey ma3"
                    type="search"
                    placeholder="Search Order"
                    onChange={handleChange}
                />
            </div>
            {searchList()}
        </>
    );
}

export default Search;