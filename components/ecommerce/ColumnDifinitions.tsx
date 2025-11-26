//import node module libraries
import { Fragment} from "react";
import { ColumnDef } from "@tanstack/react-table";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import { Badge, Button} from "react-bootstrap";
import Link from "next/link";

//import custom types
import { ProductListType } from "types/EcommerceType";

//import custom components
import DasherTippy from "components/common/DasherTippy";
import Checkbox from "components/table/Checkbox";


export const productListColumns = (
  handleView: (product: ProductListType) => void,
  handleEdit: (product: ProductListType) => void
): ColumnDef<ProductListType>[] => [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      );
    },
    cell: ({ row }) => (
      <div>
        <Checkbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
  },
  {
    accessorKey: "",
    header: "Action",
    cell: ({row}) => {
      return (
        <Fragment>
          <DasherTippy content="View">
            <Button
              onClick={() => handleView(row.original)}
              variant="ghost btn-icon"
              size="sm"
              className="rounded-circle"
            >
              <IconEye size={16} />
              <div id="eyeThree" className="d-none">
                <span>View</span>
              </div>
            </Button>
          </DasherTippy>
          <DasherTippy content="Edit">
            <Button
              onClick={() => handleEdit(row.original)}
              variant="ghost btn-icon"
              size="sm"
              className="rounded-circle"
            >
              <IconEdit size={16} />
              <div id="editTwo" className="d-none">
                <span>Edit</span>
              </div>
            </Button>
          </DasherTippy>
          <DasherTippy content="Delete">
            <Button
              onClick={() => console.log("Delete:")}
              variant="ghost btn-icon"
              size="sm"
              className="rounded-circle"
            >
              <IconTrash size={16} />
              <div id="trashThree" className="d-none">
                <span>Delete</span>
              </div>
            </Button>
          </DasherTippy>
        </Fragment>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Product",
    cell: () => {
      return (
        <div className="d-flex align-items-center">
          {/* <Image
            src={row.original.imageSrc}
            alt=""
            className="rounded-3"
            width="56"
          /> */}
          <div className="ms-3 d-flex flex-column">
            <Link href="#!" className="text-inherit fw-semibold">
              Transparent Sunglasses
            </Link>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Financial Year",
  },
  {
    accessorKey: "addedDate",
    header: "Type Of Information",
  },
  {
    accessorKey: "price",
    header: "Vote Name",
  },
  {
    accessorKey: "quantity",
    header: "Vote Code",
  },
  {
    accessorKey: "quantity",
    header: "Programme Name",
  },
  {
    accessorKey: "quantity",
    header: "Programme Code",
  },
  {
    accessorKey: "quantity",
    header: "SubProgramme Name",
  },
  {
    accessorKey: "quantity",
    header: "SubProgramme Code",
  },
  {
    accessorKey: "quantity",
    header: "Sub SubProgramme Name",
  },
    {
    accessorKey: "quantity",
    header: "Sub SubProgramme Code",
  },
    {
    accessorKey: "quantity",
    header: "Service Area Name",
  },
    {
    accessorKey: "quantity",
    header: "Service Area Code",
  },
    {
    accessorKey: "quantity",
    header: "Budget Output Code",
  },
    {
    accessorKey: "quantity",
    header: "Budget Output Description",
  },
    {
    accessorKey: "quantity",
    header: "Project Code",
  },
    {
    accessorKey: "quantity",
    header: "Item Description",
  },
    {
    accessorKey: "quantity",
    header: "Item Code",
  },
    {
    accessorKey: "quantity",
    header: "Funding Source",
  },
      {
    accessorKey: "quantity",
    header: "Funding Source Code",
  },
      {
    accessorKey: "quantity",
    header: "Fund Type",
  },
   {
    accessorKey: "quantity",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusText = row.original.status;
      return (
        <Badge
          bg={`${statusText === "Active" ? "success-subtle" : "danger-subtle"}`}
          text={`${
            statusText === "Active" ? "success-emphasis" : "danger-emphasis"
          }`}
          pill={true}
        >
          {statusText}
        </Badge>
      );
    },
  },
  
];


