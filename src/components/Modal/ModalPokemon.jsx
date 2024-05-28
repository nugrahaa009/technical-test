import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Button, Card, Col, Descriptions, Flex, Image, Modal, Row, Skeleton, Tag } from 'antd'

const ModalPokemon = (props) => {
  const { open, onCancel } = props

  const { loading, data } = useSelector((state) => state.pokemon.detail)

  const items = [
    {
      key: 'name',
      label: 'Name',
      children: data?.name?.toUpperCase(),
    },
    {
      key: 'base_experience',
      label: 'Base Experience',
      children: data?.base_experience,
    },
    {
      key: 'species',
      label: 'Species',
      children: data?.species?.name.toUpperCase(),
    },
    {
      key: 'height',
      label: 'Height',
      children: `${data?.height} cm`,
    },
    {
      key: 'weight',
      label: 'Weight',
      children: `${data?.weight} kg`,
    },
    {
      key: 'types',
      label: 'Type',
      children: (
        data?.types.map((item, i) => (
          <Tag key={i} color="#108ee9">{item?.type?.name.toUpperCase()}</Tag>
        ))
      ),
    },
  ]

  return (
    <Modal
      centered
      width={776}
      open={open}
      footer={null}
      closable={false}
      onCancel={onCancel}
    >
      {loading ? (
        <Skeleton />
      ) : (
        <Row gutter={[16, 24]}>
          <Col span={24}>
            <Flex justify='center'>
              <Card style={{ background: '#fff' }}>
                <Image src={data.sprites.front_default} width={300} height={300} />
              </Card>
            </Flex>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <Card style={{ background: '#fff' }}>
              <Flex justify='center'>
                <Image src={data.sprites.back_default} width={100} height={100} />
              </Flex>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <Card style={{ background: '#fff' }}>
              <Flex justify='center'>
                <Image src={data.sprites.back_shiny} width={100} height={100} />
              </Flex>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <Card style={{ background: '#fff' }}>
              <Flex justify='center'>
                <Image src={data.sprites.front_shiny} width={100} height={100} />
              </Flex>
            </Card>
          </Col>
          <Col span={24}>
            <Descriptions
              items={items}
              title="Pokemon Information"
              column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
            />
          </Col>
          <Col span={24}>
            <Flex justify='center'>
              <Button type='primary' onClick={onCancel}>Close Modal</Button>
            </Flex>
          </Col>
        </Row>
      )}
    </Modal>
  )
}

ModalPokemon.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func,
}

export default ModalPokemon
