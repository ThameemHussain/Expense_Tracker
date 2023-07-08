import React, { useState, useEffect } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [inVal, setInVal] = useState(0);

  const handleAdd = () => {
    const timestamp = new Date().toISOString();
    const newTransaction = {
      timestamp,
      value: +inVal,
      type: "Add",
    };
    setTransactions([...transactions, newTransaction]);
    setInVal(0);
  };

  const handleRemove = () => {
    const timestamp = new Date().toISOString();
    const newTransaction = {
      timestamp,
      value: +inVal,
      type: "Remove",
    };
    setTransactions([...transactions, newTransaction]);
    setInVal(0);
  };

  const calculateBalance = () => {
    let balance = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === "Add") {
        balance += transaction.value;
      } else if (transaction.type === "Remove") {
        balance -= transaction.value;
      }
    });
    return balance >= 0 ? (
      "Balance : " + balance
    ) : (
      <>
        Balance : 0 <br />
        Due : {-balance}
      </>
    );
  };

  return (
    <>
      <div style={{ textAlign: "center", padding: "24px" }}>
        <label
          style={{
            fontWeight: "bold",
            fontSize: 28,
            color: "#63ad18",
          }}
        >
          {calculateBalance()}
        </label>
        <br />
        <input
          style={{
            height: "28px",
            width: "24%",
            borderRadius: 10,
            marginTop: 6,
            border: "0.4px solid #14acd4",
          }}
          type="number"
          placeholder="Enter Amount"
          value={inVal}
          onChange={(e) => setInVal(e.target.value)}
        />
        <br />
        <button
          style={{
            width: "80px",
            height: "30px",
            margin: 14,
            color: "#ffff",
            backgroundColor: "#14acd4",
            border: 0,
            borderRadius: 16,
          }}
          onClick={handleAdd}
          disabled={inVal === 0}
        >
          Add
        </button>
        <button
          style={{
            width: "80px",
            height: "30px",
            margin: 14,
            color: "#ffff",
            backgroundColor: "#14acd4",
            border: 0,
            borderRadius: 16,
          }}
          onClick={handleRemove}
          disabled={inVal === 0}
        >
          Remove
        </button>
      </div>
      <hr />
      <div style={{ padding: 20 }}>
        <label
          style={{
            fontWeight: "bold",
            fontSize: 32,
            color: "#63ad18",
          }}
        >
          Transactions:
        </label>
        <br />
        {transactions.map((transaction, index) => (
          <p
            style={{
              marginLeft: 28,
              borderLeft:
                transaction.type == "Add"
                  ? "2px solid #14acd4"
                  : "2px solid #f23838",
              paddingLeft: 8,
            }}
            key={index}
          >
            {transaction.timestamp} - {transaction.value} - {transaction.type}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
