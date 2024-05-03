
import { AppBar } from './AppBar/AppBar';

// export const Layout = () => {
//   return (
//     <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
//       <AppBar />
//       <Suspense fallback={null}>
//         <Outlet />
//       </Suspense>
//       <Toaster position="top-right" reverseOrder={false} />
//     </div>
//   );
// };

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
    return (
      <div>
        <AppBar />
        {children}
      </div>
    );
  }