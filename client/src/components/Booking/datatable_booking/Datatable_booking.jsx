import "./datatable_booking.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColoumnsBK, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Swal from "sweetalert2";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Datatable_booking = () => {
  const [list, setList] = useState("");
  const { data, loading, error } = useFetch("/rmhotel");

  //filtered by search

  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");

  const [updatestate, setUpdatestate] = useState(-1);

  const handlesearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);
    if (getSearch.length > 0) {
      const searchdata = list.filter((item) =>
        item.checkin.toLowerCase().includes(getSearch)
      );
      setList(searchdata);
    } else {
      setList(filterdata);
    }
  };

  useEffect(() => {
    setList(data);
    setFilterdata(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/rmhotel/${id}`);
          setList(list.filter((item) => item._id !== id));
          console.log(`${id}`);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (err) {}
  };


  const actionColoumn = [
    {
      field: "action",
      width: 150,
      headerName: "Action",
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              className="updateButton"
              type="button"
              to={`/booking/updateBookingg/${params.row._id}`}
            >
              Update
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Scaler", 14, 22);
    doc.setFontSize(12);
    doc.text(
      "50/A, \n Araliya Road,\n Kurana, \n Negombo.\n\n011-2263595,011-2245896,011-4523698",
      14,
      30
    );
    doc.setFontSize(10);
    doc.text(
      "",

      14,
      30,
      { maxWidth: 182 }
    ); //pdf name title
    doc.autoTable({
      startY: 50,
      theme: "grid",
      head: [
        [
          "NIC",
          "Name", //table headings that you want
          "Phone No",
          "Email",
          "Checkin Date",
          "Room Count",
          "Total Cost",
        ],
      ],
      body: list.map((item) => [
        item.nic, 
        item.name,
        item.phone,
        item.email,
        item.checkin,
        item.roomCount,
        item.totRoom,
      ]),
    });
    doc.save("Room Booking.pdf"); /// download pdf name
  };

  const actions = [
    {
      icon: () => (
        <button
          onClick={downloadPdf}
          className="export"
          style={{ width: "150px", height: "50px" }}
        >
          <h3>Download PDF</h3>
        </button> /// button name
      ),
      tooltip: "Export to Pdf",
      isFreeAction: true,
    },
  ];

  return (
    <div className="datatableBK">
      <div className="datatableTitle">
        <label
          style={{ textAlign: "left", marginRight: "10px", fontWeight: "bold" }}
        >
          Check-In Date
        </label>
        <input
          type="date"
          value={query}
          className="Search"
          onChange={(e) => handlesearch(e)}
          placeholder="Select Check In Date"
        />
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={userColoumnsBK.concat(actionColoumn)}
        pageSize={11}
        rowsPerPageOptions={[10]}
        checkboxSelection
        getRowId={(row) => row._id}
        components={{
          Toolbar: () => (
            <div>
              {actions.map((action, index) => (
                <action.icon key={index} onClick={action.onClick} />
              ))}
            </div>
          ),
        }}
      />
    </div>
  );
};

export default Datatable_booking;
