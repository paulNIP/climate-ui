import { Modal, Button } from "react-bootstrap";

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
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Upload Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Upload your CSV or budget file.</p>
        <Button variant="secondary" onClick={onHide}>
          Upload
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={downloadFile}>
          Download Template
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Import
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UploadModal;
