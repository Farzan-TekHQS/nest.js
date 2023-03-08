import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as admin from 'firebase-admin';

const {
  firebase,
} = require('../../config/push-notifications-test-b479b-firebase-adminsdk-c21ba-41f8c62505.config');

admin.initializeApp({
  credential: admin.credential.cert(firebase),
});

@Injectable()
export class FcmService {
  constructor() {}

  sendNotification = async () => {
    try {
      let response;
      const message = {
        notification: {
          title: `Title`,
          body: `Hi! This is the push notification!`,
        },
        token:
          'dioRYeysRt2pmUIiG0bWmE:APA91bGejLCPgoW8WhIOoZizAuVwdyTHOCfZCkgdbirKN5HleLt8dDaeZID4lfp__0kB-liiuzvTFAUcMVmmhUKOAKQkX4IDK1BhK72i2PYZzJvsTZvxXN96Cac3s8fU8hkeUdJ_JwNT',
      };
      await admin
        .messaging()
        .send(message)
        .then((success) => {
          console.log(`Push notification sent successfully!`);
          response = {
            statusCode: 200,
            message: 'Push notification sent successfully!',
            data: [],
          };
          return response;
        })
        .catch((err) => {
          console.log(`Push notification failed!>>> `, err.message);
          response = {
            statusCode: 400,
            message: 'Push notification failed!',
            data: [],
          };
          return response;
        });
    } catch (err) {
      console.log(`Catch block of fcm service >>>> `, err.message);
    }
  };
}
