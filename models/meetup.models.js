const mongoose = require("mongoose");

const MeetUpSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    hostingParty: {
      type: String,
      required: true,
    },
    eventThumbnail: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    dressCode: {
      type: String,
      required: true,
    },
    ageRestriction: {
      type: String,
      required: true,
    },
    eventTags: [
      {
        type: String,
        required: true,
        enum: [
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
        type: String,
        required: true,
      },
    ],
    price: {
      type: String,
      required: true,
    },
    speakerName: {
      type: String,
      required: true,
    },
    speakerDesignation: {
      type: String,
      required: true,
    },
    speakerImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MeetUpModel = mongoose.model("MeetUp", MeetUpSchema);

module.exports = MeetUpModel;
