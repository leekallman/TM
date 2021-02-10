import {graphql, useStaticQuery} from 'gatsby';

const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
    query { 
      site {
        siteMetadata{
          title
          url
          keywords
          description
        }
      }
    }
    `);
    return data.site.siteMetadata;
  }
  export default useSiteMetadata;