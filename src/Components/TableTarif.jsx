import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function TableTarif() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>No</th>
          <th>Kode Tarif</th>
          <th>Daya</th>
          <th>Tarif Per KWH</th>
          <th style={{ width: "10%" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>TRF001</td>
          <td>1000 VA</td>
          <td>500</td>
          <td style={{ display: "flex", gap: "10px" }}>
            <Button style={{margin:'auto'}} variant="info">Info</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableTarif;
