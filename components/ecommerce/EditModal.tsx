"use client"; // Ensure this is a client component

import { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

// Define the product type (adjust fields as needed)
import { ProductListType } from "types/EcommerceType";

interface EditModalProps {
  show: boolean;
  onHide: () => void;
  product: ProductListType | null;
}

const EditModal: React.FC<EditModalProps> = ({ show, onHide, product }) => {
  // Local form state
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    addedDate: "",
    price: "",
    quantity: "",
    status: "",
  });

  // Populate form when modal opens or product changes
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        category: product.category || "",
        addedDate: product.addedDate || "",
        price: product.price || "",
        quantity: product.quantity?.toString() || "",
        status: product.status || "",
      });
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Updated Product:", formData);
    onHide(); // Close modal after submit
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Enter product name"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={formData.category}
                  placeholder="Enter category"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formAddedDate">
                <Form.Label>Added Date</Form.Label>
                <Form.Control
                  type="date"
                  name="addedDate"
                  value={formData.addedDate}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={formData.price}
                  placeholder="Enter price"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  placeholder="Enter quantity"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Select name="status" value={formData.status} onChange={handleChange}>
                  <option value="">Select status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
