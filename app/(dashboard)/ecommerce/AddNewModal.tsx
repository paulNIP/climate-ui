import { Modal, Button, Form,Row,Col } from "react-bootstrap";

const AddNewModal = ({ show, onHide }: {
  show: boolean;
  onHide: () => void;
}) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Budget</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="align-items-center mb-3">
            <Form.Label column sm={3}>Sphere</Form.Label>
            <Col sm={9}>
              <Form.Control type="text" placeholder="Enter name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Financial Year
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>


<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Type Of Information
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>


<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Vote Name
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>


<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Vote Code
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>


<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Programme Name
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>


<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Programme Code
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>


<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    SubProgramme Name
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    SubProgramme Code
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>


<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Sub SubProgramme Name
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>


<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Sub SubProgramme Code
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>


<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Service Area Name
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>


<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Service Area Name
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Service Area Code
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Budget Output Code
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Budget Output Description
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Project Code
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Item Description
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Item Code
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Funding Source
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Fund Type
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="align-items-center mb-3">
  <Form.Label column sm={3}>
    Amount
  </Form.Label>
  <Col sm={9}>
    <Form.Select defaultValue="">
      <option value="" disabled>
        Select category
      </option>
      <option value="marketing">Marketing</option>
      <option value="development">Development</option>
      <option value="operations">Operations</option>
    </Form.Select>
  </Col>
</Form.Group>

        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="dark">Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewModal;
