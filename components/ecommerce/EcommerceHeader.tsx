"use client";
//import node module libraries
import { Row, Col, Button } from "react-bootstrap";
import { IconUpload,IconPlus } from "@tabler/icons-react";


//import custom components
import Flex from "components/common/Flex";
import DasherBreadcrumb from "components/common/DasherBreadcrumb";

const EcommerceHeader = ({ onUpload, onAddNew }: {
  onUpload: () => void;
  onAddNew: () => void;
}) => {
  return (
    <Row>
      <Col>
        <Flex
          justifyContent="between"
          alignItems="center"
          className="mb-8 w-100"
          breakpoint="md"
        >
          <div>
            <h1 className="mb-3 h2">Draft Budgets</h1>
            <DasherBreadcrumb />
          </div>
          <div className="d-flex gap-2">
            <Button
              onClick={onUpload}
              variant="dark"
              className=" d-md-flex align-items-center gap-2"
            >
              <IconUpload size={18} />
              Upload Data
            </Button>
            <Button
              onClick={onAddNew}
              variant="dark"
              className=" d-md-flex align-items-center gap-2"
            >
              <IconPlus size={18} />
              Add New
            </Button>
          </div>
        </Flex>
      </Col>
    </Row>
  );
};

export default EcommerceHeader;
