module.exports = {

    fn: async function (inputs, exits) {
        var usuarios = await Usuario.find();
        exits.success(usuarios);
  
    }
  
  };
  