import React from "react";

// Import dependencias
import { Row, Col } from "react-bootstrap";

// Import componentes
import styles from "./styles.module.scss";

const TitlePage = ({ title }) => {
  return (
    <Row lg={12} md={12} sm={12} xs={12} style={{ margin: "20px 0 0 0" }}>
      <Col
        className="center"
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ padding: 0 }}
      >
        <h2 className={styles.title}>{title}</h2>
      </Col>
    </Row>
  );
};

export default TitlePage;
