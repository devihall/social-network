const { Schema, model, Types } = require("mongoose");
const moment = require('moment');

const ReactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },

    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },

    username: {
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        //default value is set to the current timestamp
        default: Date.now,
        //Getter to format the timestamp
        get: createdAtInfo => moment(createdAtInfo).format('MMM DD, YYYY [at] hh:mm a')
    }
},
    { 
        toJSON: {
            virtuals:true,
            getters:true
        },
        id: false
    }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      //default value is set to the current timestamp
      default: Date.now,
      //Getter to format the timestamp
      get: (createdAtInfo) =>
        moment(createdAtInfo).format("MMM DD, YYYY [at] hh:mm a"),
    },

    username: {
      type: String,
      required: true,
    },

    reactions: [ReactionSchema],
  },

  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual('reactionNumbers').get(function (){
    return this.reactions.length
})

//creating the though model based on the thought schema
const Thought = model('Thought', ThoughtSchema)

//export the thought model
module.exports = Thought;