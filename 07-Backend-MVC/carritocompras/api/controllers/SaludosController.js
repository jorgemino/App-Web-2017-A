module.exports = {
    bienvenido: function (req, res) {
        if (req.method == "POST") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error");
        }
    },
    welcome: function (req, res) {
        if (req.method == "PUT") {
            return res.send("hola");
        }
        else {
            return res.send("Error");
        }
    },
    crearusuarioquemado: function (req, res) {
        var usuarion = {
            nombre: "Jorge",
            apellido: "MIÑO",
            password: "123",
            correo: "jfma26@gmail.com",
            fechanacimiento: "12-12-2017"
        };
        Usuario.create(usuarion).exec(function (error, usuarion) {
            if (error) {
                return res.serveError(error);
            }
            else {
                return res.ok(usuarion);
            }
        });
    }
};
