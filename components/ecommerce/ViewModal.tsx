"use client"; // Ensure this is a client component

import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Table } from "react-bootstrap";

// Define the product type (adjust fields as needed)
import { ProductListType } from "types/EcommerceType";

interface EditModalProps {
  show: boolean;
  onHide: () => void;
  product: ProductListType | null;
}

const ViewModal: React.FC<EditModalProps> = ({ show, onHide, product }) => {
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



  const handleSubmit = () => {
    console.log("Updated Product:", formData);
    onHide(); // Close modal after submit
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>View Draft Budget</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Table striped bordered hover responsive>
            <tbody>
              <tr >
                <td>Registration Date</td>
                <td>{formData.registrationdate}</td>
              </tr>
              <tr >
                <td>Sphere</td>
                <td>{formData.sphere}</td>
              </tr>
              <tr >
                <td>Financial Year</td>
                <td>{formData.financialyear}</td>
              </tr>
              <tr >
                <td>Type Of Information</td>
                <td>{formData.typeofinfo}</td>
              </tr>
              <tr >
                <td>Fund Type</td>
                <td>{formData.fundtype}</td>
              </tr>
              <tr >
                <td>Vote Code</td>
                <td>{formData.vote_code}</td>
              </tr>
              <tr >
                <td>Vote Name</td>
                <td>{formData.vote_name}</td>
              </tr>
              <tr >
                <td>SubProgramme Code</td>
                <td>{formData.sub_subprogramme_code}</td>
              </tr>
              <tr >
                <td>Sub SubProgramme Name</td>
                <td>{formData.sub_subprogramme_name}</td>
              </tr>
              <tr >
                <td>Service Area Code</td>
                <td>{formData.service_area_code}</td>
              </tr>
              <tr >
                <td>Service Area Name</td>
                <td>{formData.service_area_name}</td>
              </tr>
              <tr >
                <td>Programme Code</td>
                <td>{formData.programme_code}</td>
              </tr>
              <tr >
                <td>Programme Name</td>
                <td>{formData.programme_name}</td>
              </tr>
              <tr >
                <td>Programme Code</td>
                <td>{formData.subprogramme_code}</td>
              </tr>
              <tr >
                <td>SubProgramme Name</td>
                <td>{formData.subprogramme_name}</td>
              </tr>
              <tr >
                <td>Budget Output Code</td>
                <td>{formData.budget_output_code}</td>
              </tr>
              <tr >
                <td>Budget Output Description</td>
                <td>{formData.budget_output_description}</td>
              </tr>
              <tr >
                <td>Project Code</td>
                <td>{formData.project_code}</td>
              </tr>
              <tr >
                <td>Item Code</td>
                <td>{formData.item_code}</td>
              </tr>
              <tr >
                <td>Item Description</td>
                <td>{formData.item_description}</td>
              </tr>
              <tr >
                <td>Funding Source Code</td>
                <td>{formData.fundingsourcecode}</td>
              </tr>
              <tr >
                <td>Funding Source</td>
                <td>{formData.fundingsource}</td>
              </tr>
              <tr >
                <td>Amount</td>
                <td>{formData.amount}</td>
              </tr>
            </tbody>
          </Table>
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

export default ViewModal;
