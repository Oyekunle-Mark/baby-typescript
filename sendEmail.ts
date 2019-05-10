interface IEmailDetails {
  name: string,
  email: string
}

function sendEmail(contactDetails: IEmailDetails) {
  console.log(`${contactDetails.name} <${contactDetails.email}>`);
}

sendEmail({name: 'Oyekunle', email: 'Oyekunlemac@gmail.com'});

class Contact implements IEmailDetails {
  name: string;
  email: string;
  constructor(contactName: string, contactEmail: string) {
    this.name = contactName;
    this.email = contactEmail;
  }
}

const lambda = new Contact("Lambda School", "student_support@lambda.com");

sendEmail(lambda);
