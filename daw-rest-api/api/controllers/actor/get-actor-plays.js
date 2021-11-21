
module.exports = {


    friendlyName: 'Actor Plays',
  
  
    description: 'Aceast API este pentru a interoga piesele unui actor.',
  
  
    inputs: {
  
        actorId: {
          required: true,
          type: 'string',
          description: 'Id pentru a cauta piesele unui Actor.',
          extendedDescription: 'Trebuie sa fie un id de Actor valid.',
        },

        // movie: {
        //     required: false,
        //     type: 'string',
        //     description: 'Nume de film - cand este ',
        //     extendedDescription: 'Trebuie sa fie un id de Actor valid.',
        //   },
    },
  
  
    exits: {
  
      success: {
        description: 'Apel interogare piesele de teatru ale actor cu succes.'
      },
  
      invalid: {
        responseType: 'badRequest',
        description: 'Apel interogare piese de teatru pentru actor este invalid.',
        extendedDescription: 'If this request was sent from a graphical user interface, the request '+
        'parameters should have been validated/coerced _before_ they were sent.'
      },
  
    },
  
  
    fn: async function (inputs) {
      sails.log("get-actor-plays - daw inputs: ", JSON.stringify(inputs));
      const { actorId } = inputs;
  
      let result = [];
      try{
        const _actor = Actor.findOne({id:actorId});
        const plays = _actor.plays;
        sails.log("-----------------------------")
        sails.log(_actor)
        sails.log(plays)
        result = plays.split(";");
      } catch (err) {
        sails.log.error("Eroare la preluarea pieselor pt actorul " + actorId);
        sails.log.error(err);
      }
  
      sails.log("get-actor-plays - daw result: ", JSON.stringify(result));
      return result;
  
    }
  
  
  };
  