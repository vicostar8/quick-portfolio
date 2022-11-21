import React from "react";

const TableRow = ({ name, url, icon, description }) => {
  return (
    <tr className="tRow">
      <td className="col-3">
        <a href={url} target="_blank">
          {name}
        </a>
      </td>
      <td className="col-1">
        <i className={`bi ${icon}`}></i>
      </td>
      <td className="col-8">
        <ul className="m-0 p-0">
          {description.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

export default TableRow;
