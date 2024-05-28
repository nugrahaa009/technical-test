import PropTypes from 'prop-types'
import { Card, Col, Flex, Image, List, Pagination, Row, Typography } from "antd"

const { Text } = Typography

const ListPokemon = (props) => {
  const { data, showModal, count, offset, limit, onChangePagination } = props

  return (
    <Row gutter={16}>
      <Col span={24}>
        <List
          dataSource={data}
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }}
          renderItem={(item) => (
            <List.Item onClick={() => showModal(item.url)}>
              <Card hoverable cover={<Image src={item.image} preview={false} />}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Flex justify="center">
                      <Text strong>{item.name.toUpperCase()}</Text>
                    </Flex>
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      </Col>
      <Col span={24}>
        <Flex justify='center' style={{ marginTop: 40 }}>
          <Pagination
            size='large'
            total={count}
            current={offset}
            pageSize={limit}
            defaultCurrent={1}
            onChange={onChangePagination}
          />
        </Flex>
      </Col>
    </Row>
  )
}

ListPokemon.propTypes = {
  data: PropTypes.array,
  count: PropTypes.number,
  offset: PropTypes.number,
  limit: PropTypes.number,
  showModal: PropTypes.func,
  onChangePagination: PropTypes.func,
}

export default ListPokemon
