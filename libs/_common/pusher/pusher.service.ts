// import firebaseAdmin, { ServiceAccount } from 'firebase-admin';
// import { serviceAccount } from './pusher.config';
// import { Injectable } from '@nestjs/common';  
// import { ConfigService } from '@nestjs/config';

// import { PinoLogger } from 'nestjs-pino';
// import { AllowedUserFields, NotificationPayload } from 'apps/notification/src/notification.type';
// import { NotificationTypeEnum } from 'apps/notification/src/notification.enum';


// @Injectable()
// export class PusherService {
//   constructor(
//     private readonly logger: PinoLogger,
//     private readonly configService: ConfigService
//   ) {
//     firebaseAdmin.initializeApp({
//       credential: firebaseAdmin.credential.cert(serviceAccount as ServiceAccount),
//       databaseURL: this.configService.get('FIREBASE_DB_URL')
//     });
//   }

//   private isUserAllowedToReceiveNotificationType(
//     user: any,
//     notificationType: NotificationTypeEnum
//   ) {
//     const attached = {
//       [NotificationTypeEnum.NEW_CONTACT_MESSAGE]:
//         user.notificationManager[NotificationManagerEnum.WHEN_NEW_CONTACT_MESSAGE]
//     };
//     return attached[notificationType];
//   }

//   private getSpecificFieldsOfUsers(user: any) {
//     return {
//       id: user.id,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       slug: user.slug,
//       profilePicture: user.profilePicture
//     };
//   }

//   // private stringifyPayload(data: object): object {
//   //   const newObj = {};
//   //   Object.keys(data).map(key => {
//   //     if (!Array.isArray(data[key])) {
//   //       if (typeof data[key] === 'object') {
//   //         newObj[key] = JSON.stringify(data[key]);
//   //       } else newObj[key] = String(data[key]);
//   //     }
//   //   });
//   //   return newObj;
//   // }

//   private usersAllowedToReceiveNotifications(
//     receivers: any[],
//     notificationType: NotificationTypeEnum,
//     fromUser?: any
//   ) {
//     const whoReceiveNotifications = [];
//     for (const receiver of receivers) {
//       // Current user should not send notification to himself
//       const isFromAndToUserSamePerson = fromUser ? fromUser.id === receiver.id : false;

//       // `undefined` means notification type did not exist in notification manager
//       if (
//         receiver.notificationManager.VIA_PUSH &&
//         [true, undefined].includes(
//           this.isUserAllowedToReceiveNotificationType(receiver, notificationType)
//         ) &&
//         !isFromAndToUserSamePerson
//       )
//         whoReceiveNotifications.push(receiver);
//     }
//     return whoReceiveNotifications;
//   }

//   private async executeProcess(
//     arabicPayload: any[] = [],
//     englishPayload: any[] = [],
//     tokensAndIds: FcmTokensAndTokensLocalized,
//     payloadData: NotificationPayload,
//     refinedFromUser: AllowedUserFields = null,
//     notificationParentId: string = null
//   ): Promise<void> {
//     // Save chucked responses
//     const messagingResponse = { EN: [], AR: [], failedTokens: [] };
//     const failedTokens = [];

//     // Send the arabic message
//     if (arabicPayload && arabicPayload.length) {
//       for (const arMsg of arabicPayload) {
//         const res =
//           this.configService.get('NODE_ENV') !== 'testing'
//             ? await firebaseAdmin.messaging().sendMulticast(arMsg)
//             : jest.fn().mockReturnValue({
//               responses: arMsg.tokens.map((tk: string) => ({
//                 success: true,
//                 messageId: `${tk}__${Math.floor(Math.random() * 100000)}`
//               })),
//               successCount: arMsg.tokens.length,
//               failureCount: 0
//             })();
//         messagingResponse.AR.push(res);
//         if (res.failureCount > 0) {
//           res.responses.forEach((resp, idx) => {
//             if (!resp.success) {
//               const firstPartOfToken = tokensAndIds.AR.tokens[idx].split(':')[0];
//               failedTokens.push(firstPartOfToken);
//             }
//           });
//         }
//       }
//     }

//     // Send the english message
//     if (englishPayload && englishPayload.length) {
//       for (const enMsg of englishPayload) {
//         const res =
//           this.configService.get('NODE_ENV') !== 'testing'
//             ? await firebaseAdmin.messaging().sendMulticast(enMsg)
//             : jest.fn().mockReturnValue({
//               responses: enMsg.tokens.map((tk: string) => ({
//                 success: true,
//                 messageId: `${tk}__${Math.floor(Math.random() * 100000)}`
//               })),
//               successCount: enMsg.tokens.length,
//               failureCount: 0
//             })();
//         messagingResponse.EN.push(res);
//         if (res.failureCount > 0) {
//           res.responses.forEach((resp, idx) => {
//             if (!resp.success) {
//               const firstPartOfToken = tokensAndIds.EN.tokens[idx].split(':')[0];
//               failedTokens.push(firstPartOfToken);
//             }
//           });
//         }
//       }
//     }

//     messagingResponse.failedTokens = failedTokens;

//     console.log('>>>>>>>>>>>>>', messagingResponse)
//     await this.saveNotification({
//       payloadData,
//       toUsersIds: [...tokensAndIds.EN.ids, ...tokensAndIds.AR.ids].map(obj => obj.receiverId),
//       messagingResponse,
//       notificationParentId,
//       refinedFromUser
//     });
//   }

//   private getReceiverTokensAndIds(receivers: User[]): FcmTokensAndTokensLocalized {
//     return receivers.reduce(
//       (total, user) => {
//         const tokens = Object.values(user.fcmTokens) || [];
//         if (user.fcmTokens) {
//           total[user.favLang].tokens.push(...tokens.filter(t => !!t));
//           total[user.favLang].ids.push({ receiverId: user.id, seen: false });
//         }
//         return total;
//       },
//       { AR: { ids: [], tokens: [] }, EN: { ids: [], tokens: [] } }
//     );
//   }

//   private setPayload(tokens: string[], data: NotificationPayload, lang: LangEnum = LangEnum.EN) {
//     const refinedData = JSON.parse(JSON.stringify(data));

//     refinedData.notificationTitle = data[`${lang.toLowerCase()}Title`];
//     refinedData.notificationBody = data[`${lang.toLowerCase()}Body`];
//     refinedData.notificationType = data.notificationType;
//     delete refinedData.enTitle;
//     delete refinedData.arTitle;
//     delete refinedData.enBody;
//     delete refinedData.arBody;

//     const chunkedMessages = [];
//     for (let i = 0; i < tokens.length; i = i + 100) {
//       const slicedTokens = tokens.slice(i, i + 100);
//       chunkedMessages.push({
//         tokens: slicedTokens,
//         data: this.stringifyPayload(refinedData),
//         android: {
//           priority: 'high',
//           ttl: 4 * 24 * 60 * 60 * 1000 // 4 days in milliseconds (number)
//         },
//         apns: {
//           headers: {
//             'apns-priority': '10',
//             'apns-expiration': String(4 * 24 * 60 * 60 * 1000) // 4 days in milliseconds (string)
//           },
//           payload: {
//             aps: {
//               alert: { title: refinedData.notificationTitle, body: refinedData.notificationBody },
//               contentAvailable: 1,
//               mutableContent: true,
//               sound: 'default'
//             }
//           }
//         },
//         webpush: {
//           headers: {
//             Urgency: 'high',
//             TTL: String(4 * 24 * 60 * 60) // 4 days in sec (string)
//           },
//           notification: {
//             clickAction: data.clickAction || this.configService.get('FRONT_BASE'),
//             dir: lang === LangEnum.EN ? 'ltr' : 'rtl',
//             icon: `${this.configService.get('API_BASE')}/default/logo.png`,
//             title: refinedData.notificationTitle,
//             body: refinedData.notificationBody
//           }
//         }
//       });
//     }
//     return chunkedMessages;
//   }

//   public async push(
//     toUsers: any[] = [],
//     payloadData: NotificationPayload,
//     fromUser: any = null,
//     notificationParentId: string = null
//   ): Promise<{ status: string; }> {

//     // toUsers => push in  toUserReceivers array && check if toUser != FromUser
//     const toUserReceivers = [];
//     toUsers.map(toUserId => {
//       if (!fromUser || fromUser.id !== toUserId.id) toUserReceivers.push(toUserId);
//     });

//     // if enTitle && arTitle not exist => put APP_NAME
//     if (!payloadData.title) payloadData.title = process.env.APP_NAME;

//     // refinedFromUser === fromUser if from user is already exist .....
//     let refinedFromUser: AllowedUserFields = null;
//     if (fromUser) refinedFromUser = this.getSpecificFieldsOfUsers(fromUser);

//     // check if user allow to receive notification 
//     toUsers = this.usersAllowedToReceiveNotifications(
//       toUserReceivers,
//       payloadData.notificationType,
//       fromUser
//     );

//     // if receiver not found [no fcm token || no users] => save notification but in false mode 
//     if (!toUsers || !toUsers.length) {
//       await this.saveNotification({
//         payloadData,
//         toUsersIds: toUsers.map(u => u.id),
//         messagingResponse: { failed: true, reason: PushNotificationEnum.NO_USERS },
//         notificationParentId,
//         refinedFromUser
//       });
//       return { status: PushNotificationEnum.NO_USERS };
//     }

//     // Separate users to generate arabic and english payload
//     const tokensAndIds = this.getReceiverTokensAndIds(toUsers);
//     if (!tokensAndIds.AR.tokens.length && !tokensAndIds.EN.tokens.length) {
//       await this.saveNotification({
//         payloadData,
//         toUsersIds: toUsers.map(u => u.id),
//         messagingResponse: { failed: true, reason: PushNotificationEnum.NO_FCM_TOKENS },
//         notificationParentId,
//         refinedFromUser
//       });
//       return { status: PushNotificationEnum.NO_FCM_TOKENS };
//     }

//     let arabicPayload = null;
//     let englishPayload = null;

//     if (tokensAndIds.AR.tokens.length)
//       arabicPayload = this.setPayload(tokensAndIds.AR.tokens, payloadData, LangEnum.AR);
//     if (tokensAndIds.EN.tokens.length)
//       englishPayload = this.setPayload(tokensAndIds.EN.tokens, payloadData, LangEnum.EN);

//     // TODO: Scheduled notifications

//     await this.executeProcess(
//       arabicPayload,
//       englishPayload,
//       tokensAndIds,
//       payloadData,
//       refinedFromUser,
//       notificationParentId
//     );

//     return {
//       status: PushNotificationEnum.SUCCEED,
//       ...payloadData.details
//     };
//   }

//   async saveNotification(input: SaveNotificationForPusher): Promise<Notification> {
//     return await this.sequelize.transaction(async transaction => {
//       const notification = await this.notificationRepo.createOne(
//         {
//           ...(input.refinedFromUser && { senderId: input.refinedFromUser.id }),
//           ...(input.notificationParentId && { parentId: input.notificationParentId }),
//           type: input.payloadData.notificationType,
//           enTitle: input.payloadData.enTitle,
//           arTitle: input.payloadData.arTitle,
//           enBody: input.payloadData.enBody,
//           arBody: input.payloadData.arBody,
//           thumbnail:
//             input.payloadData.thumbnail || `${this.configService.get('API_BASE')}/default/logo.png`,
//           returnItToClient: NotificationTypeReturnedToUser.includes(
//             input.payloadData.notificationType
//           ),
//           log: JSON.stringify(input.messagingResponse)
//         },
//         transaction
//       );

//       const users = await this.userRepo.findAll({ id: input.toUsersIds });
//       await notification.$add('receivers', users, { transaction });

//       this.logger.warn(
//         '**********************************************************',
//         `CHECK NOTIFICATION ID IN DB: ${notification.id}`,
//         '**********************************************************'
//       );

//       return notification;
//     });
//   }
// }
