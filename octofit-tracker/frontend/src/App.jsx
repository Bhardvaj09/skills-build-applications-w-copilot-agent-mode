import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h1 className="display-5 fw-bold mb-3">OctoFit Tracker</h1>
              <p className="lead text-muted mb-4">
                A modern multi-tier fitness application for tracking workouts,
                teams, and progress.
              </p>
              <div className="d-flex gap-3">
                <a className="btn btn-primary" href="http://localhost:8000/api/health">
                  Check API
                </a>
                <span className="badge bg-secondary align-self-center">Frontend: 5173</span>
                <span className="badge bg-secondary align-self-center">Backend: 8000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
