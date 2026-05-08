const mongoose = require("mongoose");

const MeetUpSchema = new mongoose.Schema(
  {
    title: {
      type: string,
      required: true,
    },
    hostingParty: {
      type: string,
      required: true,
    },
    eventThumbnail: {
      type: string,
      required: true,
    },
    details: {
      type: string,
      required: true,
    },
    dressCode: {
      type: string,
      required: true,
    },
    ageRestriction: {
      type: string,
      required: true,
    },
    eventTags: [
      {
        type: string,
        enums: [
          "PortfolioReview",
          "ArtificialIntelligence",
          "Entrepreneurship",
          "Marketing",
          "DesignSkills",
          "TechNetworking",
        ],
      },
    ],
    date: {
      type: Date,
      required: true,
    },
    location: [
      {
        type: string,
        required: true,
      },
    ],
    price: {
      type: string,
      required: true,
    },
    speakerName: {
      type: string,
      required: true,
    },
    speakerDesignation: {
      type: string,
      required: true,
    },
    speakerImage: {
      type: string,
      required: true,
    },
  },
  { timeStamps: true }
);

const MeetUpModel = mongoose.model("MeetUp", MeetUpSchema);

module.exports = MeetUpModel;