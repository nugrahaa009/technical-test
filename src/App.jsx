import { Col, Row } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { HeaderPokemon, ListPokemon, Loading, ModalPokemon } from "./components"
import { detailPokemon, listPokemon, unmountDetailPokemon, unmountListPokemon } from "./redux/actions/pokemonAction"

const App = () => {
  const dispatch = useDispatch()

  const [openModal, setOpenModal] = useState(false)

  const [limit, setLimit] = useState(20)

  const [offset, setOffset] = useState(2)

  useEffect(() => {
    const params = { limit, offset }
    dispatch(listPokemon(params))

    return () => {
      dispatch(unmountListPokemon())
    }
  }, [dispatch, limit, offset])

  const showModal = (url) => {
    dispatch(detailPokemon(url))
    setOpenModal(true)
  }

  const closeModal = () => {
    setOpenModal(false)
    dispatch(unmountDetailPokemon())
  }

  const onChangePagination = (offset, limit) => {
    setLimit(limit)
    setOffset(offset)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const { loading, data, count } = useSelector((state) => state.pokemon.list)

  return (
    <div className="container">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <HeaderPokemon />
        </Col>
        <Col span={24}>
          {loading ? (
            <Loading />
          ) : (
            <ListPokemon
              data={data}
              count={count}
              limit={limit}
              offset={offset}
              showModal={showModal}
              onChangePagination={onChangePagination}
            />
          )}
        </Col>
      </Row>
      {openModal && <ModalPokemon open={openModal} onCancel={closeModal} />}
    </div>
  )
}

export default App
