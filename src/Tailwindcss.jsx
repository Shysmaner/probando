export function Taildwindcss() {
    return (
        <>
            <h2>Tailwindcss</h2>
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Click me
            </button>


            <button className="bg-blue-900 text-white px-4 py-2 rounded">Hola</button>

            <button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
                Hover me
            </button>

            <button className="bg-red-900 py-2 px-4 rounded transition text-white hover:bg-red-500">Ey</button>

            <div class="bg-white p-6 rounded shadow w-64">
                <h2 class="text-xl font-bold mb-2">Título</h2>
                <p class="text-gray-600">Texto de ejemplo</p>
            </div> */}

            <div className="bg-white p-4 rounded w-64">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsF2V4tli8ilzXmDCoH8vO74SWtnuTjDVqQQ&s" className="rounded-full"></img>
                <div className="rounded p-2 text-center">
                    <h2 className="text-white text-2xl b font-bold">Bob Esponja</h2>
                    <p>Descubre Bob Esponja</p>
                    <button className="bg-red-900 px-4 py-2 rounded hover:bg-red-200 transition">Click</button>
                </div>
            </div>
            

            <div className="grid justify-center bg-red-200 rounded w-1 m-auto">
                <h2 className="text-3xl text-center font-bold">Iniciar Sesión</h2>
                <form className="grid gap-2 p-5">
                    <input placeholder="Escriba aquí su correo" className="border border-solid border-white rounded outline-none text-xl"></input>
                    <input placeholder="Escriba aquí su contraseña" className="border border-solid border-white rounded outline-none text-xl"></input>
                    <button className="bg-red-800 rounded py-2 px-6 transition hover:bg-red-500">Iniciar Sesión</button>
                </form>
            </div>
        </>
    )
}