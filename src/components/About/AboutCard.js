import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, saya <span className="purple">Kevin Kurnia Wikarta </span>
            dari <span className="purple"> Bogor, Indonesia.</span>
            <br />
            Saat ini saya bekerja sebagai web developer di PT Bayu Ardi Triyana.
            <br />
            Saat ini, saya sedang menempuh pendidikan di Institut Bisnis dan Informatika Kesatuan, jurusan S1 Sistem Informasi.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
