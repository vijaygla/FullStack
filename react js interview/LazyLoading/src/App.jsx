// App.jsx
import React, { Suspense, lazy } from "react";

// Lazy load components
const ComponentOne = lazy(() => import("./ComponentOne"));
const ComponentTwo = lazy(() => import("./ComponentTwo"));

function App() {
  return (
    <div>
      <h1>🚀 Lazy Loading Demo</h1>

      {/* Suspense wraps lazy components and shows fallback while loading */}
      <Suspense fallback={<p>Loading Component One...</p>}>
        <ComponentOne />
      </Suspense>

      <Suspense fallback={<p>Loading Component Two...</p>}>
        <ComponentTwo />
      </Suspense>
    </div>
  );
}

export default App;
