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
import { useState,useEffect } from "react";

//import custom components
import Flex from "components/common/Flex";
import TanstackTable from "components/table/TanstackTable";
import { productListColumns } from "./ColumnDifinitions";

//import required data files
import EditModal from "./EditModal";
import { ProductListType } from "types/EcommerceType";
import ViewModal from "./ViewModal";
import { saveAs } from "file-saver";


export const fetchBudgetList = async () => {
  const storedUser = localStorage.getItem("user");
  if (!storedUser) {
    window.location.href = "/signin";
    return;
  }

  const { accesstoken } = JSON.parse(storedUser);

  const res = await fetch("http://127.0.0.1:4000/api/budgets", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accesstoken}`,
    },
  });

  //   const res = await fetch("http://127.0.0.1:4000/api/budgets", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${accesstoken}`,
  //   },
  // });

  if (res.status === 401 || res.status === 403) {
    // Token missing or invalid → redirect to signin
    localStorage.removeItem("user");
    window.location.href = "/signin";
    return;
  }

  return res.json();
};


const ProductListing = () => {



  const [selectedProduct,setSelectedProduct] = useState<ProductListType | null>(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [budgetss,setBudgetList] = useState<ProductListType[]>([]);




const handleExportCSV = async () => {
  try {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      window.location.href = "/signin";
      return;
    }

    const { accesstoken } = JSON.parse(storedUser);

    // const res = await fetch("http://127.0.0.1:4000/api/budgets", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${accesstoken}`,
    //   },
    // });

    const res = await fetch("http://127.0.0.1:4000/api/budgets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesstoken}`,
      },
    });

    if (!res.ok) {
      alert("Failed to fetch data for CSV export");
      return;
    }

    const data = await res.json();


    //new implementation
    // Define the columns you want to export and their CSV headers
    const exportColumns = [

    { key: "sphere", header: "SPHERE" },
    { key: "financialyear", header: "FINANACIAL YEAR" },
    { key: "registrationdate", header: "REGISTRATION DATE" },
    { key: "typeofinfo", header: "TYPE OF INFO" },
    { key: "fundtype", header: "FUND TYPE" },
    { key: "vote_code", header: "VOTE CODE" },
    { key: "vote_name", header: "VOTE NAME" },
    { key: "sub_subprogramme_code", header: "SUB SUBPROGRAMME CODE" },
    { key: "sub_subprogramme_name", header: "SUB SUBPROGRAMME NAME" },
    { key: "service_area_code", header: "SERVICE AREA CODE" },
    { key: "service_area_name", header: "SERVICE AREA NAME" },
    { key: "programme_code", header: "PROGRAMME CODE" },
    { key: "programme_name", header: "PROGRAMME NAME" },
    { key: "subprogramme_code", header: "SUBPROGRAMME CODE" },
    { key: "subprogramme_name", header: "SUBPROGRAMME NAME" },
    { key: "budget_output_code", header: "BUDGET OUTPUT CODE" },
    { key: "budget_output_description", header: "BUDGET OUTPUT DESCRIPTION" },
    { key: "project_code", header: "PROJECT CODE" },
    { key: "item_code", header: "ITEM CODE" },
    { key: "item_description", header: "ITEM DESCRIPTION" },
    { key: "fundingsourcecode", header: "FUNDING SOURCE CODE" },
    { key: "fundingsource", header: "FUNDING SOURCE" },
    { key: "amount", header: "AMOUNT" },

    ];

    // Convert JSON → CSV string
    const csvRows = [];

    // Add header row
    csvRows.push(exportColumns.map(col => col.header).join(","));

    // Add data rows

    data.forEach((row: ProductListType) => {
      const values = exportColumns.map(col => {
        let val = row[col.key as keyof ProductListType];

        if (val === null || val === undefined) val = "";

        if (col.key === "registrationdate") {
          // Convert ISO date to YYYY-MM-DD
          const date = new Date(String(val));
          val = isNaN(date.getTime()) ? "" : date.toISOString().split("T")[0];
        } else {
          // Replace underscores with spaces
          val = String(val).replace(/_/g, " ");
        }

        // Escape double quotes
        val = String(val).replace(/"/g, '""');

        return `"${val}"`;
      });

      csvRows.push(values.join(","));
    });

    const csvString = csvRows.join("\n");
    // Download CSV
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "budgets.csv");

  } catch (err) {
    console.error(err);
    alert("Error exporting CSV");
  }
};




  useEffect(() => {
    const loadBudgets = async () => {
      const budgets = await fetchBudgetList();
      if (budgets) setBudgetList(budgets);
      console.log(budgets);
    };

    loadBudgets();
  }, []);

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
                      <DropdownItem as="li"  onClick={handleExportCSV}>
                        Download as CSV
                      </DropdownItem>
                      {/* <DropdownItem as="li" href="#">
                        Print
                      </DropdownItem> */}
                    </DropdownMenu>
                  </Dropdown>
                </Flex>
              </Col>
            </Row>
          </CardHeader>

          {/* Product List Table */}
          <TanstackTable
            data={budgetss}
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
