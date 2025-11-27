//import node module libraries
import { Fragment} from "react";
import { ColumnDef } from "@tanstack/react-table";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import {  Button} from "react-bootstrap";


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
              onClick={() => {
                console.log(row.original);
                console.log("Delete:");
              }}
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
    accessorKey: "sphere",
    header: "Sphere",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },

  {
    accessorKey: "financialyear",
    header: "Financial Year",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
  {
    accessorKey: "registrationdate",
    header: "Registration Date",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      
      const dateObj = new Date(val);
      const formatted2 = dateObj.toISOString().split("T")[0];
      return formatted2;
    }
  },
  {
    accessorKey: "typeofinfo",
    header: "Type Of Information",
      cell: ({ getValue }) => {
        const val = getValue<string | number>();
        return typeof val === "string" ? val.replace(/_/g, " ") : val;
      }
  },
  {
    accessorKey: "vote_name",
    header: "Vote Name",
    cell: ({ getValue }) => {
          const val = getValue<string | number>();
          return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
  {
    accessorKey: "vote_code",
    header: "Vote Code",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
  {
    accessorKey: "programme_name",
    header: "Programme Name",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
  {
    accessorKey: "programme_code",
    header: "Programme Code",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
  {
    accessorKey: "subprogramme_name",
    header: "SubProgramme Name",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
  {
    accessorKey: "subprogramme_code",
    header: "SubProgramme Code",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
  {
    accessorKey: "sub_subprogramme_name",
    header: "Sub SubProgramme Name",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
    {
    accessorKey: "sub_subprogramme_code",
    header: "Sub SubProgramme Code",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
    {
    accessorKey: "service_area_name",
    header: "Service Area Name",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
    {
    accessorKey: "service_area_code",
    header: "Service Area Code",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
    {
    accessorKey: "budget_output_code",
    header: "Budget Output Code",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
    {
    accessorKey: "budget_output_description",
    header: "Budget Output Description",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
    {
    accessorKey: "project_code",
    header: "Project Code",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
    {
    accessorKey: "item_description",
    header: "Item Description",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
    {
    accessorKey: "item_code",
    header: "Item Code",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
    {
    accessorKey: "fundingsourcecode",
    header: "Funding Source",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
      {
    accessorKey: "fundingsource",
    header: "Funding Source Code",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
      {
    accessorKey: "fundtype",
    header: "Fund Type",
    cell: ({ getValue }) => {
      const val = getValue<string | number>();
      return typeof val === "string" ? val.replace(/_/g, " ") : val;
    }
  },
   {
    accessorKey: "amount",
    header: "Amount",
    
  },
  // {
  //   accessorKey: "status",
  //   header: "Status",
  //   cell: ({ row }) => {
  //     const statusText = row.original.status;
  //     return (
  //       <Badge
  //         bg={`${statusText === "Active" ? "success-subtle" : "danger-subtle"}`}
  //         text={`${
  //           statusText === "Active" ? "success-emphasis" : "danger-emphasis"
  //         }`}
  //         pill={true}
  //       >
  //         {statusText}
  //       </Badge>
  //     );
  //   },
  // },
  
];


