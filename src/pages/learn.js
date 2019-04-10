import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Center from "../components/center"
import { Jumbotron, Button } from 'reactstrap';

const IndexPage = () => (
  <Layout>
        <SEO title="Learn" keywords={[`nigga`, `fish`, 'learn']} />
        <br/>
        <Center>
        <p>
        Niggafish is a medium-sized fish which grows up to 120 cm (47 in) in length. Its body is oval shaped, spherical and relatively elongated. The skin is not covered with scales but is prickly. The fish has no pelvic fin and no lateral line. The dorsal fin and the anal fin are small, symmetric, and located at the rear end of the body. The head is large with a short snout that has two pairs of nostrils, and the mouth is terminal with four strong teeth.

The background coloration goes from white to grey, and the body is harmoniously dotted with black spots. The ventral area is usually clearer. The size of the spots is inversely proportional to the size of the fish; thus, a young individual will have large spots and adults of maximal size will have small spots. The juveniles have a yellowish body background coloration with dark stripes. The young adults still have stripes on the ventral area that will turn to spots later, and also some recollection of yellow on the body.
        </p>
        </Center>

  </Layout>
)

export default IndexPage
