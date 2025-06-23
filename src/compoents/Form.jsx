import React, { useContext, useState } from "react";
import { dataContext } from "../context/dataProvider";

const Form = () => {
  const [items, setItems] = useState([
    { itemNo: "", item: "", rebatePrice: "", gap: "", total: "" },
  ]);
  const { data, setData } = useContext(dataContext);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    setItems(updatedItems);
  };

  const handleAddRow = () => {
    setItems([
      ...items,
      { itemNo: "", item: "", rebatePrice: "", gap: "", total: "" },
    ]);
  };

  const handleRemoveRow = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="Form-container">
      <div className="main-container">
        <h1>New Quote</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <from className="grid-form">
              <div>
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handelChange}
                  className="form-field"
                />
              </div>
              <div>
                <label className="form-label">address</label>
                <input
                  type="text"
                  name="address"
                  onChange={handelChange}
                  className="form-field"
                />
              </div>
              <div>
                <label className="form-label">Medicare #</label>
                <input
                  type="text"
                  name="medicare"
                  onChange={handelChange}
                  className="form-field"
                />
              </div>
            </from>
          </div>
          <div>
            <label className="form-label">Items</label>
            <table className="table" style={{ width: "100%" }}>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div>
                        <label className="form-label">Item No.</label>
                        <input
                          type="text"
                          name="itemNo"
                          value={item.itemNo}
                          onChange={(e) => handleChange(index, e)}
                          className="form-field"
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <label className="form-label">Item</label>
                        <input
                          type="text"
                          name="item"
                          value={item.item}
                          onChange={(e) => handleChange(index, e)}
                          className="form-field"
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <label className="form-label">Rebate Price</label>
                        <input
                          type="text"
                          name="rebatePrice"
                          value={item.rebatePrice}
                          onChange={(e) => handleChange(index, e)}
                          className="form-field"
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <label className="form-label">Gap</label>
                        <input
                          type="text"
                          name="gap"
                          value={item.gap}
                          onChange={(e) => handleChange(index, e)}
                          className="form-field"
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <label className="form-label">Total</label>
                        <input
                          type="text"
                          name="total"
                          value={item.total}
                          onChange={(e) => handleChange(index, e)}
                          className="form-field"
                        />
                      </div>
                    </td>
                    <td onClick={handleRemoveRow} className="remove-button">-</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />

            <div>
              <button className="plus-button" onClick={handleAddRow}>
                +
              </button>
            </div>
          </div>

          <div>
            <table className="table" style={{ float: "right" }}>
              <tbody>
                <tr>
                  <td className="form-label">Rebate Total</td>
                  <td>
                    <input
                      type="text"
                      name="total"
                      onChange={handelChange}
                      className="form-field"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="form-label">Gap</td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      name="total"
                      onChange={handelChange}
                      className="form-field"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="form-label">Discount</td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      name="total"
                      onChange={handelChange}
                      className="form-field"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="form-label">Net Total</td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      name="total"
                      onChange={handelChange}
                      className="form-field"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="btn-card">
              <button className="clr-btn">Clear</button>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Form;
