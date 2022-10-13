import { lazy, Suspense } from 'react'
import { Link, Outlet, Routes, Route } from 'react-router-dom'

// @ts-ignore
const SubApp = lazy(() => import('subapp/App'))

const Layout = ({ children }: { children?: React.ReactNode }) => (
  <div>
    <h1 className="text-4xl font-bold text-gray-600">Container</h1>
    <hr />
    <ul>
      <li>
        <Link className="underline text-blue-400" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="underline text-blue-400" to="/subapp">
          SubApp
        </Link>
      </li>
    </ul>
    <hr />
    {children}
  </div>
)

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <h2>HOME</h2>
          </Layout>
        }
      />
      <Route
        path="/subapp/*"
        element={
          <Suspense fallback={<Layout>loading subapp...</Layout>}>
            <Layout>
              <SubApp basePath="" />
            </Layout>
          </Suspense>
        }
      />
      <Route path="*" element={<Layout>NotFound</Layout>} />
    </Routes>
  )
}

export default App
