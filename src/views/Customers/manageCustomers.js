import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  Alert
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import Colors from "../../components/components-overview/Colors";
import Checkboxes from "../../components/components-overview/Checkboxes";
import RadioButtons from "../../components/components-overview/RadioButtons";
import ToggleButtons from "../../components/components-overview/ToggleButtons";
import SmallButtons from "../../components/components-overview/SmallButtons";
import SmallOutlineButtons from "../../components/components-overview/SmallOutlineButtons";
import NormalButtons from "../../components/components-overview/NormalButtons";
import NormalOutlineButtons from "../../components/components-overview/NormalOutlineButtons";
import Forms from "../../components/components-overview/Forms";
import FormValidation from "../../components/components-overview/FormValidation";
import CompleteFormExample from "../../components/employers/CompleteFormExample";
import Sliders from "../../components/components-overview/Sliders";
import ProgressBars from "../../components/components-overview/ProgressBars";
import ButtonGroups from "../../components/components-overview/ButtonGroups";
import InputGroups from "../../components/components-overview/InputGroups";
import SeamlessInputGroups from "../../components/components-overview/SeamlessInputGroups";
import CustomFileUpload from "../../components/components-overview/CustomFileUpload";
import DropdownInputGroups from "../../components/components-overview/DropdownInputGroups";
import CustomSelect from "../../components/components-overview/CustomSelect";

const manageCustomers = () => (
  <div>
    <Container fluid className="px-0">



    </Container>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Add Employee"
          subtitle="Overview"
          className="text-sm-left"
        />
      </Row>

      {/* <Colors /> */}

      <Row>
        <Col lg="8" className="mb-4">
  

          {/* Complete Form Example */}
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Manage Customers</h6>
            </CardHeader>

            <table className="table mb-0">
              <thead className="bg-light">
              <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    First Name
                  </th>
                  <th scope="col" className="border-0">
                    Last Name
                  </th>
                  <th scope="col" className="border-0">
                    Phone
                  </th>
                  <th scope="col" className="border-0">
                    Edit
                  </th>
                  <th scope="col" className="border-0">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>Kerry</td>
                  <td>Russian Federation</td>
                  <td>
                  <a href="/edit">Edit</a>

                  </td>
                  <td>

                    <a href="/remove">Remove</a>

                  </td>
                </tr>


              </tbody>
            </table>
          </Card>
        </Col>

       
      </Row>
    </Container>
  </div>
);

export default manageCustomers;
