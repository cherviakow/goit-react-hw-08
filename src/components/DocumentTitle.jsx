import { Helmet } from 'react-helmet-async';

// eslint-disable-next-line react/prop-types
export default function DocumentTitle({ children }) {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
}