import React from "react";
import { Row, Col, Image, Card } from "antd";

import placeholder from "static/images/office_bearers/placeholder.jpg";
import rajeev from "static/images/office_bearers/rajeev_garg.jpg";
import ranjana from "static/images/office_bearers/ranjana.jpeg";
import rashmi from "static/images/office_bearers/rashmi.jpg";
import raj from "static/images/office_bearers/raj_aloni.jpg";
import alok from "static/images/office_bearers/alok.jpg";
import nandita from "static/images/office_bearers/nandita_khanna.jpg";
import ganesh from "static/images/office_bearers/ganesh_parmeshwaran.png";
import alokSharma from "static/images/office_bearers/alok_sharma.jpg";

const { Meta } = Card;

const people = [
  {
    id: 1,
    name: "MR. RAJEEV KUMAR GARG",
    img: rajeev,
    position:
      "Principal, Datta Meghe World Academy, Airoli & President, Sahodaya Schools Association, Mumbai & Metropolitan",
    description:
      "Short Description or quote Short Description or quote Short Description or quote",
  },
  {
    id: 2,
    name: "MRS. RANJANA JANGRA",
    img: ranjana,
    position:
      "Principal, B K Birla School, Kalyan, Dist Thane and Vice- President, Sahodaya Schools Association, Mumbai & Metropolitan Region",
    description:
      "Short Description or quote Short Description or quote Short Description or quote",
  },
  {
    id: 3,
    name: "Dr Rashmi Rekha Saha",
    img: rashmi,
    position:
      "Principal, Lodha World School, LSG Palava phase 2, Dombivali & Treasurer, Sahodaya Schools Association.",
    description:
      "Short Description or quote Short Description or quote Short Description or quote",
  },
  {
    id: 3,
    name: "Mr Alok Katdare",
    img: alok,
    position:
      "Principal, Reliance Foundation School, Koparkhairne, Navi Mumbai & Member, Sahodaya Schools Association",
    description:
      "Short Description or quote Short Description or quote Short Description or quote",
  },
  {
    id: 4,
    name: "MRS. RAJ ALONI",
    img: raj,
    position:
      "Principal, Ramsheth Thakur Public School, Kharghar & Secretary, Sahodaya Schools Association",
    description:
      "Short Description or quote Short Description or quote Short Description or quote",
  },
  {
    id: 5,
    name: "MR. GANESH PARAMESHWARAN",
    img: ganesh,
    position:
      "Principal, Bal Bharati Public School, Plot No 5, Sector 4, Kharghar, Navi Mumbai,Maharashtra",
    description:
      "Short Description or quote Short Description or quote Short Description or quote",
  },
  {
    id: 6,
    name: "Mrs Nandita Khanna",
    img: nandita,
    position: "Principal, Nalanda Public School, Mulund (E) Mumbai & Joint Secretary, Sahodaya Schools Association",
    description:
      "Short Description or quote Short Description or quote Short Description or quote",
  },
  {
    id: 7,
    name: "Mr Alok Sharma",
    img: alokSharma,
    position: "Principal Bhartiya Vidyapeeth English Medium School, CBD Belapur, Navi Mumbai & Member Sahodaya Schools Association",
    description:
      "Short Description or quote Short Description or quote Short Description or quote",
  },
];

const BearerCard = ({ img, name, position }) => {
  return (
    <Card
      className="person-card"
      hoverable
      cover={<Image src={img} alt={name} />}
    >
      <Meta title={name} description={position} />
    </Card>
  );
};

const OfficeBearers = () => {
  return (
    <div className="office-bearers-section">
      <h2 className="office-bearers-title">Office Bearers</h2>
      <Row gutter={12}>
        {people.map((person) => (
          <Col
            className="card-col"
            key={person.id}
            xs={24}
            sm={12}
            md={8}
            lg={6}
          >
            <BearerCard {...person} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OfficeBearers;
