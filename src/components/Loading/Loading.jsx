import { Card, Col, Row, Skeleton } from "antd";

const Loading = () => {

  return (
    <Row gutter={[16, 16]}>
      {[...Array(20)].map((_, index) => (
        <Col key={index} xs={24} sm={24} md={6} lg={6}>
          <Card>
            <Skeleton />
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Loading
