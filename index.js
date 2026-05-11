const express = require("express");

const app = express();

const { ConnectToDatabase } = require("./db/db.connect");

ConnectToDatabase();

app.use(express.json());

const cors = require("cors");

const corsOptions = {
origin: ["https://meet-up-frontend-ivory.vercel.app", "http://localhost:5173"], 
    methods: ["GET", "POST", "PUT", "DELETE"],  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const MeetUpModel = require("./models/meetup.models");

//Getting All MeetUp Data

const readAllMeetUpData = async () => {
  try {
    const AllMeetUpData = await MeetUpModel.find();
    console.log(AllMeetUpData);
    return AllMeetUpData;
  } catch (error) {
    console.log(error);
  }
};

app.get("/meetup", async (req, res) => {
  try {
    const GetAllMeetUpData = await readAllMeetUpData();
    if (!GetAllMeetUpData) {
      res.status(404).json({ error: "Meet Up Data Not Found." });
    } else {
      res.status(200).json({
        message: "Successfully Fetched All MeetUp Data.",
        GetAllMeetUpData,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Meet Up Data." });
  }
});

//Getting MeetUp Data by Using Event Title

const readAllMeetUpDataByTitle = async (eventTitle) => {
  try {
    const AllMeetUpDataByTitle = await MeetUpModel.findOne({
      title: eventTitle,
    });
    console.log(AllMeetUpDataByTitle);
    return AllMeetUpDataByTitle;
  } catch (error) {
    console.log(error);
  }
};

app.get("/meetup/:title", async (req, res) => {
  try {
    const GetMeetUpDataByTitle = await readAllMeetUpDataByTitle(
      req.params.title
    );
    if (!GetMeetUpDataByTitle) {
      res.status(404).json({ error: "Failed to Fetch meet up data by title." });
    } else {
      res.status(200).json({
        message: "Successfully Fetched Meet Up Data By Title",
        GetMeetUpDataByTitle,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to Fetch MeetUp Data By Title." });
  }
});

//Adding Meet Up Event List Data To the Database

const addAllMeetUpData = async (MeetUpData) => {
  try {
    const addingAllMeetUpData = new MeetUpModel(MeetUpData);
    const savedMeetUpData = await addingAllMeetUpData.save();
    console.log(savedMeetUpData);
    return savedMeetUpData;
  } catch (error) {
    console.log(error);
  }
};

app.post("/meetup", async (req, res) => {
  try {
    const PostingMeetUpData = await addAllMeetUpData(req.body);
    res.status(201).json({
      message: "Successfully Add New Event DataBase To the Database.",
      PostingMeetUpData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to Upload New Event Data to the Database." });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server Is Running on PORT - ", PORT);
});
