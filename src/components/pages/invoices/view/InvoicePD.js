import React from "react";
//Vendor
import styled from "styled-components";
import moment from "moment";

// Styles
const BillDocument = styled.div`
  max-width: 100%;
  overflow: auto;
`;
const BillPage = styled.div`
  max-width: 900px;
  width: 900px;
  overflow: auto;
  margin: 2rem auto;
  padding: 6rem 4rem;
  box-shadow: 4px 4px 28px 10px rgba(240, 240, 240, 0.9);
`;
const BillDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
`;
const BillColumn = styled.div`
  width: 40%;
  border: red 2px solidcolor;
`;
const InvoiceHeading = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const InvoiceNumber = styled.p`
  color: #444;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bolder;
  margin-bottom: 2rem;
`;
const Date = styled.div`
  margin-top: 4rem;
`;
const BillRow = styled.div`
  display: grid;
  padding: 8px 0;

  grid-template-columns: 1fr 10fr 3fr 2fr 2fr 3fr;
`;
const BillHead = styled(BillRow)`
  background: #444;
  border-radius: 3px;
  color: white;
`;
const BillDataNum = styled.p`
  text-align: right;
  padding: 0 5px;
`;

function InvoicePDF(props) {
  const {
    address,
    email,
    clientId,
    clientName,
    invoiceDate,
    dueDate,
    invoiceNum,
    note,
    phone,
    items,
    totalAmount,
    paidStatus,
  } = props.invoice;
  // console.log("props", props.invoice);
  const itemList = items.map(({ itemName, rate, qty, disc, amount, id }, i) => (
    <BillRow key={id}>
      <BillDataNum>{i + 1}</BillDataNum>
      <p>{itemName}</p>
      <BillDataNum>${rate.toFixed(2)}</BillDataNum>
      <BillDataNum>{disc}%</BillDataNum>
      <BillDataNum>{qty}</BillDataNum>
      <BillDataNum>${amount.toFixed(2)}</BillDataNum>
    </BillRow>
  ));
  // console.log("props.invoicePD", invoiceNum);
  return (
    <BillDocument>
      <BillPage>
        <BillDetails>
          <BillColumn>
            <h2>Doremi Music</h2>
            <p>5430 Jimmy Carter Blvd #112, Norcross, GA 30093</p>
            <Date>
              <p>
                Invoice Date :{" "}
                {moment(invoiceDate.toDate()).format("DD-MM-YYYY")}
              </p>
              <p>Due Date : {moment(dueDate.toDate()).format("DD-MM-YYYY")}</p>
              <p>
                Status :{" "}
                {paidStatus ? (
                  <span style={{ color: "#219735" }}>Fulfilled</span>
                ) : (
                  <span style={{ color: "#FD5665" }}>Pending</span>
                )}
              </p>
            </Date>
          </BillColumn>

          <BillColumn style={{ textAlign: "right" }}>
            <InvoiceHeading>INVOICE: #{invoiceNum}</InvoiceHeading>
            <InvoiceNumber>ID: {clientId}</InvoiceNumber>
            <p>Bill To</p>
            <h2>{clientName}</h2>
            <p>{address}</p>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
          </BillColumn>
        </BillDetails>
        <BillHead>
          <BillDataNum>#</BillDataNum>
          <p>Product Details</p>
          <BillDataNum>Rate</BillDataNum>
          <BillDataNum>Disc</BillDataNum>
          <BillDataNum>Qty</BillDataNum>
          <BillDataNum>Amount</BillDataNum>
        </BillHead>
        {itemList}
        <BillDetails>
          <BillColumn>{note && <Date>Note: {note}</Date>}</BillColumn>
          <BillColumn>
            <BillDetails>
              <BillColumn style={{ textAlign: "right" }}>
                <p>Total: </p>
              </BillColumn>
              <BillColumn style={{ textAlign: "right" }}>
                <p>
                  $
                  {totalAmount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </BillColumn>
            </BillDetails>
          </BillColumn>
        </BillDetails>
      </BillPage>
    </BillDocument>
  );
}

export default InvoicePDF;
