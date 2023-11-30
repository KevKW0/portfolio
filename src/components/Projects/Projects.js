import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mental from "../../Assets/Projects/mental.png";
import rbx from "../../Assets/Projects/rbx.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Berikut ini adalah beberapa project yang pernah saya kerjakan.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mental}
              isBlog={false}
              title="Manajemen Talenta Komisi Yudisial"
              description="Manajemen Talenta Komisi Yudisial merupakan aplikasi untuk penilaian pegawai pada Komisi Yudisial berdasarkan Peraturan Sekretaris Jendral Komisi Yudisial Republik Indonesia Nomor 1 Tahun 2023."
              demoLink="http://ky-mental.rekonesia.co.id/auth/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rbx}
              isBlog={false}
              title="RBXperience KemenPANRB"
              description="RBXperience merupakan aplikasi untuk pendaftaran Talkshow, Kelas Coaching, dan Penyerahan Hasil Evaluasi SAKIP, RB, dan ZI yang diadakan oleh Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Republik Indonesia."
              demoLink="https://rbxperience.id/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
