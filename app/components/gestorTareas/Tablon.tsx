"use client"
import {useState} from "react";

type Tarea={
    id:number,
    titulo: string,
    descripcion:string
}


export default function Tablon(){
    const [titulo, setTitulo] = useState("")//título que empieza vacío
    const [descripcion, setDescripcion] = useState("")//descripción qiue empieza vacío
    const [tarea, setTareas] = useState<Tarea[]>([])//array tareas creadas que empieza vacío
    const [advertencia,setAdvert]=useState(false)
    const [vacio,setvacio]=useState(true)
    function anadirTarea() {
        if (titulo.trim() === "" || descripcion.trim() === "") {
            setAdvert(true)
            return
        }
        setvacio(false)
        setAdvert(false)
        const nuevaTarea: Tarea={
            id: Date.now(),
            titulo: titulo.trim(),
            descripcion: descripcion.trim(),
        }
        //let nuevaTarea=<Tareas id={Date.now()} titulo={titulo.trim()} descripcion={descripcion.trim()}></Tareas>
        
        setTareas([...tarea,nuevaTarea]);
        setTitulo("")
        setDescripcion("")
    }
    //#00786f
    return(<div className="pl-3 flex flex-row min-h-screen bg-teal-100">
        <div className=" min-w-1/2">
            <h1 className="p-1 ml-10 pt-4 text-2xl font-bold text-teal-600">Gestor de tareas básico</h1>
            <div>
                <input className="max-w-70 m-1 ml-10 bg-white" value={titulo} placeholder="Escribe un título" onChange={e => setTitulo(e.target.value)}></input>
                <textarea className="max-w-90 m-1 ml-10 bg-gray-200" value={descripcion} placeholder="Escribe una descripción" onChange={e => setDescripcion(e.target.value)}></textarea>
                
                <button  className="max-w-30 m-1 ml-10" onClick={anadirTarea}>Nueva Tarea</button>
                <p className="p-1 ml-10 pb-3 text-s font-bold text-teal-600">Total de tareas: {tarea.length}</p>
                <p className={`max-w-md ml-10 border-0 ${advertencia ? 'block' : 'hidden'}`}>
                    <p>No puedes dejar ningún campo vacío</p>
                </p>
                
            </div>
        </div>

        <div className="bg-cyan-800 min-w-1/2 flex justify-center">
            <div>
            <p className={`max-w-md border-0 bg-transparent ${vacio ? 'block' : 'hidden'}`}>
                <p className="text-white bg-transparent text-center text-lg">Todavía no tienes tareas</p>
            </p>
            </div>
            <div >{tarea.map((tarea) => (
                <div key={tarea.id}>
                <div className="min-w-50  m-3 p-4 pl-4 h-auto">
                    <div>
                        <h3 pl-1>{tarea.titulo}</h3>
                        <textarea  id="textarea-disabled" disabled className="cursor-pointer">{tarea.descripcion}</textarea>
                        <div className="flex flex-row">
                            <button id="completado" className="m-2" /><p className="pl-2">Completado</p>
                        </div>
                    </div>
                </div>
                </div>
            ))}</div>
        </div>
    </div>)
}