import Cart from "./Contents/Cart"
import NavBar from "./Contents/NavBar"
import Sidebar from "./Contents/Sidebar"

function App() {

  return (
    <>
      <div className="relative w-full min-h-screen m-0 p-0 overflow-x-hidden ">
        <div className="max-w-screen-2xl mx-auto h-auto ">
          <NavBar />
          <Sidebar />
          <Cart />
        </div>
      </div>
    </>
  )
}

export default App
