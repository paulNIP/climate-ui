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
        registrationdate: '',
        sphere: '',
        financialyear: '',
        typeofinfo: '',
        fundtype: '',
        vote_code: '',
        vote_name: '',
        sub_subprogramme_code: '',
        sub_subprogramme_name: '',
        service_area_code: '',
        service_area_name: '',
        programme_code: '',
        programme_name: '',
        subprogramme_code: '',
        subprogramme_name: '',
        budget_output_code: '',
        budget_output_description: '',
        project_code: '',
        item_code: '',
        item_description: '',
        fundingsourcecode: '',
        fundingsource: '',
        amount: '',

  });

  // Populate form when modal opens or product changes
  useEffect(() => {
    if (product) {
      setFormData({

        registrationdate : product.registrationdate || '',
        sphere : product.sphere || '',
        financialyear : product.financialyear || '',
        typeofinfo : product.typeofinfo || '',
        fundtype : product.fundtype || '',
        vote_code : product.vote_code || '',
        vote_name : product.vote_name || '',
        sub_subprogramme_code : product.sub_subprogramme_code || '',
        sub_subprogramme_name : product.sub_subprogramme_name || '',
        service_area_code : product.service_area_code || '',
        service_area_name : product.service_area_name || '',
        programme_code : product.programme_code || '',
        programme_name : product.programme_name || '',
        subprogramme_code : product.subprogramme_code || '',
        subprogramme_name : product.subprogramme_name || '',
        budget_output_code : product.budget_output_code || '',
        budget_output_description : product.budget_output_description || '',
        project_code : product.project_code || '',
        item_code : product.item_code || '',
        item_description : product.item_description || '',
        fundingsourcecode : product.fundingsourcecode || '',
        fundingsource : product.fundingsource || '',
        amount : product.amount?.toString() || "",
      });
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async () => {
  try {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      window.location.href = "/signin";
      return;
    }

    const { accesstoken } = JSON.parse(storedUser);

    // Make PUT request to update the product (replace URL with your API)
    const res = await fetch(`http://127.0.0.1:4000/api/budgets/${product?.prikey}`, {
      method: "PUT", // or POST depending on API
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesstoken}`,
      },
      body: JSON.stringify({
        ...formData,
        amount: formData.amount ? Number(formData.amount) : null, // convert amount to number
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Failed to update:", error);
      alert("Failed to save changes. See console for details.");
      return;
    }

    const updatedProduct = await res.json();
    console.log("Updated Product:", updatedProduct);

    // Close modal after successful save
    onHide();
  } catch (err) {
    console.error("Error updating product:", err);
    alert("An error occurred while saving changes.");
  }
};


  return (
    <Modal show={show} onHide={onHide} size="lg" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>


<Row className="mb-3">
          <Col md={6}><Form.Group controlId='form'>
                <Form.Label>registrationdate</Form.Label>
                <Form.Control
                  type='text'
                  name='registrationdate'
                  value={formData.registrationdate}
                  onChange={handleChange}
                  placeholder='Enter registrationdate'
                />
              </Form.Group></Col>
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>sphere</Form.Label>
                <Form.Control
                  type='text'
                  name='sphere'
                  value={formData.sphere}
                  onChange={handleChange}
                  placeholder='Enter sphere'
                />
              </Form.Group></Col>
              </Row>
              <Row className="mb-3">
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>financialyear</Form.Label>
                <Form.Control
                  type='text'
                  name='financialyear'
                  value={formData.financialyear}
                  onChange={handleChange}
                  placeholder='Enter financialyear'
                />
              </Form.Group></Col>
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>typeofinfo</Form.Label>
                <Form.Control
                  type='text'
                  name='typeofinfo'
                  value={formData.typeofinfo}
                  onChange={handleChange}
                  placeholder='Enter typeofinfo'
                />
              </Form.Group></Col>
              </Row>
              <Row className="mb-3">
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>fundtype</Form.Label>
                <Form.Control
                  type='text'
                  name='fundtype'
                  value={formData.fundtype}
                  onChange={handleChange}
                  placeholder='Enter fundtype'
                />
              </Form.Group></Col>
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>vote_code</Form.Label>
                <Form.Control
                  type='text'
                  name='vote_code'
                  value={formData.vote_code}
                  onChange={handleChange}
                  placeholder='Enter vote_code'
                />
              </Form.Group></Col>
              </Row>

              <Row className="mb-3">
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>vote_name</Form.Label>
                <Form.Control
                  type='text'
                  name='vote_name'
                  value={formData.vote_name}
                  onChange={handleChange}
                  placeholder='Enter vote_name'
                />
              </Form.Group></Col>
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>sub_subprogramme_code</Form.Label>
                <Form.Control
                  type='text'
                  name='sub_subprogramme_code'
                  value={formData.sub_subprogramme_code}
                  onChange={handleChange}
                  placeholder='Enter sub_subprogramme_code'
                />
              </Form.Group></Col>
              </Row>

              <Row className="mb-3">
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>sub_subprogramme_name</Form.Label>
                <Form.Control
                  type='text'
                  name='sub_subprogramme_name'
                  value={formData.sub_subprogramme_name}
                  onChange={handleChange}
                  placeholder='Enter sub_subprogramme_name'
                />
              </Form.Group></Col>
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>service_area_code</Form.Label>
                <Form.Control
                  type='text'
                  name='service_area_code'
                  value={formData.service_area_code}
                  onChange={handleChange}
                  placeholder='Enter service_area_code'
                />
              </Form.Group></Col>
              </Row>

              <Row className="mb-3">
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>service_area_name</Form.Label>
                <Form.Control
                  type='text'
                  name='service_area_name'
                  value={formData.service_area_name}
                  onChange={handleChange}
                  placeholder='Enter service_area_name'
                />
              </Form.Group></Col>
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>programme_code</Form.Label>
                <Form.Control
                  type='text'
                  name='programme_code'
                  value={formData.programme_code}
                  onChange={handleChange}
                  placeholder='Enter programme_code'
                />
              </Form.Group></Col>
              </Row>

              <Row className="mb-3">
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>programme_name</Form.Label>
                <Form.Control
                  type='text'
                  name='programme_name'
                  value={formData.programme_name}
                  onChange={handleChange}
                  placeholder='Enter programme_name'
                />
              </Form.Group></Col>
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>subprogramme_code</Form.Label>
                <Form.Control
                  type='text'
                  name='subprogramme_code'
                  value={formData.subprogramme_code}
                  onChange={handleChange}
                  placeholder='Enter subprogramme_code'
                />
              </Form.Group></Col>
              </Row>
      
<Row className="mb-3">
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>subprogramme_name</Form.Label>
                <Form.Control
                  type='text'
                  name='subprogramme_name'
                  value={formData.subprogramme_name}
                  onChange={handleChange}
                  placeholder='Enter subprogramme_name'
                />
              </Form.Group></Col>
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>budget_output_code</Form.Label>
                <Form.Control
                  type='text'
                  name='budget_output_code'
                  value={formData.budget_output_code}
                  onChange={handleChange}
                  placeholder='Enter budget_output_code'
                />
              </Form.Group></Col>

              </Row>
<Row className="mb-3">
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>budget_output_description</Form.Label>
                <Form.Control
                  as="textarea"
                  type='text'
                  name='budget_output_description'
                  value={formData.budget_output_description}
                  onChange={handleChange}
                  placeholder='Enter budget_output_description'
                  rows={4} 
                />
              </Form.Group></Col>
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>project_code</Form.Label>
                <Form.Control
                  type='text'
                  name='project_code'
                  value={formData.project_code}
                  onChange={handleChange}
                  placeholder='Enter project_code'
                />
              </Form.Group></Col>
              </Row>

<Row className="mb-3">
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>item_code</Form.Label>
                <Form.Control
                  type='text'
                  name='item_code'
                  value={formData.item_code}
                  onChange={handleChange}
                  placeholder='Enter item_code'
                />
              </Form.Group></Col>
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>item_description</Form.Label>
                <Form.Control
                  type='text'
                  name='item_description'
                  value={formData.item_description}
                  onChange={handleChange}
                  placeholder='Enter item_description'
                />
              </Form.Group></Col>
</Row>

<Row className="mb-3">
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>fundingsourcecode</Form.Label>
                <Form.Control
                  type='text'
                  name='fundingsourcecode'
                  value={formData.fundingsourcecode}
                  onChange={handleChange}
                  placeholder='Enter fundingsourcecode'
                />
              </Form.Group></Col>
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>fundingsource</Form.Label>
                <Form.Control
                  type='text'
                  name='fundingsource'
                  value={formData.fundingsource}
                  onChange={handleChange}
                  placeholder='Enter fundingsource'
                />
              </Form.Group></Col>
</Row>

<Row className="mb-3">
<Col md={6}><Form.Group controlId='form'>
                <Form.Label>amount</Form.Label>
                <Form.Control
                  type='text'
                  name='amount'
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder='Enter amount'
                />
              </Form.Group></Col>
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
