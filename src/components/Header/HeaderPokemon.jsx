import { Logo } from "../../assets"
import { Col, Flex, Image, Row } from "antd"

const HeaderPokemon = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Flex justify="center">
          <Image src={Logo} preview={false} />
        </Flex>
      </Col>
      <Col span={24}>
        
      </Col>
    </Row>
  )
}

export default HeaderPokemon
