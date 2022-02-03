const matchData = {
    userType: constValues.userType.USER,
  };

  if (Object.keys(body).includes('paymentType')) {
    matchData['subscriptionData.paymentType'] = paymentType;
  }
  if (Object.keys(body).includes('userPaid')) {
    matchData['subscriptionData.userPaid'] = userPaid;
  }
  if (Object.keys(body).includes('vaccination')) {
    matchData['vaccinated'] = vaccination;
  }
  if (Object.keys(body).includes('keyword') && body.keyword) {
    matchData['$or'] = [
      { phoneNumber: { $eq: keyword } },
      { firstName: { $eq: keyword } },
      { lastName: { $eq: keyword } },
      { email: { $eq: keyword } },
    ];
  }




  {
    $match: matchData,
  },