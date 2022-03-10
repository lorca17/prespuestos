import React, { useState, useEffect } from "react";
import Head from 'next/head'






export default function home2(){

  const [names, setNames] = useState([])
const [datos,setDatos] = useState([])
const [cantidad, setCantidad] = useState(1);
const [alto, setAlto] = useState('');
const [ancho, setAncho] = useState('');
const [plastico, setPlastico] = useState(true);
const [aluminio, setAluminio] = useState(false);
const [instalacion,setInstalacion] = useState(false)
const [total,setTotal] = useState (0)


const handleChange = () => {
  setPlastico(!plastico);
  setAluminio(!aluminio);
  };
  
  function formula(num1, num2, instlacion, plastico, cantidad) {
  let material = 22;
  if (!plastico) {
  material = 44;
  }
  
  if (instlacion === true) {
  let resultado = (num1 * num2 * material + 40) * cantidad;
  return resultado;
  }
  
  let resultado = num1 * num2 * material * cantidad;
  return resultado;
  };
  
  function anadir(){
  if (ancho != '' && alto != ''){
  
  
  setDatos( datos => [...datos,
  {"cantidad":cantidad,"alto":alto,"ancho":ancho,"plastico":plastico,"aluminio":aluminio,"instalacion":instalacion,
  "subtotal":formula(alto, ancho, instalacion, plastico, cantidad)}] )
  setAlto('')
  setAncho('')
  
  setTotal( total + formula(alto, ancho, instalacion, plastico, cantidad) )
  
  }
  
  };
  
  function borrar(){
  setDatos(datos => [])
  setTotal (total => 0)
  
  
  }




return (
<>
<Head>
<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" integrity="sha512-wnea99uKIC3TJF7v4eKk4Y+lMz2Mklv18+r4na2Gn1abDRPPOeef95xTzdwGD9e6zXJBteMIhZ1+68QC5byJZw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</Head>


  <div className="container mx-auto p-5">


    <h1 className="text-3xl text-center m-10">Presupuesto Persianas</h1>

{/*     <div className="columns-6">
      <div class="">
        Cantidad
      </div>
      <div class="">
        Alto
      </div>
      <div class="">
        Ancho
      </div>
      <div class="">
        Precio
      </div>
      <div class="">
        Material
      </div>
      <div class="">
        Instalacion
      </div>
    </div> */}



    {

    datos.map((e)=>(

    <div className="grid grid-cols-3 my-5 bg-slate-200">

      <div class="my-3">Cantidad:
        {' '+e.cantidad}
      </div>
      <div class="my-3">Alto:
        {' '+e.alto}
      </div>
      <div class="my-3">Ancho:
        {' '+e.ancho}
      </div>

      {/* material */}
      <div class="my-3">Material: <br></br>
        {
        e.plastico ? ' Plastico' :' Aluminio'
        }

      </div>

      <div class="my-3">Instalacion: <br></br>
        {
        e.instalacion ? 'Si' :'No'
        }
      </div>


      <div class="my-3">Subtotal: <br></br>
        {' '+e.subtotal} €
      </div>
    </div>
    ))
    }
<div className="container mx-center ">
  
    <h3 className=" w-100 my-5 bg-green-50 text-4xl p-4">Total: {total.toFixed(2)} </h3>
  </div>

      {/* Formulario introduccion de datos */}
    <div className="container mx-auto my-5">
      <h2 className="text-3xl text-center m-10">Formulario</h2>
      <div className="container mx-auto my-2">
        <div className="grid grid-cols-4 gap-4 ">Cantidad: 
          <input className="border-2 h-8" value={cantidad} maxlength="5" type="number" onChange={(e)=> setCantidad(e.target.value)
          }
          placeholder="Cantidad" />
          <input className="border-2" value={alto} maxlength="5" type="number" onChange={(e)=> setAlto(e.target.value) }
          placeholder="Alto" />
          <input className="border-2" value={ancho} maxlength="5" type="number" onChange={(e)=> setAncho(e.target.value) }
          placeholder="Ancho" />
        </div>

        <div className="container mx-auto my-6 text-center text-1xl sm:text-4xl" >

          <input className="m-2  h-4 w-4 sm:h-6 sm:w-6" type="checkbox" defaultChecked checked={plastico} onClick={(e)=> handleChange(e.target.value)}
          />
          Plastico

          <input className="m-2  h-4 w-4 sm:h-6 sm:w-6" type="checkbox" checked={aluminio} onChange={(e)=> handleChange(e.target.value)}
          />
          Aluminio

          <input className="m-2 h-4 w-4 sm:h-6 sm:w-6" type="checkbox" checked={instalacion} onChange={(e)=>
          setInstalacion(e.target.checked)}
          />
          Instalacion

        </div>
      </div>



    </div>
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-2 m-2">

        <button className="bg-blue-400 gap-2 p-5" onClick={anadir}>Añadir</button>
        <button className="bg-red-400 gap-2 p-5" onClick={borrar}>Borrar</button>
      </div>

    </div>

   {/*  <p>{JSON.stringify(datos)}</p> */}




    {/* Cierre tailwiund */}
  </div>


</>
)
}