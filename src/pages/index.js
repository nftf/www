import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NFish from "../components/nfish"
import Center from "../components/center"
import { Jumbotron, Button } from 'reactstrap';

const IndexPage = () => (
  <Layout>
  <SEO title="Home" keywords={[`nigga`, `fish`]} />
  <Jumbotron>
        <Center>
    <h1>The end-game for humanity.</h1>
        <p className="lead">The final frontier of political ideologies.</p>
        <hr className="my-2" />
        <NFish/>
        <p className="lead">
        <Link to="/learn">
        <Button color="primary">Learn more about Nigga Fish</Button>
        </Link>
        </p>
        </Center>
      </Jumbotron>
  </Layout>
)

export default IndexPage
