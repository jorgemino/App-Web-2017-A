/**
 * Created by USRDEL on 19/6/17.
 */
declare var module;
declare var mensaje;
declare var Usuario;
module.exports ={
  bienvenido:(req,res)=>
  {
    if(req.method=="POST")
    {
      return res.json({saludo:"hola"})
    }
    else {
      return res.send("Error");
    }
    },

  welcome:(req,res)=>
  {
    if(req.method=="PUT")
    {
      return res.send("hola")
    }
    else {
      return res.send("Error");
    }
  },
crearusuarioquemado:(req,res)=>{
    let usuarion={
      nombre:"Jorge",
      apellido:"MIÑO",
      password:"123",
      correo:"jfma26@gmail.com",
      fechanacimiento:"12-12-2017"
    };

Usuario.create(usuarion).exec((error,usuarion)=>{
      if(error)
      {
        return res.serveError(error);
      }else
      {
        return res.ok(usuarion)
      }
  })
}
};
