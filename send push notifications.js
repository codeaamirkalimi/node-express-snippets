if (userExist.isLikeNotificationEnabled) {
    const NotificationDetails = {
      token: userExist.deviceToken,
      phoneType: userExist.phoneType,
      body: {
        title: constValues.NotificationTitle.like(userExist.language),
        notificationType: constValues.NotificationType.LIKE,
        fromUser: id,
        toUser: userId,
        action: id,
        content: constValues.NotificationContent.like(firstName, userExist.language),
      },
    };
    await sendPushNotification(NotificationDetails);
  }