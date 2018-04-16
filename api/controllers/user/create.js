module.exports = {

    inputs: {

        email: {
            required: true,
            type: 'string',
            isEmail: true,
        },

        senha: {
            required: true,
            type: 'string',
            maxLength: 200,
           
        },
    },
    
    fn: async function (inputs, exits) {
        let usuario = await Usuario.create(inputs).fetch();
        exits.success(usuario);
    }


};
