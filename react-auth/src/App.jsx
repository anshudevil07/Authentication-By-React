
import Account from './Account'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import FreeComponent from './FreeComponent'
import AuthComponent from './AuthComponent'
import ProtectedRoutes from './ProtectedRoutes'

function App() {

  return (
    <Container>
      {/* <Account /> */}
      <Row>
        <Col className='text-center'>
          <h1>React Authentication</h1>

          <section id='navigation'>
            <a href='/'>Home</a>
            <a className='mx-5' href='free'>Free Component</a>
            <a href='/auth'>Auth Component</a>

          </section>
        </Col>
      </Row>
      {/* routes */}
      <Routes>
        <Route exact path='/' element={<Account />} />
        <Route exact path='/free' element={<FreeComponent />} />
        <Route exact path='/auth' element={
          <ProtectedRoutes>
            <AuthComponent />
          </ProtectedRoutes>
        } />

        <Route exact path='/checkout' element={
          <ProtectedRoutes>
            <h1>Checkout</h1>
          </ProtectedRoutes>
        } />
        <Route exact path='/orders' element={
          <ProtectedRoutes>
            <h1>Orders</h1>
          </ProtectedRoutes>
        } />


      </Routes>

    </Container>

  )
}

export default App