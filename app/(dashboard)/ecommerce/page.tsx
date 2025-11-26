"use client"; // <-- MUST be first line
//import node module libraries
import { Fragment,useState } from "react";
// import { Metadata } from "next";

//import custom components
import ProductListing from "components/ecommerce/ProductListing";
import EcommerceHeader from "components/ecommerce/EcommerceHeader";

import UploadModal from "./UploadModal";    // your modal
import AddNewModal from "./AddNewModal";
   // your modal

// export const metadata: Metadata = {
//   title: "Products | Dasher - Responsive Bootstrap 5 Admin Dashboard",
//   description: "Dasher - Responsive Bootstrap 5 Admin Dashboard",
// };

const Ecommerce = () => {

  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [openAddNewModal, setOpenAddNewModal] = useState(false);

  return (
    <Fragment>
      <EcommerceHeader 
        onUpload={() => setOpenUploadModal(true)}
        onAddNew={() => setOpenAddNewModal(true)}/>


      <ProductListing />

      {/* Upload Modal */}
      <UploadModal
        show={openUploadModal}
        onHide={() => setOpenUploadModal(false)}
      />

      {/* Add New Modal */}
      <AddNewModal
        show={openAddNewModal}
        onHide={() => setOpenAddNewModal(false)}
      />

    </Fragment>
  );
};

export default Ecommerce;
