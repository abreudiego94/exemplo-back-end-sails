module.exports = {

    inputs: {

        id: {
            required: true,
            type: 'number',
           
        },
    },
   

    fn: async function (inputs, exits) {
        await Usuario.destroy({id: inputs.id});
        exits.success();
    }


};
