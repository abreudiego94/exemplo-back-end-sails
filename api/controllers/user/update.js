module.exports = async function (inputs, response) {
   
    let params = inputs.allParams();
    var updatedUsers = await Usuario.update(params.id)
    .set({email:params.email, senha:params.senha})
    response.ok();


};
