"use client";
//import node modules libraries
import {
  Row,
  Col,
  Card,
  CardHeader,
  FormControl,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "react-bootstrap";
import { useState } from "react";

//import custom components
import Flex from "components/common/Flex";
import TanstackTable from "components/table/TanstackTable";
import { productListColumns } from "./ColumnDifinitions";

//import required data files
import { productListData } from "data/EcommerceData";
import EditModal from "./EditModal";
import { ProductListType } from "types/EcommerceType";
import ViewModal from "./ViewModal";


const ProductListing = () => {

  const [selectedProduct,setSelectedProduct] = useState<ProductListType | null>(null);;
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);

  const handleEdit = (_product: ProductListType) => {
    setSelectedProduct(_product);
    setOpenEditModal(true);
  };

  const handleView = (_product : ProductListType) => {
    setSelectedProduct(_product);
    setOpenViewModal(true);
  };

  
  return (
    <Row>
      <Col>
        <Card className="card-lg" id="productList">
          <CardHeader className="border-bottom-0">
            <Row className="g-4">
              <Col lg={4}>
                <FormControl
                  type="search"
                  className="listjs-search"
                  placeholder="Search"
                />
              </Col>
              <Col lg={8} className="d-flex justify-content-end">
                <Flex alignItems="center" breakpoint="lg" className="gap-2">
                  <div>
                    <Button variant="white">More Filter</Button>
                  </div>
                  <Dropdown>
                    <DropdownToggle variant="white">Category</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem as="li" href="#">
                        Accessories
                      </DropdownItem>
                      <DropdownItem as="li" href="#">
                        Bags
                      </DropdownItem>
                      <DropdownItem as="li" href="#">
                        Men&apos;s Fashion
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown>
                    <DropdownToggle variant="white">Export</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem as="li" href="#">
                        Download as CSV
                      </DropdownItem>
                      <DropdownItem as="li" href="#">
                        Print
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Flex>
              </Col>
            </Row>
          </CardHeader>

          {/* Product List Table */}
          <TanstackTable
            data={productListData}
            columns={productListColumns(handleView, handleEdit)}
            pagination={true}
            isSortable
          />

            {selectedProduct && (
              <>
                <EditModal
                  show={openEditModal}
                  onHide={() => setOpenEditModal(false)}
                  product={selectedProduct}
                />
                <ViewModal
                  show={openViewModal}
                  onHide={() => setOpenViewModal(false)}
                  product={selectedProduct}
                />
              </>
            )}
        </Card>
      </Col>
    </Row>
  );
};

export default ProductListing;
