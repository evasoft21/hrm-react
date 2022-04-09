import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";

const AddApplication = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">First Name</label>
                <FormInput
                  id="firstName"
                  // type="email"
                  placeholder="First Name"
                />
              </Col>

              <Col md="6" className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <FormInput
                  id="lastName"
                  // type="email"
                  placeholder="Last Name"
                />
              </Col>

              <Col md="6" className="form-group">
                <label htmlFor="address">Address</label>
                <FormInput
                  id="address"
                  // type="email"
                  placeholder="Address"
                />
              </Col>


              <Col md="6" className="form-group">
                <label htmlFor="department">Department </label>
                <FormInput
                  id="department"
                  // type="email"
                  placeholder="Department"
                />
              </Col>

              <Col md="6" className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <FormInput
                  id="phone"
                  // type="email"
                  placeholder="Phone Number "
                />
              </Col>


              <Col md="6" className="form-group">
                <label htmlFor="gender">Gender</label>
                <FormInput
                  id="gender"
                  // type="email"
                  placeholder="Gender "
                />
              </Col>

              <Col md="6" className="form-group">
                <label htmlFor="role">Role</label>
                <FormInput
                  id="role"
                  // type="email"
                  placeholder="Role "
                />
              </Col>

              <Col md="6" className="form-group">
                <label htmlFor="birth">Date Birth</label>
                <FormInput
                  id="birth"
                  // type="email"
                  placeholder="Date Birth"
                />
              </Col>


              <Col md="6" className="form-group">
                <label htmlFor="join">Date Join</label>
                <FormInput
                  id="join"
                  // type="email"
                  placeholder="Date Join"
                />
              </Col>

         
            </Row>

           
            <Button type="submit">Create New Customer</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default AddApplication;