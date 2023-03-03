import mongoose from "mongoose";

export const logEldSchema = new mongoose.Schema({
    "eventSequenceIdNumber": { type: Number, require: true },
    "eventRecordStatus": { type: String, required: true },
    "eventRecordOrigin": { type: String, required: true },
    "eventType": { type: String, required: true },
    "eventCode": { type: String, required: true },
    "eventDate": { type: String, required: true },
    "eventTime": { type: String, required: true },
    "accumulatedVehicleMiles": { type: Number, required: true },
    "accumulatedEngineHours": { type: Number, required: true },
    "eventLatitude": { type: String, required: true },
    "eventLongitude": { type: String, required: true },
    "distanceSinceLastValidCoordinates": { type: String, required: true },
    "correspondingCmvOrderNumber": { type: String, required: true },
    "malfunctionIndicatorStatusForEld": { type: String, required: true },
    "eventDataCheckValue": { type: String, required: true },
    "lineDataCheckValue": { type: String, required: true },
    "cmvVin": { type: String, required: true },
    "eldnumber": { type: String, required: true }
})