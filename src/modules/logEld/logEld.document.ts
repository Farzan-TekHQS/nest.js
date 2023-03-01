import { Document } from 'mongoose';

export default interface logEldDocument extends Document {
    "eventSequenceIdNumber": Number,
    "eventRecordStatus": String,
    "eventRecordOrigin": String,
    "eventType": String,
    "eventCode": String,
    "eventDate": String,
    "eventTime": String,
    "accumulatedVehicleMiles": Number,
    "accumulatedEngineHours": Number,
    "eventLatitude": String,
    "eventLongitude": String,
    "distanceSinceLastValidCoordinates": String,
    "correspondingCmvOrderNumber": String,
    "malfunctionIndicatorStatusForEld": String,
    "eventDataCheckValue": String,
    "lineDataCheckValue": String,
    "cmvVin": String,
    "eldnumber": String
}