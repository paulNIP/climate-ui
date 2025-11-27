"use client";

import { useState } from "react";

import { Modal, Button } from "react-bootstrap";
import Papa from "papaparse";
import { Table,  Form } from "react-bootstrap";


const downloadFile = () => {
  const link = document.createElement("a");
  link.href = "/uploads/Budget_template.csv";   // relative to public/
  link.download = "Budget_template.csv";
  link.click();
};



const UploadModal = ({ show, onHide }: {
  show: boolean;
  onHide: () => void;
}) => {


  const [csvData, setCsvData] = useState<Record<string, string>[]>([]);

  const [headers, setHeaders] = useState<string[]>([]);
  const [fileName, setFileName] = useState("");

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    Papa.parse(file, {
      header: true,  // convert header row into object keys
      skipEmptyLines: true,
      complete: (result) => {

        const rows = result.data as Record<string, string>[];
        // Get CSV header names
        setHeaders(result.meta.fields || []);
        setCsvData(rows);
      },
      error: (err) => {
        alert("Failed to parse CSV");
        console.error(err);
      },
    });
  };

  const handleSubmitToAPI = async () => {
    if (csvData.length === 0) {
      alert("No CSV data to upload");
      return;
    }

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      window.location.href = "/signin";
      return;
    }

    const { accesstoken } = JSON.parse(storedUser);

    const res = await fetch("http://127.0.0.1:4000/api/budgets/bulk-upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesstoken}`, 
      },
      body: JSON.stringify(csvData),
    });

    if (!res.ok) {
      alert("Failed to upload CSV data");
      return;
    }

    alert("CSV uploaded successfully!");
  };


  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Upload Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>


      <h4>Import CSV</h4>

      {/* File Upload */}
      <Form.Group>
        <Form.Control
          type="file"
          accept=".csv"
          onChange={handleCSVUpload}
        />
      </Form.Group>

      {fileName && <p>Uploaded: <strong>{fileName}</strong></p>}

      {/* Preview */}
      {csvData.length > 0 && (
        <>
          <h5 className="mt-3">Preview</h5>
          <div className="table-responsive">
            <Table bordered>
              <thead>
                <tr>
                  {headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvData.slice(0, 10).map((row, i) => (
                  <tr key={i}>
                    {headers.map((h) => (
                      <td key={h}>{(row as Record<string, unknown>)[h] as string}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <p><i>Showing first 10 rows...</i></p>

          <Button variant="primary" onClick={handleSubmitToAPI}>
            Submit CSV to API
          </Button>
        </>
      )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={downloadFile}>
          Download Template
        </Button>
        {/* <Button variant="secondary" onClick={onHide}>
          Import
        </Button> */}
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UploadModal;
