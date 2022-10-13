import * as React from 'react'

import { lazy, Suspense } from 'react'

// @ts-ignore
const SubApp = lazy(() => import('subapp/App'))

function App(): JSX.Element {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-600">Container</h1>
      <hr />
      <Suspense fallback={<pre>loading subapp...</pre>}>
        <SubApp />
      </Suspense>
    </div>
  )
}

export default App
