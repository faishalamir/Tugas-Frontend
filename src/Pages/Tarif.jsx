import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import TableTarif from "../Components/TableTarif";

const Tarif = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/SignUp");
    }
  });
  return (
    <>
      <Navbar />
      <h2 className="text_tarif">Tarif</h2>
      <div className="background_Tarif">
        <div className="border_result">
          <TableTarif/>
        </div>
        <div className="border_Tarif">
          <h1 className="form_tarif">Form Tarif</h1>

          {/*!! Kode tarif form */}

          <h1 className="Kode_Tarif">Kode Tarif</h1>
          <InputGroup className="mb-3 m-3 mt-2 w-50">
            <InputGroup.Text id="inputGroup-sizing-default"  >
              KT
            </InputGroup.Text>
            <Form.Control style={{width:'150%',marginLeft:'3vmax',position:"absolute",borderRadius:"10px"}}
              aria-label="Default"
              placeholder="Kode Tarif"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          {/* Daya */}

          <h1 className="Kode_Tarif">Daya</h1>
          <InputGroup className="mb-3 m-3 mt-2 w-50">
            <InputGroup.Text id="inputGroup-sizing-default"  >
              VA
            </InputGroup.Text>
            <Form.Control style={{width:'150%',marginLeft:'3vmax',position:"absolute",borderRadius:"10px"}}
              aria-label="Default"
              placeholder="Daya"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          {/* Tarif PerKwh*/}

          <h1 className="Kode_Tarif">Tarif Per KWH</h1>
          <InputGroup className="mb-3 m-3 mt-2 w-50">
            <InputGroup.Text id="inputGroup-sizing-default"  >
              RP
            </InputGroup.Text>
            <Form.Control style={{width:'150%',marginLeft:'3vmax',position:"absolute",borderRadius:"10px"}}
              aria-label="Default"
              placeholder="Tarif per KWH"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

      
          {/* Denda*/}

          <h1 className="Kode_Tarif">Denda</h1>
          <InputGroup className="mb-3 m-3 mt-2 w-50">
            <InputGroup.Text id="inputGroup-sizing-default"  >
              %
            </InputGroup.Text>
            <Form.Control style={{width:'150%',marginLeft:'3vmax',position:"absolute",borderRadius:"10px"}}
              aria-label="Default"
              placeholder="Denda"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <Button variant="primary" size="lg" className="m-3" >Submit</Button>
        </div>
      </div>
    </>
  );
};

export default Tarif;
